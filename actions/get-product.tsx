import { IBillboard, ICategory, IProduct } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(URL + `/${id}`);
  return response.json();
};

export default getProduct;
