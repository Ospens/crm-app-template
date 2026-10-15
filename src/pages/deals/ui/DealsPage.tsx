import { Header } from "../../../widgets/header";

import styles from "./Deals.module.css";

const DealsPage = () => {
  return (
    <>
      <Header title="Deals" buttonText="Add Deal" />
      <div className={styles.content}></div>
    </>
  );
};

export default DealsPage;
