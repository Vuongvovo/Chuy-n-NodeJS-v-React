import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
export default function RegisterUser() {
    const schema = yup.object().shape({
        userName: yup.string().email().required(),
        name: yup.string().required(),
        password: yup.string().min(4).max(20).required(),
        rePassword: yup.string().oneOf([yup.ref("password"), null])
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => { console.log(data); }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="register__box__left__title">
                    Email đăng nhập
                </div>
                <input type="text" {...register("userName")} placeholder="Email" />
                <p className="text-danger">{errors.userName ? "Email không đúng định dạng" : ""}</p>
                <div className="register__box__left__title">
                    Tên người dùng
                </div>
                <input type="text" {...register("name")} placeholder="Tên người dùng" />
                <p className="text-danger">{errors.name ? "Tên người dùng khống phù hơp" : ""}</p>
                <div className="register__box__left__title">
                    Mật khẩu
                </div>
                <input type="password" {...register("password")} placeholder="Mật khẩu" />
                <p className="text-danger">{errors.password ? "Mật khẩu ít nhất 4 ký tự và không quá 20 ký tự" : ""}</p>
                <div className="register__box__left__title">
                    Nhập lại mật khẩu
                </div>
                <input type="password" {...register("rePassword")} placeholder="Mật khẩu" />
                <p className="text-danger">{errors.rePassword ? "Mật khẩu không trùng khớp" : ""}</p>
                <div className="register__box__left__button">
                    <input type="submit" value="Đăng ký" />
                </div>
            </form>
        </>
    )
}
