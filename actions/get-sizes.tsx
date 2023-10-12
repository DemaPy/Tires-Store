import { ICategory, ISize } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<ISize[]> => {
  const response = await fetch(URL);
  return response.json();
};

export default getSizes;
