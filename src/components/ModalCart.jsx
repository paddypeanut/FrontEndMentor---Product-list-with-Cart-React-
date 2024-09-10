import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../util/getCartTotal";
import { toggleModal,emptyCart } from "../store/cart/cartSlice";
import confirmationIcon from '../assets/images/icon-order-confirmed.svg';
import PRODUCTS from "../PRODUCTS";

export default function ModalCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartTotal = getCartTotal(cart);

  function handleStartNewOrder() {
    dispatch(toggleModal({toggle: false}));
    dispatch(emptyCart());
  }

  return (
    <>
      <div className="bg-white rounded-xl p-8 w-96">
      <img src={confirmationIcon} alt="check mark"/>
        <h1 className="font-bold text-3xl">Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <ul className="bg-slate-100 rounded-lg p-2">
          {cart.items.map((item) => {
            const itemIndex = PRODUCTS.findIndex((x) => x.name === item.name);
            return (
              <li key={item.name} className="px-1 border-b-2 m-2">
                <div>
                  <div className="flex flex-row my-2 align-middle">
                    <img
                      src={PRODUCTS[itemIndex].image.thumbnail}
                      className="w-10 h-10 m-auto"
                    />
                    <div className="flex flex-row w-full justify-between p-4 text-sm">
                      <div>
                        <p>{item.name}</p>
                        <p>
                          {item.price}x {item.quantity}
                        </p>
                      </div>
                      <div className="flex justify-center align-middle">
                        <h3 className="m-auto">
                          €{item.price * item.quantity}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row justify-between align-middle my-4">
          <p>Order Total</p>
          <h3 className="font-bold text-2xl">€{cartTotal}</h3>
        </div>
        <div>
          <button
            onClick={handleStartNewOrder}
            className="bg-rose-500 hover:bg-rose-400 text-white w-full m-2 rounded-full p-2"
          >
            Start new order
          </button>
        </div>
      </div>
    </>
  );
}
