import "./checkout.css";

export default function checkoutPage() {
  const paymentMethods = [
    {
      method: "Cash on delivery",
      desc: "Pay in cash when your order arrives.",
    },
    {
      method: "Mobile wallet",
      desc: "eSewa Khalti, and more.",
    },
    {
      method: "Card",
      desc: "Debit or creadit card payment.",
    },
  ];
  const order = [
    { item: "Veg basekt", price: "450" },
    { item: "Fresh Milk", price: "120" },
    { item: "Apples", price: "300" },
  ];
  return (
    <>
      <div className="checkout w-screen my-[50px] flex items-center justify-center flex-col">
        <p className="checkout__mainTitle text-[22px] font-bold w-full max-w-[1280px] items-start">
          Checkout
        </p>
        <div className="checkout__container flex items-start justify-start w-full max-w-[1280px] gap-2">
          <div className="checkout__left  w-full flex items-start justify-start border border-gray-300 rounded-[10px] p-[15px]">
            <form
              action=""
              className="checkout__shipping w-full flex items-start justify-start flex-wrap gap-[10px]"
            >
              <p className="checkout__shipping-title w-full text-[18px] font-bold">
                Shipping details
              </p>
              <div className="checkout__shipping-fullName">
                <label htmlFor="fullName">Full name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="checkout__shipping-address">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder="House,Street,landmarks.." />
              </div>
              <div className="checkout__shipping-phoneNumber">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="number" placeholder="98XXXXXXXX" />
              </div>
              <div className="checkout__shipping-deliveryNotes">
                <label htmlFor="deliveryNotes">Delivery notes(optional)</label>
                <textarea
                  type="text"
                  placeholder="Any special instruction for delivery"
                />
              </div>
              <div className="checkout__shipping-area">
                <label htmlFor="area">Area in Jiri</label>
                <input type="text" placeholder="Select area" />
              </div>
              <div className="checkout__shipping-payment w-full flex flex-col items-start justify-center">
                <p className="checkout__shipping-paymentTitle font-bold text-[22px]">
                  Payment method
                </p>
                <div className="checkout__shipping-paymentContainer w-full flex items-center justify-center gap-[10px]">
                  {paymentMethods.map((item, index) => (
                    <div
                      className="chekout__shipping-paymentMethod flex items-start justify-start border rounded-[10px] p-[10px] border-gray-400 flex-1 flex-col min-h-[90px]"
                      key={index}
                    >
                      <div className="checkout__shipping-paymentChoose w-full flex items-center justify-start gap-[10px]">
                        <input type="radio" />
                        <label htmlFor="">{item.method}</label>
                      </div>
                      <p className="checkout__shipping-paymentDesc text-gray-400 text-[14px]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="checkout__right border border-gray-300 p-[15px] rounded-[15px] ">
            <p className="checkout__right-title text-[22px] font-bold">
              Order summary
            </p>
            <div className="checkout__ordersContainer flex w-full items-start justify-center flex-col gap-[5px]">
              {order.map((item, index) => (
                <div
                  className="checkout__order w-full flex items-center justify-between"
                  key={index}
                >
                  <p className="checkout__item">{item.item}</p>
                  <p className="checkout__price">Rs. ${item.price}</p>
                </div>
              ))}
              <div className="checkout__order-extraChargeContainer flex w-full items-start justify-center flex-col ">
                <div className="checkout__extraCharge flex w-full items-start justify-between">
                  <p className="checkout__order-chargeType">Subtotal</p>
                  <p className="checkout__order-chargeAmount">Rs. 800</p>
                </div>
                <div className="checkout__extraCharge flex w-full items-start justify-between ">
                  <p className="checkout__order-chargeType">Delivery Fee</p>
                  <p className="checkout__order-chargeAmount">Rs. 100</p>
                </div>
                <div className="checkout__extraCharge flex w-full items-start justify-between ">
                  <p className="checkout__order-chargeType">Total</p>
                  <p className="checkout__order-chargeAmount">Rs. 900</p>
                </div>
              </div>
              <button className="checkout__placeOrder w-full h-[35px] rounded-[10px] bg-blue-500 text-white font-semibold">
                Place Order
              </button>
              <p className="checkout__terms text-[12px] text-gray-300">
                By placing your order, you agree to our tems
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
