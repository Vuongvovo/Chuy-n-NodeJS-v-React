import React from 'react'
import "../../../scss/Breadcrumb.scss"
import { Link } from 'react-router-dom';
export default function Breadcrumb() {

    return (
        <div className="breadcrumb">
            <div className="container">
                <Link to="/">Trang chủ</Link>
                <span className="fa fa-angle-double-right"></span>
                <Link to="/">Việc làm</Link>
                <span className="fa fa-angle-double-right"></span>
                <span className="active">Lập trình web</span>
            </div>
        </div>
    )
}
