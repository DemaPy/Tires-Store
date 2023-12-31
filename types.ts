export interface IBillboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
    id: string;
    name: string;
    billboard: IBillboard;
  }
  
  
export interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  price: string;
  isFeatured: string
  size: ISize
  color: IColor
  images: IImage[]
}

export interface ISize {
  id: string
  value: string
  name: string
}

export interface IColor {
  id: string
  name: string
  value: string
}

export interface IImage {
  url: string
  id: string
}
