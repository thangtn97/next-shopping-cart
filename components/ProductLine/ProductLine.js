import styles from "./ProductLine.module.css";
import Link from "next/link";

const productLine = (props) => {
  const style = props.size === "large" ? { height: "350px" } : "";
  return (
    <Link href="/shop/[productLines]" as={props.link}>
      <div style={{ ...style }} className={styles.ProductLine}>
        <div
          style={{
            backgroundImage: `url(${props.productLine.imageUrl})`,
          }}
          className={styles.Image}
        >
          <span className={styles.TitleDiv}>
            <p
              className={styles.Title}
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              {props.productLine.name}
            </p>
            <p className={styles.Title}>Shop now</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default productLine;
