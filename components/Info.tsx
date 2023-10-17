"use client";
import useCart from "../hooks/useCart";
import { IProduct } from "../types";
import Currency from "./Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface IInfo {
  data: IProduct;
}

const Info = ({ data }: IInfo) => {
  const cart = useCart();
  const handleAddCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data.size.value}</div>
        </div>
        <div className="flex gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="rounded-full h-6 w-6 border border-gray-600"
            style={{
              backgroundColor: data.color.value,
            }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={handleAddCart} className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
