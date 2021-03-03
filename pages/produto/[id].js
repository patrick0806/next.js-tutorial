import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import {getProductData,getAllProductsIds} from "../../lib/products";

export async function getStaticProps({ params }) {
    let productData = getProductData(params.id);
    
    return {
      props: {
        productData:productData,
      },
    };
}

export async function getStaticPaths() {
    const paths = getAllProductsIds();
    return {
      paths,
      fallback: false,
    };
  }

export default function Product({productData}){3
  console.log(productData);
  return(
        <>
            <Head><title>{productData.product.title}</title></Head>
            <div>
              
              <h2>{productData.product.title}</h2>
              <p>{productData.product.price}</p>
              <p>{productData.product.description}</p>
            </div>
            <Link href="/produtos">
              <a>
                Voltar
              </a>
            </Link>
        </>
    )
}