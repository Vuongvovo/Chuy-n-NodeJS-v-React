import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../../../images/logoNew2.png"
import banner from '../../../images/xinviec.jpg'
import "../../../scss/Companys/Company.scss"
export default function Companys() {
    const style = {
        background: `url(${banner}) repeat center`,
        backgroundSize: "cover",
    }
    return (
        <div className="companys">
            <div className="heading">
                <div className="heading__title">
                    <h3>Công ty</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box" style={style}>
                            <div className="company__bg">
                                <div className="company__box__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="company__box__name">
                                    Nhà đất mới
                                </div>
                                <div className="company__box__address">
                                    <span>Thanh Xuân, Hà Nội</span>
                                </div>
                                <div className="company__box__button">
                                    <Link to="/companys/1">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pagination">
                    <Pagination defaultCurrent={1} total={100} />
                </div>
            </div>
        </div>
    )
}
