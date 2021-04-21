import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import courseApi from "../../../api/courseApi";
import userApi from "../../../api/userApi";
// import useAuth from "../../../core/useAuth";
import useFormValidate from "../../../core/useFormValidate"
import { updateInfo } from "../../../redux/reducers/authReducer";

export default function Tab1() {
    // let { user, updateInfoProfile } = useAuth()

    let { user } = useSelector(state => state.auth)
    let dispatch = useDispatch()


    let { form, error, inputChange, check } = useFormValidate({
        name: user.name,
        phone: user.phone,
        fb: user.fb,
        skype: user.skype
    }, {
        rule: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                pattern: "phone",
            },
            fb: {
                required: true,

            },
            skype: {
                required: true,

            }
        },
        message: {
            name: {
                required: "Họ tên không được để trống"
            },
            phone: {
                required: "Phone không được để trống",
                pattern: "Sai số điện thoại"
            },
            email: {
                required: "Email không được để trống",
                pattern: "Email không đúng định dạng"

            },
            fb: {
                required: "Facebook không được để trống",
                pattern: "Facebook không đúng định dạng"
            }
        }, options: {
            localStorage: "profile-info"
        }
    })


    async function _save() {
        let error = check();
        console.log(error);

        if (Object.keys(error).length === 0) {
            let res = await userApi.updateInfo(form);
            console.log(res.data);

            if (res.data) {
                dispatch(updateInfo(res.data))
            }
        }

    }
    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input onChange={inputChange} name="name" value={form.name} type="text" />
                {error.name && <p className="error-text">{error.name}</p>}
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input onChange={inputChange} name="phone" value={form.phone} type="text" />
                {error.phone && <p className="error-text">{error.phone}</p>}
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue={user.email} disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input onChange={inputChange} name="fb" value={form.fb} type="text" />
                {error.fb && <p className="error-text">{error.fb}</p>}
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input onChange={inputChange} name="skype" value={form.skype} type="text" />
                {error.skype && <p className="error-text">{error.skype}</p>}
            </label>
            <div className="btn main rect" onClick={_save}>LƯU LẠI</div>
        </div >
    )
}