"use client";
import { useSearchParams } from "next/navigation";

const ExemploPage = () => {
  const searchParams = useSearchParams();
  const valorParam = searchParams.get("param");
  return <div>Valor do parametro: {valorParam} </div>;
};

export default ExemploPage;
