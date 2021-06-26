import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import companyApi from '../../../../../api/companyApi'
import workApplyApi from '../../../../../api/workApplyApi'
import "../../../../scss/inforCompany/UserApply.scss"
import SpinLoad from '../../../Spin/Spin'
export default function UserApply({ id }) {

    const [data, setData] = useState()
    const getApi = async () => {
        await workApplyApi.checkWorkApply(id).then(data => {
            setData(data.Works)
        })
    }
    useEffect(() => {
        getApi()
    }, [])

    return (
        <div className="userApply">
            <div className="heading">
                <div className="heading__title">
                    <h3>Ứng viên ứng tuyển</h3>
                </div>
                <div className="heading__hr"></div>
            </div>

            <div className="content">
                {!data ? <SpinLoad /> :
                    data.map(ok => (
                        <div className="content___box">
                            <div className="content___box--title">{ok.name}</div>
                            <div className="hr"></div>
                            <div className="content___box---user">
                                <div className="row">
                                    {ok.workapply2.length === 0 ? <p className="text-danger">Chưa có ứng viên ứng tuyển</p> :
                                        ok.workapply2.map(oki => (
                                            <div className="col-md-12">
                                                <Link>
                                                    <div className="d-flex">
                                                        <div className="content___box---user---img">
                                                            <img src={oki.avatar} alt="" width={150} />
                                                        </div>
                                                        <div className="content___box---user---infor">
                                                            <table>
                                                                <tr>
                                                                    <td className="td">Tên người dùng</td>
                                                                    <td>{oki.name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="td">Địa chỉ</td>
                                                                    <td>{oki.address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="td">Email</td>
                                                                    <td>{oki.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="td">Điện thoại</td>
                                                                    <td>{oki.phone}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="td">Giới tính</td>
                                                                    <td>{oki.male}</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        ))}
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
