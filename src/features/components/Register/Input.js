import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
    return (
        <>
            <div className="register__box__left__title">
                Email đăng nhập
            </div>
            <input type="text" {...register("userName")} placeholder="Email" />
        </>
    )
}

Input.propTypes = {

}

export default Input


