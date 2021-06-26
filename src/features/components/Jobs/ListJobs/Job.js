import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { workData } from '../../../admin/Slice/workSlice'
import { formatDateWork } from '../../../container/Functionjs'
import "../../../scss/SearchJobs/ListJob.scss"
import SpinLoad from '../../Spin/Spin'
import KeyTag from './KeyTag'
export default function Job() {
    const work = useSelector(state => state.works.work.data);
    const loading = useSelector(state => state.works.loading)
    const dispatch = useDispatch();
    const [state, setState] = useState({ page: localStorage.getItem("pageWorkHome") || 1 })
    const { page } = state
    const actionResult = async (page) => { await dispatch(workData(page)) }
    useEffect(() => {
        localStorage.setItem("pageWorkHome", page);
        actionResult({ page: page, status: 1 });
    }, [page])
    return (
        <div className="ListJobSearch">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {loading ? <SpinLoad /> :
                            work.rows.map(data => (
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={data.Company.avatar} alt="" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to={`/jobs/work/${data.id}`}><h4 className="jobTitle" title={data.name}>{data.name}</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to={`/jobs/work/${data.id}`} > <span>{data.Company.name}</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>{data.address}</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>{formatDateWork(data.dealtime)}</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>{data.price1} - {data.price2} Triệu VNĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="box__filter">
                            <div className="filter--title">
                                <p>Số lượng tuyển</p>
                            </div>
                            <div className="filter__content">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        5 nhân viên

                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        10 nhân viên
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        15 nhân viên
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box__filter">
                            <div className="filter--title">
                                <p>Số lượng tuyển</p>
                            </div>
                            <div className="filter__content">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        5 nhân viên

                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        10 nhân viên
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        15 nhân viên
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box__filter">
                            <div className="filter--title">
                                <p>Thời gian làm việc </p>
                            </div>
                            <div className="filter__content">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        Full Time

                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                        Part Time
                                    </label>
                                </div>
                            </div>
                        </div>
                        <KeyTag />
                    </div>
                </div>
                {loading ? <SpinLoad /> :
                    <div className="pagination">
                        <Pagination defaultCurrent={page} total={work.count} />
                    </div>
                }
            </div>
        </div>
    )
}
