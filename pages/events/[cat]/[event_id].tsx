import Head from "next/head";
import Header from "../../../components/header";
import styles from "../../../styles/Home.module.css";

export default function SignleEvent() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Our single event</h1>
      </main>
    </>
  );
}
