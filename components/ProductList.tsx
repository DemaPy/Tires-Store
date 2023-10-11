import React from "react";
import { IProduct } from "../types";
import NullResults from "./ui/null-results";
import ProductCard from "./ui/productCard";

interface IProductList {
  title: string;
  items: IProduct[];
}

const ProductList = ({ title, items }: IProductList) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NullResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
