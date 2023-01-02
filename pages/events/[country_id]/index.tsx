import Header from "../../../components/header";
import styles from "../../../styles/Home.module.css";

type props = {
  title: string;
  data: any[];
};

export default function EventCountry({ title, data }: props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{title}</h1>

        <div className={styles.inDiv}>
          {data?.map((e: any) => (
            <a href={`/events/${e.city}/${e.id}`} key={e.id}>
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

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const path: any = [];

  events_categories.map((ev: any) => {
    const country_id: string = ev.id.toString();
    path.push({ params: { country_id } });
  });

  return {
    paths: path,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const { allEvents } = await import("../../../data/data.json");

  const city = allEvents.filter(
    (ev: any) => ev.city === context.params.country_id
  );

  return {
    props: {
      title: `Events in the ${context.params.country_id}`,
      data: city,
    },
  };
}
