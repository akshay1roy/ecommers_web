import React from "react";
import { RxCross2 } from "react-icons/rx";
import CartContent from "../Cart/CartContent";

export default function CartDrawer({ toggleCartDrawer, drawerOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <RxCross2 className="h-6 w-6 text-gray-600 cursor-pointer" />
        </button>
      </div>

      {/* cart contents with scrollable area  */}

      <div className="flex-grow p-4 ">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* component for cart contents */}
        <CartContent/>
      </div>

      {/* checkout button fixed at the bottom  */}

      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3  rounded-lg font-semibold hover:bg-gray-800 transition">Checkout</button>
        <p className="text-sm text-gray-500 mt-2 text-center">Shipping , taxes and discount codes caluculated at checkout.</p>
      </div>
    </div>
  );
}
