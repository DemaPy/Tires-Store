"use client";

import Image from "next/image";
import { IProduct } from "../../types";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import PreviewMoval from "../PreviewMoval";
import useModal from "../../hooks/useModal";
import useCart from "../../hooks/useCart";

interface IProductCard {
  data: IProduct;
}

const ProductCard = ({ data }: IProductCard) => {
  const PreviewMoval = useModal()
  const router = useRouter()
  const card = useCart()
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.stopPropagation()
    PreviewMoval.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.stopPropagation()
    card.addItem(data)
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={"Image"}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
