import Head from "next/head";
import Link from 'next/link'
import Product from "../components/product";
import { getSortedProductsData } from "../lib/products";

export async function getStaticProps() {
  const allProductsData = getSortedProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}

function generateProducts(products) {
  
    return products.map((product) => (
          <li key={product.params.id}>
            <Link href={`/produto/${product.params.id}`}>
                <a>
                  <Product data={product} />
                </a>
            </Link>
          </li> 
    ))
}

export default function Products({ allProductsData }) {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <ul>{generateProducts(allProductsData)}</ul>
    </>
  );
}
