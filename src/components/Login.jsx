import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import userApi from '../api/userApi'
// import useAuth from '../core/useAuth'
import useFormValidate from '../core/useFormValidate'
import { fetchLogin, popupLogin, login } from '../redux/reducers/authReducer'

export default forwardRef(function Login(props, ref) {
    let dispatch = useDispatch()

    let { popupOpen, loginError } = useSelector(state => state.auth)

    // let [formError, setFormError] = useState()

    let { form, error, inputChange, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: "email"
            },
            password: {
                required: true,

            }
        },
        message: {
            username: {
                required: true,
                pattern: ""
            }
        },

    })





    let divRef = useRef()


    async function _login() {

        let error = check();

        if (Object.keys(error).length === 0) {
            dispatch(fetchLogin(form))

            //     let res = await userApi.login(form)
            //     if (res.error) {
            //         setFormError(res.error)
            //     } else {
            //         dispatch(login(res.data))

            //         dispatch(popupLogin(false))

            //     }


        }
    }



    return reactDom.createPortal(
        <div className="popup-form popup-login" id='popupLogin' ref={divRef} style={{ display: popupOpen ? 'flex' : 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {
                        loginError ? <h2 style={{ color: 'red', textAlign: 'center', marginBottom: 20 }} >{loginError}</h2> : ""
                    }
                    <div style={{ position: 'relative' }}>
                        <label>
                            <input name='username' value={form.username} onChange={inputChange} type="text" placeholder="Email / Số điện thoại" />
                        </label>
                        {error.username && <p className=" errorLogin">{error.username}</p>}
                    </div>

                    <div style={{ position: 'relative' }}>
                        <label>
                            <input name='password' value={form.password} onChange={inputChange} type="password" placeholder="Mật khẩu" />
                        </label>
                        {error.password && <p className=" errorLogin">{error.password}</p>}
                    </div>


                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_login}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="/img/google.svg" alt />
          Google
        </div>
                    </div>
                    <div className="close">
                        <img src="/img/close-icon.png" alt />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close" onClick={() => dispatch(popupLogin(false))}>
                        <img src="/img/close-icon.png" alt />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
})

