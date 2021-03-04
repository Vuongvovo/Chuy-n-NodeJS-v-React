import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/Home/ListCategories.scss"
export default function ListCategories() {
    return (
        <div className="categori">
            <div className="container">
                <div className="heading">
                    <div className="heading__title">
                        <h3>Chọn việc theo nghành</h3>
                    </div>
                    <div className="heading__hr"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Thực tập sinh
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Lập trình web
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Thiết kế đồ hoạ
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Lập trình mobile
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Trí tuệ nhân tạo
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Mạng máy tính
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Lập trình .NET
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <Link to="" className="categori__link">
                            <div className="categori__box">
                                <div className="categori__title">
                                    Cơ sở dữ liệu
                                </div>
                                <div className="categori__icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="categori__total">
                                    10 công việc
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
