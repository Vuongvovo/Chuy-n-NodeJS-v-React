import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd'
import { Link } from "react-router-dom"
import SpinLoad from "../../../Spin/Spin"
import workApi from "../../../../../api/workApi"
import { formatDateWork } from '../../../../container/Functionjs'

export default function Jobs({ id, heard }) {

    const [data, setData] = useState()
    const [state, setState] = useState({ page: localStorage.getItem("pageWorkHomeInfor") || 1 })
    const { page } = state

    const getApi = async () => {
        await workApi.getAllId({ page: page, id: id }).then(data => {
            setData(data)
        })
    }
    useEffect(() => {
        localStorage.setItem("pageWorkHomeInfor", page);
        getApi()
    }, [page])
    return (
        <div className="ListJob">
            {heard ? <div className="heading">
                <div className="heading__title">
                    <h3>Việc đã đăng</h3>
                </div>
                <div className="heading__hr"></div>
            </div> : ""}

            <div className="content">
                <div className="row">
                    {!data ? <SpinLoad /> :
                        data.data.rows.map(ok => (
                            <div className="col-lg-12">
                                <div className="job__box mb-3">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={ok.Company.avatar} alt="" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to={`/jobs/work/${ok.id}`}><h4 className="jobTitle">{ok.name}</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to={`/jobs/work/${ok.id}`}><span>{ok.Company.name}</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>{ok.address}</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>{formatDateWork(ok.dealtime)}</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>{ok.price1} - {ok.price2} Triệu VNĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {!data ? "" : <div className="pagination">
                        {data.data.count === 0 ? "" : <Pagination defaultCurrent={page} total={data.data.count} />}
                    </div>}
                </div>
            </div>
        </div>
    )
}
