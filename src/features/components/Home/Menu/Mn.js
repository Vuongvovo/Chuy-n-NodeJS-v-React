import { Menu, Avatar, Dropdown } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import checkLoginApi from '../../../../api/checkLogin'
import "../../../scss/Home/Menu.scss"
export default function Mn(props) {
    const [user, setUser] = useState()
    useEffect(() => {
        checkLoginApi.checkLogin().then(ok => {
            setUser(ok.data.user)
        })
    }, [])

    const inforCompany = (
        <Menu.Item key="1">
            <Link to="/inforCompany">Thông tin cá nhân</Link>
        </Menu.Item>
    )
    const inforUser = (
        <Menu.Item key="2">
            <Link to="/inforUser">Thông tin cá nhân</Link>
        </Menu.Item>
    )
    const onLogOut = () => {
        localStorage.removeItem("token");
        setUser("")
    }
    const logOut = (
        <Menu.Item key="3">
            <Link to="/" onClick={onLogOut}>Đăng xuất</Link>
        </Menu.Item>
    )
    const imgDefault = "https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"
    const ss = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/login">Đăng nhập</Link>
            </Menu.Item>
            {user ? user.type === "company" ? inforCompany : inforUser : ""}
            {user ? logOut : ""}
        </Menu>
    )
    const style = {
        background: "#192134"
    }
    return (
        <div className={props.class} style={props.class === "menu" ? {} : style}>
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
                        <Link to="/createCv">Tạo cv</Link>
                    </div>
                    {user ?
                        user.role === "admin" || user.role === "grant" ?
                            <div className="item">
                                <Link to="/admin">admin</Link>
                            </div> : "" : ""
                    }
                    <Dropdown overlay={ss} trigger={['click']}>
                        <span className="nav-link" >
                            <Avatar size="small" src={user ? user.avatar : imgDefault} />
                        </span>
                    </Dropdown>
                </nav>
            </div>
        </div>
    )
}
