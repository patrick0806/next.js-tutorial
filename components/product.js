import Image from "next/image";
import styles from "./product.module.css";
export default function Product(props) {
  return (
    <div className={styles.container}>
      <Image
        src={props.data.params.image}
        height={144}
        width={144}
        alt={"Produto"}
      />
      <h2>{props.data.params.title}</h2>
      <p>{props.data.params.price}</p>
    </div>
  );
}
