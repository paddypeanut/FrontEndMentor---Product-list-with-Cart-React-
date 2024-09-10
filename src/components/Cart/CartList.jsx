import { useDispatch } from "react-redux";
import { removeFromCart , toggleModal} from "../../store/cart/cartSlice";
import carbonNeutralIcon from '../../assets/images/icon-carbon-neutral.svg';
import { getCartTotal } from "../../util/getCartTotal";

export default function CartList({ cart }) {
  const dispatch = useDispatch();


  const myTotal = getCartTotal(cart);

  function handleRemoveFromCart(item) {
    dispatch(removeFromCart({ item: item }));
  }

  function handleToggleModal(){
    dispatch(toggleModal({toggle: true}))
  }
  return (
    <>
      <ul>
        {cart.items.map((item) => (
          <li key={item.name}>
            <div className="border-b-2 my-4 flex flex-row justify-between align-middle">
              <div className="mb-2">
                <p>{item.name}</p>
                <p className="">
                  <span>{item.quantity}x</span> <span>@{item.price}</span>{" "}
                  <span>{parseInt(item.quantity * item.price)}</span>
                </p>
              </div>
              <div className="flex align-middle">
                <button onClick={() => handleRemoveFromCart(item.name)} >
                  x
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-between ">
        <p>Order total</p>
        <h3 className="font-bold text-2xl">€{myTotal}</h3>
      </div>
      <div className="bg-slate-100 rounded-md my-4 mx-2 flex flex-row p-2 justify-center">
        <img src={carbonNeutralIcon} alt="carbon neutral" />
        <p className="text-sm text-center">This is a <strong>carbon-neutral</strong> delivery</p>
      </div>
      <div>
        <button onClick={handleToggleModal} className="bg-rose-500 rounded-3xl text-center text-white w-full p-2 my-4 hover:bg-rose-400">Confirm Order</button>
      </div>
    </>
  );
}
