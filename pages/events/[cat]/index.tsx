import Header from "../../../components/header";
import styles from "../../../styles/Home.module.css";

export default function EventCountry() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Events in A country</h1>
        <a href="/events/event1">Event1</a>
        <a href="/events/event2">Event2</a>
        <a href="/events/event3">Event3</a>
        <a href="/events/event4">Event4</a>
        <a href="/events/event5">Event5</a>
      </main>
    </>
  );
}
