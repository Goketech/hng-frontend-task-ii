'use client';

import { useEffect, useState } from 'react';
import Nav from "@/components/Nav"
import ProductDetailComponent from "@/components/ProductDetailComponent"
import Footer from "@/components/Footer"
import fetchProduct from "../../../utils/fetchProduct";
import { Spinner } from '@chakra-ui/react';
import { SingleProduct, defaultProduct } from '../../../types/type';

export default function ProductDetailsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [product, setProduct] = useState<SingleProduct>(defaultProduct);
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
      {loading ? <div className="flex justify-center items-center h-64"><Spinner size='xl' /></div> : (<ProductDetailComponent product={product} />)}
      <Footer />
    </div>
  )
}
