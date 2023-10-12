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
  color: Color
  images: Image[]
}

export interface ISize {
  id: string
  value: string
  name: string
}

export interface Color {
  id: string
  name: string
  value: string
}

export interface IImage {
  url: string
  id: string
}
