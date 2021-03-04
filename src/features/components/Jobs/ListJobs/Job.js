import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../images/logoNew2.png"
import "../../../scss/SearchJobs/ListJob.scss"
import KeyTag from './KeyTag'
export default function Job() {
    return (
        <div className="ListJobSearch">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle" title="Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                        <div className="job__box">
                            <div className="job__tag">hot</div>
                            <div className="job__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="job__content">
                                <div className="job__title">
                                    <Link to="/jobs/work/1"><h4 className="jobTitle">Thực tập sinh lập trình web reactjs không yêu cầu kinh nghiệm làm việc</h4></Link>
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
                <div className="pagination">
                    <Pagination defaultCurrent={1} total={100} />
                </div>
            </div>
        </div>
    )
}
