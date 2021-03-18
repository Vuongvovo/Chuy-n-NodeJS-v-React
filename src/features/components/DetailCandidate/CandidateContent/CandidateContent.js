import React from 'react'
import { useForm } from 'react-hook-form'
import "../../../scss/DetailCandidate/CandidateContent.scss"
export default function CandidateContent() {
    const style = {
        width: '50%'
    }
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => { console.log(data); }
    return (
        <div className="candidateContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="candidate__box">
                            <div className="candidate__box__title">
                                Kỹ năng
                            </div>
                            <div className="candidate__box__skill">
                                <div className="skill__detail">
                                    <div className="skill__detail__name">
                                        Html,css (90%)
                                    </div>
                                    <div className="skill__detail__line"><div className="line" style={style}></div></div>
                                </div>
                                <div className="skill__detail">
                                    <div className="skill__detail__name">
                                        JavaScript (70%)
                                    </div>
                                    <div className="skill__detail__line"><div className="line"></div></div>
                                </div>
                                <div className="skill__detail">
                                    <div className="skill__detail__name">
                                        GitHub (50%)
                                    </div>
                                    <div className="skill__detail__line"><div className="line"></div></div>
                                </div>
                                <div className="skill__detail">
                                    <div className="skill__detail__name">
                                        NextJs (20%)
                                    </div>
                                    <div className="skill__detail__line"><div className="line"></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="candidate__box">
                            <div className="candidate__box__title">
                                Giới thiệu
                            </div>
                            <div className="candidate__box__content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu euismod massa a quam viverra interdum urna vel id neque, Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio. Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
                            <br />
                                Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio. Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="candidate__box">
                            <div className="candidate__box__title">
                                Thông tin
                            </div>
                            <div className="candidate__box__detail">
                                <div className="candidate__box__detail__icon">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <div>
                                    <div className="candidate__box__detail__title">
                                        Ngày sinh
                                    </div>
                                    <div className="candidate__box__detail__content">
                                        06/03/2021
                                    </div>
                                </div>
                            </div>
                            <div className="candidate__box__detail">
                                <div className="candidate__box__detail__icon">
                                    <i className="fas fa-sign-in-alt"></i>
                                </div>
                                <div>
                                    <div className="candidate__box__detail__title">
                                        Tham gia
                                    </div>
                                    <div className="candidate__box__detail__content">
                                        Tháng 12/ 2021
                                    </div>
                                </div>
                            </div>
                            <div className="candidate__box__detail">
                                <div className="candidate__box__detail__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <div className="candidate__box__detail__title">
                                        Địa điểm
                                    </div>
                                    <div className="candidate__box__detail__content">
                                        Thanh xuân, Hà nội
                                    </div>
                                </div>
                            </div>
                            <div className="candidate__box__detail">
                                <div className="candidate__box__detail__icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <div className="candidate__box__detail__title">
                                        Email
                                    </div>
                                    <div className="candidate__box__detail__content">
                                        nhadatmoi@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="candidate__box__detail">
                                <div className="candidate__box__detail__icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <div className="candidate__box__detail__title">
                                        Điện thoại
                                    </div>
                                    <div className="candidate__box__detail__content">
                                        +84984093331
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="candidate__box">
                            <div className="candidate__box__title">
                                Liên hệ ngay
                            </div>
                            <div className="candidate__box__email">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" name="yourName" placeholder="Tên của bạn" ref={register} />
                                    <input type="text" name="yourEmail" placeholder="Email của bạn" ref={register} />
                                    <input type="text" name="title" placeholder="Tiêu đề" ref={register} />
                                    <input type="text" name="messager" placeholder="Tên của bạn" ref={register} />
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
