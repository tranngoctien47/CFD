export default function Tab5() {


    return (
        <div className="tab5 cointab" >
            <div className="coininfo">
                <div className="coininfo__box">
                    <h3><strong>Thông tin COIN</strong></h3>
                    <div className="coininfo__box-ct">
                        <div>
                            <img src="/img/cfd-coin.png" alt="" />
                            <p>Bạn có <strong>300</strong> COIN</p>
                        </div>
                    </div>
                </div>
                <div className="coininfo__box">
                    <h3><strong>Đổi COIN</strong></h3>
                    <div className="coininfo__box-ct">
                        <label className="checkcontainer">
                            Voucher Tiki 100k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                            Voucher Tiki 200k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                            Voucher Tiki 500k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                            Thẻ nạp điện thoại 100k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                            Thẻ nạp điện thoại 200k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                            Thẻ nạp điện thoại 500k
                          <input type="radio" name="radio" />
                            <span className="checkmarkradio" />
                        </label>
                        <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                    </div>
                    <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
                </div>
            </div>
            <div className="coinhistory">
                <h3><strong>Lịch sử COIN</strong></h3>
                {/* <p>Chưa sử dụng COIN</p> */}
                <div class="itemhistory">
                    <div class="td"><strong>COIN</strong></div>
                    <div class="td"><strong>Thời gian</strong></div>
                    <div class="td"><strong>Nội dung</strong></div>
                    <div class="td"><strong>Trạng thái</strong></div>
                </div>
                <CoinhistoryItem coin='-300' time='09/09/2020' des='Giới thiệu khóa học cho học viên mới' status='cho-duyet' />
                <CoinhistoryItem coin='300' time='09/09/2020' des='Giới thiệu khóa học cho học viên mới' status='da-chap-nhan' />
                <CoinhistoryItem coin='-300' time='09/09/2020' des='Giới thiệu khóa học cho học viên mới' status='cho-duyet' />

            </div>
        </div>
    )
}


function CoinhistoryItem({ coin, time, des, status }) {
    return (
        <div className="itemhistory">
            {
                coin === "300" ? <div className="td"><span className="coin">+300</span></div>
                    : coin === "-300" ? <div className="td"><span className="coin red">-300</span></div>
                        : <div className="td"><span className="coin">300</span></div>
            }
            <div className="td">{time}</div>
            <div className="td">{des}</div>
            {
                status === 'cho-duyet' ? <div className="td">Chờ duyệt</div>
                    : status === 'da-chap-nhan' ? <div className="td">Đã chấp nhận</div>
                        : <div className="td">Đã chấp nhận</div>
            }

        </div>
    )
}