import { IBillboard, ICategory, IProduct } from "../types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (q: Query): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: q.colorId,
      sizeId: q.sizeId,
      categoryId: q.categoryId,
      isFeatured: q.isFeatured,
    },
  });

  const response = await fetch(url);
  return response.json();
};

export default getProducts;
