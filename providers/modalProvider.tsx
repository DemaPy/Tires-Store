"use client";

import { useEffect, useState } from "react";
import PreviewMoval from "../components/PreviewMoval";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewMoval />
    </>
  );
};

export default ModalProvider;
