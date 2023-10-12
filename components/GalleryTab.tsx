import React from "react";
import { IImage } from "../types";
import Image from "next/image";
import { Tab } from "@headlessui/react";

interface IGalleryTab {
  image: IImage;
}

const GalleryTab = ({ image }: IGalleryTab) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ${
              selected ? "ring-black" : "ring-transparent"
            }`}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
