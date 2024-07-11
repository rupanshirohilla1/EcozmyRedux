import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 lg:mx-5 border-b-[3px] border-slate-500  ">
      <div className="flex flex-row p-3 gap-5 items-center">
        <div className="w-[35%] md:w[30%] lg:w-[30%]">
          <img src={item.image} alt="abcd" className="object-cover" />
        </div>
        <div className="w-[65%] self-start lg:space-y-4 ml-5">
          <h1 className="text-xl text-slate-800 font-semibold">{item.title}</h1>
          <p className=" text-slate-700 text-sm">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 ml-2" onClick={removeFromCart}>
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;