import { useState, useEffect } from "react";
import addToCartImg from "../../assets/images/icon-add-to-cart.svg";
import { useDispatch,useSelector } from "react-redux";
import { incrementCart,decrementCart } from "../../store/cart/cartSlice";


export default function AddToCartButton({item}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [itemQuantity,setItemQuantity] = useState(0);
  const dispatch = useDispatch();

    const cartItem = useSelector((state) => state.cart.items);
    const thisItem = cartItem.find((x) => x.name === item.name);

    useEffect(() => {
        if(thisItem !== undefined){
       setItemQuantity(thisItem.quantity)
    } else {
        setItemQuantity(0)
    }
    
    },[itemQuantity,thisItem])
    

  function handleIncrement(){
    dispatch(incrementCart({item: item}));
  }

  function handleDecrement(){
    dispatch(decrementCart({item: item}));
  }

  function handleMouseEnter(event) {
    setIsMouseOver(true);
  }
  function handleMouseOut(event) {
    setIsMouseOver(false);
  }
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        className="relative border w-40 flex flex-row align-middle justify-center rounded-3xl border-rose-900 bg-white py-2 px-4 mx-auto -top-4  hover:bg-rose-500 hover:text-white transition-colors "
      >
        {!isMouseOver ? (
          <>
            <img
              src={addToCartImg}
              alt="add to cart icon"
              className="mx-2 fill-white relative top-0.5"
            />
            <span>Add to Cart</span>
          </>
        ) : (
          <div className="flex w-40 flex-row justify-between align-middle">
            <button onClick={handleDecrement} className="border flex w-4 h-4 mt-1 border-white rounded-full hover:bg-white group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className="m-auto"
              >
                <path
                  fill="#fff"
                  className="group-hover:fill-rose-500"
                  d="M0 .375h10v1.25H0V.375Z"
                />
              </svg>
            </button>

            <p>{itemQuantity}</p>

            <button onClick={handleIncrement} className="border flex w-4 h-4 mt-1 border-white rounded-full  hover:bg-white group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="m-auto"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  className="group-hover:fill-rose-500"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
