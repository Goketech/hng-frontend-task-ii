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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const product = await fetchProduct(id)
      setProduct(product)
      setLoading(false);
    };
    getProducts();
  }, [id]);

  return (
    <div>
      <Nav />
      {loading ? <div>Loading...</div> : (<ProductDetailComponent product={product} />)}
      <Footer />
    </div>
  )
}
