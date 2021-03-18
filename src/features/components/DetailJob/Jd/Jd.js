import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/DetailJob/Jd.scss"
import qc from "../../../images/1227.gif"
import KeyTag from '../../Jobs/ListJobs/KeyTag'
export default function Jd() {
    return (
        <div className="Jd">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="job__box">
                            <div className="job__box__title">
                                <h4>Thực Tập Sinh Lập Trình Viên (Reactjs, React Native)</h4>
                            </div>
                            <div className="job__box__detail">
                                <div className="job__box__detail--address">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Hà nội
                                </div>
                                <div className="job__box__detail--fulltime">
                                    <i className="fas fa-hourglass-half"></i>
                                Fulltime
                                </div>
                                <div className="job__box__detail--status">
                                    <i className="fas fa-unlock-alt"></i>
                                Hết hạn
                                </div>
                                <div className="job__box--detail--salary">
                                    <i className="fas fa-dollar-sign"></i>
                                10 triệu
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
                                    - Tham gia vào các dự án về phát triển mobile apps của công ty<br />
                                - Vui lòng ghi rõ vị trí thực tập sinh Reactjs, React Native Developer trong tiêu đề email<br />
                                - CV chi tiết về các sản phẩm, dự án đã làm và quá trình training, làm việc<br />
                                - Khả năng/kinh nghiệm liên quan đến lập trình<br />
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    • Đam mê tìm hiểu về các công nghệ lập trình,<br />
                                    • Vừa tốt nghiệp hoặc sinh viên năm cuối các trường ,<br />cao đẳng, đại học, dạy nghề,…
                                    • Chăm chỉ, có khả năng tự nghiên cứu, giao tiếp tốt,<br />
                                    • Có kiến thức và kĩ năng tốt với Javascript, CSS3, HTML5,<br />
                                    • Ưu tiên:o Có kiến thức về ReactJs or React native o Có kiến thức về NodeJs o Có kinh nghiệm sử dụng source control systems như Git, SVN.
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
                                    • Hà nội
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
                                    toàn thời gian
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu bằng cấp(tối thiểu)</p>
                                </div>
                                <div className="job__box__content--jd">
                                    Cao đẳng
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu kinh nghiệm</p>
                                </div>
                                <div className="job__box__content--jd">
                                    Không yêu cầu kinh nghiệm
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
