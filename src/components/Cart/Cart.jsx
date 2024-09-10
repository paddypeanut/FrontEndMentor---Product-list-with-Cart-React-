import { useSelector } from "react-redux";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";
import CartList from "./CartList";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <div className="rounded-xl bg-white my-8 mx-4 p-4">
        <h2 className="font-bold text-xl">Your Cart({cartItems.totalQuantity})</h2>
        {cartItems.totalQuantity === 0 ? (
          <div className="flex flex-col justify-center align-middle">
            <img src={emptyCartImg} alt="empty cart image" className="m-8" />
            <p className="text-sm text-center">
              Your added items will appear here.
            </p>
          </div>
        ) : <CartList cart={cartItems}/>}
      </div>
    </>
  );
}
