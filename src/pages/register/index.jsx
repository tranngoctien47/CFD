import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import courseApi from "../../api/courseApi";
import useFormValidate from "../../core/useFormValidate";

export default function Register() {

    let { slug } = useParams()

    let [test, setTest] = useState(false)

    let history = useHistory()

    let [course, setCourse] = useState()

    useEffect(async () => {
        let res = await courseApi.detail(slug)
        if (res.data) {
            setCourse(res.data)
        }
        // fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setCourse(res.data)
        //     })
    }, [slug])




    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     facebook: '',
    //     payment: 'chuyen-khoan',
    //     note: '',
    //     coin: false,
    //     gender: 'male',
    //     gender2: '',
    // });

    // let [error, setError] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     facebook: '',
    //     payment: '',
    //     note: '',
    //     coin: false,
    // });

    let { form, error, inputChange, check, setForm } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        fb: '',
        payment: 'chuyen-khoan',
        note: '',
        coin: false,
        gender: 'male',
        gender2: '',
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
                pattern: "email"

            },
            fb: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/[\w.-]+$/i

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

        }
    })

    // function inputChange(e) {
    //     // let name = e.target.name
    //     // let value = e.target.value
    //     // let type = e.target.type


    //     // if (type === 'checkbox') {
    //     //     value = e.target.checked
    //     // }


    //     // setForm({
    //     //     ...form,
    //     //     [name]: value,

    //     // })
    // }


    function pay() {
        document.querySelector(' .register-course .wrap .select .sub').style.display = 'block'
        closePay();
    }

    function closePay() {
        let text2 = document.querySelector('.register-course .wrap .select .head')
        let text = document.querySelectorAll('.sub a')
        text.forEach((item) => {
            item.addEventListener('click', function () {
                let text1 = item.innerHTML
                text2.innerHTML = item.innerHTML
                document.querySelector('.register-course .wrap .select .sub').style.display = 'none'

            })
        })
    }


    async function btnResgister() {


        let errorObj = check()

        if (Object.keys(errorObj).length === 0) {
            let res = await courseApi.register(form, slug)
            if (res.success) {
                history.push(`/course/${slug}`)
            }
        }
    }

    function _selectPay(e) {
        e.preventDefault()

        setForm({
            ...form,
            payment: e.target.dataset.value
        })
    }


    if (!course) return 'Loading...'





    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course.title} </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} onChange={inputChange} type="text" name="name" placeholder="Họ và tên bạn" />
                                {error.name && <p className="error-text">{error.name}</p>}
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} onChange={inputChange} name='phone' type="text" placeholder="Số điện thoại" />
                                {error.phone && <p className="error-text">{error.phone}</p>}
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} onChange={inputChange} name='email' type="text" placeholder="Email của bạn" />
                                {error.email && <p className="error-text">{error.email}</p>}
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.fb} onChange={inputChange} name='fb' type="text" placeholder="https://facebook.com" />
                                {error.fb && <p className="error-text">{error.fb}</p>}
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" name='coin' checked={form.coin} onClick={inputChange} />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Giới tính</p>
                                <div className="checkcontainer">

                                    <input type="radio" name='gender' value='male' checked={form.gender === 'male'} onClick={inputChange} /> Male
                                    <span className="checkmark" />
                                </div>
                                {/* <div className="checkcontainer radio2">

                                    <input type="radio" name='gender' value='female' checked={form.gender === 'female'} onClick={inputChange} /> Female
                                    <span className="checkmark" />


                                </div> */}
                                <label className="disable radio2">
                                    <div className="checkcontainer">

                                        <input type="radio" name='gender' value='female' checked={form.gender === 'female'} onClick={inputChange} /> Female
                                    <span className="checkmark" />
                                    </div>

                                </label>
                            </label>
                            <label className="disable">
                                <p>Giới tính</p>
                                <div className="checkcontainer">

                                    <select className='gender2' name='gender2' id='' onClick={inputChange}>
                                        <option value="" selected={form.gender2 === ""}>---Gender---</option>
                                        <option value="female" selected={form.gender2 === "female"}>  Female</option>
                                        <option value="male" selected={form.gender2 === "male"}>Male</option>
                                    </select>
                                </div>

                            </label>



                            {/* <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head" onClick={pay}>Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#" data-value='chuyen-khoan' onClick={_selectPay.bind(null, 'chuyen-khoan')}>Chuyển khoản</a>
                                        <a href="#" data-value='tien-mat' onClick={_selectPay.bind(null, 'tien-mat')}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label> */}


                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head" onClick={pay}>Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#" data-value='chuyen-khoan' onClick={_selectPay}>Chuyển khoản</a>
                                        <a href="#" data-value='tien-mat' onClick={_selectPay}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />

                            </label>
                            <div className="btn main rect" onClick={btnResgister}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}