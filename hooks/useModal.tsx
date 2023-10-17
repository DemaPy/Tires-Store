import { create } from "zustand";
import { IProduct } from "../types";

interface IModal {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

const useModal = create<IModal>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: IProduct) => set({ data: data, isOpen: true }),
}));

export default useModal;
