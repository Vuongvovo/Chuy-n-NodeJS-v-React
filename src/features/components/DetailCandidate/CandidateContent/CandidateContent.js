import React from 'react'
import renderHTML from 'react-render-html';
import { checkDateCompany } from '../../../container/Functionjs';

import "../../../scss/DetailCandidate/CandidateContent.scss"
export default function CandidateContent({ data }) {
    const style = {
        width: '50%'
    }

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
                                {data.introduce ? renderHTML(data.introduce) : ""}
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
                                        {checkDateCompany(data.createdAt)}
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
                                        {data.address}
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
                                        {data.email}
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
                                        {data.phone ? data.phone : <span className="text-danger">Chưa cập nhật</span>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="candidate__box">
                            <div className="candidate__box__title">
                                Liên hệ ngay
                            </div>
                            <div className="candidate__box__email">
                                <form>
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
