import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getProductData, getAllProductsIds } from "../../lib/products";

export async function getStaticProps({ params }) {
  let productData = getProductData(params.id);

  return {
    props: {
      productData: productData,
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

export default function Product({ productData }) {
  return (
    <>
      <Head>
        <title>{productData.product.title}</title>
      </Head>
      <Link href="/produtos">
        <a className="mt-8 ml-8 bg-gray w-8 h-8 text-gray-700">
          <i className="arrow-left"></i>Voltar
        </a>
      </Link>
      <div className="h-full w-full flex justify-center">
        <div className="border-2 bg-gray-100 text-gray-700 mt-8 mx-8 w-2/4 h-2/4 flex flex-row items-center">
          <div className="m-8">
            <Image
              src={productData.product.image}
              height={258}
              width={258}
              alt={productData.product.title}
            />
          </div>
          <div className="mr-8 flex flex-col">
            <h2>{productData.product.title}</h2>
            <hr />
            <p className="mt-2">R$ {productData.product.price}</p>
            <button className="m-2 hidden bg-red-600 rounded-md text-center text-white w-36 h-7 hover:bg-red-900">
              Comprar
            </button>
            <hr />
            <h3 className="text-gray-900">Descrição do Produto</h3>
            <br />
            <p>{productData.product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
