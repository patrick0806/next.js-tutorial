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
          <li className="m-1" key={product.params.id}>
            <Link href={`/produto/${product.params.id}`}>
                <a className="hover:no-underline">
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
      <ul className="flex flex-row">{generateProducts(allProductsData)}</ul>
    </>
  );
}
