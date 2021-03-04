import React from 'react'
import { Link } from 'react-router-dom'
import anh from "../../../images/phong-lam-viec-day-du-anh-sang.jpg"
import anh1 from "../../../images/coffee-1276781.jpg"
import "../../../scss/Home/ListNew.scss"
export default function ListNew() {
    return (
        <div id="news">
            <div className="heading">
                <div className="heading__title">
                    <h3>Tin tức mới</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-6 mb-3" >
                        <Link to=''>
                            <div className="news-box">
                                <div className="img-new">
                                    <img src={anh1} alt="" />
                                </div>
                                <div className="heading p-3">
                                    <strong>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                </div>
                                <div className="content-news">
                                    <p className="text-justify">Hiện tại công ty cổ phần thương mại điện tử hachico đang tuyển thành viên không đòi hỏi về kinh nghiệm</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 mb-3" >
                        <Link to=''>
                            <div className="news-box">
                                <div className="img-new">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="heading p-3">
                                    <strong>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                </div>
                                <div className="content-news">
                                    <p className="text-justify">Hiện tại công ty cổ phần thương mại điện tử hachico đang tuyển thành viên không đòi hỏi về kinh nghiệm</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="row">

                    <div className="col-md-4 col-sm-6 mb-3" >
                        <Link to=''>
                            <div className="news-box">
                                <div style={{ height: "190px" }}>
                                    <img src={anh} className="w-100 h-100" alt="" />
                                </div>
                                <div className="heading pt-1 pb-1 pl-2 pr-2">
                                    <strong>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                </div>
                                <div className="content-news">
                                    <p className="text-justify">Hiện tại công ty cổ phần thương mại điện tử hachico đang tuyển thành viên không đòi hỏi về kinh nghiệm</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3" >
                        <Link to=''>
                            <div className="news-box">
                                <div style={{ height: "190px" }}>
                                    <img src={anh} className="w-100 h-100" alt="" />
                                </div>
                                <div className="heading pt-1 pb-1 pl-2 pr-2">
                                    <strong>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                </div>
                                <div className="content-news">
                                    <p className="text-justify">Hiện tại công ty cổ phần thương mại điện tử hachico đang tuyển thành viên không đòi hỏi về kinh nghiệm</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="row ">
                            <div className="col-md-12" >
                                <Link to=''>
                                    <div className="news-box">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={anh} className="" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <strong style={{ fontSize: ".9rem" }}>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-12" >
                                <Link to=''>
                                    <div className="news-box">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={anh} className="" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <strong style={{ fontSize: ".9rem" }}>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-12" >
                                <Link to=''>
                                    <div className="news-box">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={anh} className="" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <strong style={{ fontSize: ".9rem" }}>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-12" >
                                <Link to=''>
                                    <div className="news-box">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={anh} className="" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <strong style={{ fontSize: ".9rem" }}>Việc làm nhàn hạ lương cao cơ hội cho mọi người</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
