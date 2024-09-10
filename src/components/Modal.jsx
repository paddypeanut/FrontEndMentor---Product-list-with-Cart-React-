import { useDispatch } from "react-redux";
import { toggleModal } from "../store/cart/cartSlice";

export default function Modal({children}){
    const dispatch = useDispatch();
    function handleToggleModal(){
        dispatch(toggleModal({toggle: false}));
    }
    return(
        <>
        <div onClick={handleToggleModal} className="w-screen h-full bg-slate-900 bg-opacity-45 fixed z-50 flex justify-center align-middle
        ">
            <div className="relaive flex align-middle justify-center">
                <div className="m-auto bg-white rounded-lg">
                    {children}
                </div>
            </div>
        </div>
            
        </>
    );
}