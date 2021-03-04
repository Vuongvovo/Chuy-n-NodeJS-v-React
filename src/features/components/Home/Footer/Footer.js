import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/Home/Footer.scss"
export default function Footer() {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <div className="footer__box">
                            <div className="footer__title">
                                <h3>Giới thiệu</h3>
                            </div>
                            <div className="footer__content">
                                <div className="about">
                                    <span >
                                        Chúng tối là công ty tìm kiếm việc làm nhanh chóng
                                        với tiêu chí khách hàng là thượng đế. rất mong muốn được mọi người
                                        đón nhận.
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__box">
                            <div className="footer__title">
                                <h3>Liên lạc với chúng tôi</h3>
                            </div>
                            <div className="footer__content">
                                <div className="footer__content--location">
                                    <div className="location--title text-white">
                                        Địa chỉ :
                                    </div>
                                    <div className="location--content">
                                        Số 5, Đường Minh Khai, toà nhà BigCity, thành phố Vinh.
                                    </div>
                                </div>
                                <div className="footer__content--contact">
                                    <div className="contact--title text-white pt-3">
                                        Liên hệ :
                                    </div>
                                    <div className="contact--content">
                                        <span>Điện thoại: +8438329473</span><br />
                                        <span>Email: kiennvdhv@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__box">
                            <div className="footer__title">
                                <h3>Đường dẫn nhanh</h3>
                            </div>
                            <div className="footer__content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><Link to="">Lập trình web</Link></li>
                                            <li><Link to="">Thiết kế đồ hoạ</Link></li>
                                            <li><Link to="">Trí tuệ nhân tạo</Link></li>
                                            <li><Link to="">Mạng máy tính</Link></li>
                                            <li><Link to="">Cơ sở dữ liệu</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <Link to="">JavaScript</Link>
                                            </li>
                                            <li>
                                                <Link to="">Python</Link>
                                            </li>
                                            <li>
                                                <Link to="">Java</Link>
                                            </li>
                                            <li>
                                                <Link to="">.NET</Link>
                                            </li>
                                            <li>
                                                <Link to="">HTML, CSS</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__box">
                            <div className="footer__title">
                                <h3>Mạng xã hội</h3>
                            </div>
                            <div className="footer__content">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
