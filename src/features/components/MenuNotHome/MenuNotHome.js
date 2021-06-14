import React from 'react'
import { Link } from 'react-router-dom'
//import "./MenuNotHomejs"
import "../../scss/MenuNotHome.scss"
export default function Menu() {
    const style = {
        background: "#192134"
    }
    return (
        <div className="menuNotHome" style={style}>
            <div className="menu__brand"><Link to="/">JobIt</Link></div>
            <div className="menu--right">
                <div className="bar menu__bar">
                    <div className="line--top"></div>
                    <div className="line--mid"></div>
                    <div className="line--bot"></div>
                </div>
                <nav >
                    <div className="item active">
                        <Link to="">Trang chủ</Link>
                    </div>
                    <div className="item">
                        <Link to="">Hướng dẫn</Link>
                    </div>
                    <div className="item">
                        <Link to="/candidates">Ứng viên</Link>
                    </div>
                    <div className="item">
                        <Link to="/jobs">Việc làm</Link>
                    </div>
                    <div className="item">
                        <Link to="/companys">Nhà tuyển dụng</Link>
                    </div>
                    <div className="item">
                        <Link to="">Tạo cv</Link>
                    </div>
                    <div className="item">
                        <Link to="/admin">Admin</Link>
                    </div>
                </nav>
            </div>
        </div>

    )
}
