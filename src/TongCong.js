import React from 'react';
import "./css/TongCong.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { NhanTongGioHang } from './reducer';
import { useHistory } from "react-router-dom";

function TongCong() {
  const history = useHistory();
  const[{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Tổng cộng :  ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={NhanTongGioHang(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick ={ e => history.push('/payment')}>Thanh toán</button>
    </div>
    )
}

export default TongCong
