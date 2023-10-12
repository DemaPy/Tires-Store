import { IColor } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<IColor[]> => {
  const response = await fetch(URL);
  return response.json();
};

export default getColors;
