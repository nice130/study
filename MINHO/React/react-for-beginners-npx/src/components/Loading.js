import styles from "../routes/Home.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.loader}>Loading...</h1>
    </div>
  );
}

export default Loading;
