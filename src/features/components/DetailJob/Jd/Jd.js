import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/DetailJob/Jd.scss"
import qc from "../../../images/1227.gif"
import KeyTag from '../../Jobs/ListJobs/KeyTag'
export default function Jd(props) {
    let data = props.data
    return (
        <div className="Jd">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="job__box">
                            <div className="job__box__title">
                                <h4>{data.name}</h4>
                            </div>
                            <div className="job__box__detail">
                                <div className="job__box__detail--address">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {data.address}
                                </div>
                                <div className="job__box__detail--fulltime">
                                    <i className="fas fa-hourglass-half"></i>
                                    {data.nature}
                                </div>
                                <div className="job__box__detail--status">
                                    <i className="fas fa-unlock-alt"></i>
                                    Hết hạn
                                </div>
                                <div className="job__box--detail--salary">
                                    <i className="fas fa-dollar-sign"></i>
                                    {data.price} triệu
                                </div>
                            </div>
                            <div className="apply">
                                <Link to="">Ứng tuyển ngay</Link>
                            </div>
                        </div>
                        <div className="job__box">
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Mô tả công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.interest}
                                    <br />
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.form}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Quyền lợi được hưởng</p>
                                </div>
                                <div className="job__box__content--jd">
                                    • Có cơ hội tiếp cận với những công nghệ mới nhất về phát triển ứng dụng mobile app/web app<br />
                                    • Có cơ hội làm việc trực tiếp với khách hàng tại châu âu và Australia<br />
                                    • Được làm việc trong môi trường chuyên nghiệp, đam mê công nghệ và cởi mở<br />
                                    • Có cơ hội trở thành nhân viên chính thức với mức lương hấp dẫn và giữ vai trò key trong các dự án về phát triển mobile apps của công ty<br />
                                    • Có hỗ trợ cho thực tập sinh, tùy năng lực.<br />
                                    • Lương trợ cấp theo kết quả công việc và thưởng theo dự án<br />
                                    • Làm việc chính thức ngay khi đủ khả năng giải quyết công việc trên dự án<br />
                                    • Đánh giá thay đổi thường xuyên theo năng lực và kĩ năng làm việc<br />
                                    • Nhiều cơ hội thăng tiến lên quản lí team hay quản lí business.<br />
                                    • Được hưởng các quyền lợi chung như bảo hiểm, thưởng Tết, du lịch hè khi làm việc chính thức<br />
                                    • Được nghỉ thứ 7,CN<br />
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Địa điểm làm việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.address}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Nghành nghề</p>
                                </div>
                                <div className="job__box__content--jd">
                                    javascript
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Tính chất công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.nature}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu bằng cấp(tối thiểu)</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.request}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu kinh nghiệm</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.exprience}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="deadline__box">
                            <div className="deadline">
                                <div className="deadline__icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div>
                                    <div className="deadline__title">Hạn chót</div>
                                    <div className="deadline__time">12/05/2021</div>
                                </div>
                            </div>
                            <div className="deadline__icon--bot">
                                <i className="far fa-clock"></i>
                            </div>
                        </div>
                        <div className="save__box">
                            <div className="save__box__title">
                                Lưu công việc
                            </div>
                        </div>
                        <div className="advertisement">
                            <img src={qc} alt="" />
                        </div>
                        <div className="box__keyTag">
                            <KeyTag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
