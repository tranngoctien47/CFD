import { useEffect, useState } from "react"
import userApi from "../../../api/userApi"
import useStateSession from "../../../core/useStateSession"

export default function Tab4() {

    let [payment, setPayment] = useStateSession({
        api: true
    }, 'payment')


    useEffect(async () => {
        let res = await userApi.payment()
        setPayment({
            ...res,
            api: false
        })
    }, [])
    if (!payment) return "loading..."


    return (
        <div className="tab4" >
            {
                payment?.data?.map((e, i) => <Payment key={i} {...e.course} {...e} />)
            }
            {/* <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' />
            <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' />
            <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' /> */}
        </div>
    )
}

function Payment({ title, trang_thai, payment }) {
    return (
        <div className="item itemhistory">
            <div className="name">{title}</div>
            <div className="date">{payment}</div>
            <div className="money">{trang_thai}</div>
        </div>
    )
}