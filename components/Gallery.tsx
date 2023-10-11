import React from "react";
import { Image } from "../types";

interface IGallery {
    images: Image[]
}

const Gallery = ({}: IGallery) => {
  return <div>Gallery</div>;
};

export default Gallery;
