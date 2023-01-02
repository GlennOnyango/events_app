import styles from "../styles/Home.module.css";
import Header from "../components/header";

type props = {
  title: string;
  data: any[];
};

export default function Home({ title, data }: props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Home</h1>

        <div className={styles.inDiv}>
          {data.map((e: any) => (
            <a href={`/events/${e.id}`} key={e.id}>
              <img src={`${e.image}`} width={"20%"} />
              <h2>{e.title}</h2>
              <p className={styles.description}>{e.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");

  return {
    props: {
      title: "Hello everyone!",
      data: events_categories,
    },
  };
}
