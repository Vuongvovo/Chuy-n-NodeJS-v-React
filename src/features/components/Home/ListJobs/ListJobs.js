import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/Home/ListJobs.scss"
import logo from "../../../images/logoNew2.png"
// import "./ListJobsjs"
export default function ListJobs() {
    return (
        <div className="ListJob">
            <div className="heading">
                <div className="heading__title">
                    <h3>Công việc nổi bật</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">[Tuyển gấp] Lập trình game mobile ngay trong tháng này</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
                    <div className="col-lg-6">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web abc asa sda sdasdas abcasasdasdasdas abcasasdasdasdas</h4></Link>
                                </div>
                                <div className="job__nameCompany">
                                    <Link to="/jobs/work/1"><span>Công ty Cổ phần Nghiên cứu và Sản xuất Vinsmart</span></Link>
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
        </div>
    )
}
