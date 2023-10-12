"use client";

import React, { useState } from "react";
import { IColor, ISize } from "../types";
import Button from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/IconButton";

interface IMobileFilters {
  sizes: ISize[];
  colors: IColor[];
}

const MobileFilters = ({}: IMobileFilters) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>

      <Dialog
        as="div"
        open={open}
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
