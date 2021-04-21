import React, { useEffect, useRef, useState } from "react";
import pageApi from "../../api/pageApi";
import useAuth from "../../core/useAuth";
import useFormValidate from "../../core/useFormValidate";

export default React.forwardRef(function Contact(props, ref) {





    let { form, error, inputChange, check } = useFormValidate(
        {
            name: '',
            phone: '',
            email: '',
            website: '',
            note: '',

        }, {
        rule: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                pattern: "phone",
            },
            email: {
                required: true,
                pattern: "email",
            },
            website: {
                required: true,
                pattern: "facebook"
            },
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
            website: {
                required: "website không được để trống",
                pattern: "website không đúng định dạng"
            }
        }
    })


    // let [name, setName] = useState('')
    // let [nameError, setNameError] = useState('')
    // let [phone, setPhone] = useState('')
    // let [email, setEmail] = useState('')
    // let [website, setWebsite] = useState('')
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')

    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     title: '',
    //     content: '',
    // });

    // let [error, setError] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     title: '',
    //     content: '',
    // });

    // let inputRef = useRef(null)

    // function _btnFocus() {
    //     inputRef.current.focus();
    // }

    // function inputChange(e) {
    //     // let name = e.target.name;
    //     // let value = e.target.value;

    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     })
    // }


    async function btnResgister() {

        // let errorObj = {}

        // if (!form.name) {
        //     errorObj.name = ('ho va ten khong duoc de trong')

        // }

        // if (!form.email) {
        //     errorObj.email = ('Email khong duoc de trong')
        // } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)) {
        //     errorObj.email = ('Email không hợp lệ')
        // }

        // if (form.website && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(form.website)) {
        //     errorObj.website = ('website khong hop le')
        // }

        // if (!form.phone) {
        //     errorObj.phone = ('phone khong duoc de trong')
        // }


        // if (!form.title) {
        //     errorObj.title = ('Tiêu đề khong duoc de trong')
        // }



        // setError(errorObj)

        let error = check();

        if (Object.keys(error).length === 0) {
            let res = await pageApi.contact(form);
        }

    }




    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
                {/* <button onClick={_btnFocus}>Focus</button> */}
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} onChange={inputChange} name="name" type="text" placeholder="Họ và tên bạn" />
                        {error.name && <p className="error-text">{error.name}</p>}
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} onChange={inputChange} name="phone" type="text" placeholder="Số điện thoại" />
                        {error.phone && <p className="error-text">{error.phone}</p>}
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} onChange={inputChange} name="email" type="text" placeholder="Email của bạn" />
                        {error.email && <p className="error-text">{error.email}</p>}
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} onChange={inputChange} name="website" type="text" placeholder="Đường dẫn website http://" />
                        {error.website && <p className="error-text">{error.website}</p>}
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} onChange={inputChange} name="title" type="text" placeholder="Tiêu đề liên hệ" />
                        {error.title && <p className="error-text">{error.title}</p>}
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} onChange={inputChange} name="content" id cols={30} rows={10} defaultValue={""} />
                        {error.content && <p className="error-text">{error.content}</p>}
                    </label>
                    <div className="btn main rect" onClick={btnResgister}>đăng ký</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
})

