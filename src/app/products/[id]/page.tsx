'use client';

import { useEffect, useState } from 'react';
import Nav from "@/components/Nav"
import ProductDetailComponent from "@/components/ProductDetailComponent"
import Footer from "@/components/Footer"
import fetchProduct from "../../../utils/fetchProduct";

export default function ProductDetailsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const getProducts = async () => {

      const product = await fetchProduct(id)
      setProduct(product)
    };
    getProducts();
  }, [id]);

  return (
    <div>
      <Nav />
      <ProductDetailComponent product={product} />
      <Footer />
    </div>
  )
}
