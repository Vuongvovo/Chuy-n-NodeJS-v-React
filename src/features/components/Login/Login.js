import { Checkbox } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import "../../scss/Login/Login.scss"
export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSumit = (data) => console.log(data);
    return (
        <div className="login">
            <div className="login__title">
                Việc làm tốt
            </div>
            <div className="login__box">
                <div className="line__login"></div>
                <div className="login__box__left">
                    <form onSubmit={handleSubmit(onSumit)}>
                        <div className="login__box__left__title">
                            Tài khoản
                        </div>
                        <input type="text" name="username" placeholder="Email" ref={register} />
                        <div className="login__box__left__title">
                            Mật khẩu
                        </div>
                        <input type="password" name="password" placeholder="Mật khẩu" ref={register} />
                        <Checkbox >Nhớ mật khẩu</Checkbox>
                        <div className="login__box__left__button">
                            <input type="submit" value="Đăng nhập" />
                        </div>
                    </form>
                </div>
                <div className="login__box__right">
                    <div className="right">
                        <div className="login__box__right__text">
                            Hoặc đăng nhập với
                        </div>
                        <button className="fb">Đăng nhập với facebook</button>
                        <button className="in">Đăng nhập với instagram</button>
                        <div className="login__box__right__text">
                            Chưa có tài khoản? <Link to="">Đăng ký</Link> ở đây
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
