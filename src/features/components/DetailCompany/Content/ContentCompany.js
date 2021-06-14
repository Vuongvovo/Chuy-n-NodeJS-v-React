import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/DetailCompany/ContentCompany.scss"
import logo from "../../../images/logoNew2.png"
import { useForm } from 'react-hook-form'
export default function ContentCompany() {

    return (
        <div className="contentCompany">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="company__box">
                            <div className="company__box__title">
                                Giới thiệu
                            </div>
                            <div className="company__box__content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu euismod massa a quam viverra interdum urna vel id neque, Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio. Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
                                <br />
                                Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio. Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
                            </div>
                        </div>
                        <div className="job">
                            <div className="job__title">
                                Việc đã đăng tuyển
                            </div>
                            <div className="job__content">
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="job__box">
                                    <div className="job__tag">hot</div>
                                    <div className="job__logo">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="job__content">
                                        <div className="job__title">
                                            <Link to="/jobs/work/1"><h4 className="jobTitle" >Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                        </div>
                                        <div className="job__nameCompany">
                                            <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
                                        </div>
                                        <div className="job__detail">
                                            <div className="job__detail--address">
                                                <div className="job__icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <span>Hà nội</span>
                                            </div>
                                            <div className="job__detail--deadline outSize outSize">
                                                <div className="job__icon">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <span>26/03/2021</span>
                                            </div>
                                            <div className="job__detail--salary">
                                                <div className="job__icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <span>7 - 14 Triệu VNĐ</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="company__box">
                            <div className="company__box__title">
                                Thông tin
                            </div>
                            <div className="company__box__detail">
                                <div className="company__box__detail__icon">
                                    <i className="fas fa-sign-in-alt"></i>
                                </div>
                                <div>
                                    <div className="company__box__detail__title">
                                        Tham gia
                                    </div>
                                    <div className="company__box__detail__content">
                                        Tháng 12/ 2021
                                    </div>
                                </div>
                            </div>
                            <div className="company__box__detail">
                                <div className="company__box__detail__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <div className="company__box__detail__title">
                                        Địa điểm
                                    </div>
                                    <div className="company__box__detail__content">
                                        Thanh xuân, Hà nội
                                    </div>
                                </div>
                            </div>
                            <div className="company__box__detail">
                                <div className="company__box__detail__icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <div className="company__box__detail__title">
                                        Email
                                    </div>
                                    <div className="company__box__detail__content">
                                        nhadatmoi@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="company__box__detail">
                                <div className="company__box__detail__icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <div className="company__box__detail__title">
                                        Điện thoại
                                    </div>
                                    <div className="company__box__detail__content">
                                        +84984093331
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="company__box">
                            <div className="company__box__title">
                                Liên hệ ngay
                            </div>
                            <div className="company__box__email">
                                <form >
                                    <input type="text" name="yourName" placeholder="Tên của bạn" />
                                    <input type="text" name="yourEmail" placeholder="Email của bạn" />
                                    <input type="text" name="title" placeholder="Tiêu đề" />
                                    <input type="text" name="messager" placeholder="Tên của bạn" />
                                    <input type="submit" value="Gửi" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
