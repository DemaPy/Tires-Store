"use client";
import { useEffect, useState } from "react";
import { formatter } from "../lib/utils";

interface ICurrency {
  value: string | number;
}

const Currency = ({ value }: ICurrency) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
