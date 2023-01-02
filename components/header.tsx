import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Header() {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.navBar}>
          <h3>Events App</h3>

          <div>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about_us">About Us</a>
          </div>
          
        </nav>
      </header>
    </>
  );
}
