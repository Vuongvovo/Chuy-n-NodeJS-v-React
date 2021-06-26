import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../../scss/Register/Register.scss"
import RegisterUser from './RegisterUser';
import RegisterCompany from "./RegisterCompany"
import { useState } from 'react';
export default function Register() {
    const [check, setCheck] = useState(1);
    const onChange = (e) => {
        if (e === 1) {
            setCheck(1)
        } else {
            setCheck(2)
        }
    }
    return (
        <div className="register" >
            <div className="register__title">
                Việc làm tốt
            </div>
            <div className="register__box">
                <div className="line__register"></div>
                <div className="register__box__left">
                    <div className="register__box__left--account">
                        <button className="account" autoFocus onClick={() => { onChange(1) }}>Tài khoản người dùng</button>
                        <button className="account" onClick={() => { onChange(2) }}>Tài khoản công ty</button>
                    </div>
                    {check === 1 ? <RegisterUser /> : <RegisterCompany />}
                </div>
                <div className="register__box__right">
                    <div className="right">
                        <div className="register__box__right__text">
                            Hoặc đăng nhập với
                        </div>
                        <button className="fb">Đăng nhập với facebook</button>
                        <button className="in">Đăng nhập với instagram</button>
                        <div className="register__box__right__text">
                            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link> ở đây
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
