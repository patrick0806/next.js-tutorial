import Image from "next/image";
import styles from "./product.module.css";
export default function Product(props) {
  return (
    <>
    <div className="group border-2 border-transparent px-16 py-6 max-w-sm mx-auto w-px-100 bg-white flex flex-col items-center space-x-4 hover:border-gray-100">
      <Image
        className=""
        src={props.data.params.image}
        height={144}
        width={144}
        alt={"Produto"}
      />
      <div className="text-center">
        <h2>{props.data.params.title}</h2>
        <p className="text-red-900">R$ {props.data.params.price}</p>
      </div>
      <div className="m-7 opacity-0 group-hover:opacity-100 px-16 py-6 max-w-sm mx-auto h-px flex items-center text-center text-white bg-red-600 rounded-md">
        <button>Comprar</button>
      </div>
    </div>
    
    </>
  );
}
//opacity-0 group-hover:opacity-100