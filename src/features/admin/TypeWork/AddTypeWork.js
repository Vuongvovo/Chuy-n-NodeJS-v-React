import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addtypeWork, typeWorkData, updatetypeWork } from '../Slice/typeWorkSlice';
import typeWorkApi from "./../../../api/typeWorkApi"
export default function AddtypeWork() {
    const { id } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(async () => {
        if (id) {
            reset(await typeWorkApi.getOne(id).then(data => {
                return data
            }));
        }
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const actionResult = async (page) => { await dispatch(typeWorkData(page)) }

    const onhandleSubmit = (data) => {
        if (id) {
            dispatch(updatetypeWork({ name: data.name, id: data.id }));
        } else {
            const action = addtypeWork({ name: data.name, status: 0 });
            dispatch(action);
        }
        setTimeout(() => {
            actionResult({ page: localStorage.getItem("pagetypeWork") || 1 });
        }, 700);
        history.push("/admin/typeWork");
    }
    return (
        <div id="admin">
            <div className="heading">
                <div className="heading__title">
                    <h3>{id ? "Sửa loại công việc" : "Thêm loại công việc"}</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit(onhandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tên loại công việc</label>
                        <input {...register("name", { required: true })} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        {errors.name && <span className="text-danger">Bạn không được để trống!</span>}
                    </div>
                    <div className="text-center mtb">{id ? <input type="submit" value="Sửa" /> : <input type="submit" value="Thêm mới" />}</div>
                </form>
            </div>
        </div>
    )
}
