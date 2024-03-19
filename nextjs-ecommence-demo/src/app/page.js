'use client';

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";


export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totals, setTotals] = useState(10);

  const fetchProducts = () => {
    if (totals > products.length) {
      fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts([...products, ...data.products]);
          setTotals(data.total);
          setLimit(data.limit);
          setSkip(skip + data.limit);
        })
        .catch((error) => { })
        .finally(() => {
          setLoading(false);
        });
    }
  }
  useEffect(() => {
    if (totals > products.length) {
      fetchProducts();
    }
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 bg-white justify-items-center"  >
      <div className="grid grid-cols-1 sm:grid-cols-1 w-[80%]"  >
        <Header />
        <SectionTitle t1='Feature products' t2='BEST SELLER PRODUCT' t3='this is sub sub heading' />
        <div className="grid grid-cols-1 sm:grid-cols-5  justify-items-center" >
          {products?.map(product => (
            <div className="grid grid-cols-1 sm:grid-cols-1 p-4" >
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.thumbnail}
                title={product.title}
                category={product.category}
                price={product.price}
                discountPercentage={product.discountPercentage} />
            </div>
          ))}
        </div>
      </div>
      {totals > products.length && (
        <div className="  justify-items-center grid grid-cols-1 sm:grid-cols-1 m-10 ">
          <div className=" pt-4 pb-4 w-[280px] text-center text-emerald-500 border-emerald-500 border-2" onClick={fetchProducts}>
            LOAD MORE PRODUCTS
          </div>
        </div>)
      }
    </div>
  );
}
