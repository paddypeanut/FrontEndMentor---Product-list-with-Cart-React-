import PRODUCTS from "./PRODUCTS";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";
import Products from "./components/Products";
import ModalCart from "./components/ModalCart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isVisible = useSelector((state) => state.cart.modalIsVisible);

  return (
    <>
      {isVisible && (
        <Modal>
          <ModalCart />
        </Modal>
      )}
      <div className="flex flex-row align-middle justify-center w-9/12 mx-auto">
        <div className="w-8/12">
          <Products products={PRODUCTS} />
        </div>

        <div className="w-4/12">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
