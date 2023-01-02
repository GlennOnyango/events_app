import Header from "../../../../components/header";
import styles from "../../../../styles/Home.module.css";

type props = {
  data: {
    "id": string,
    "title": string,
    "city": string,
    "description": string,
    "image": string,
    "emails_registered": []
  };
};

export default function EventCountry({ data }: props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{data.title}</h1>
        <img src={`${data.image}`} width={"20%"} />
        <a href={`/events/${data.city.toLowerCase()}`} >City : {data.city}</a>
        <p>Description : {data.description}</p>
        
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const { allEvents } = await import("../../../../data/data.json");
  const path: any = [];

  allEvents.map((ev: any) => {
    const event_id: string = ev.id.toString();
    const country_id: string = ev.city.toString();
    path.push({ params: { country_id,event_id } });
  });

  return {
    paths: path,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const { allEvents } = await import("../../../../data/data.json");

  const event = allEvents.filter(
    (ev: any) => ev.id === context.params.event_id
  );

  console.log(event);

  return {
    props: {
      data: event[0],
    },
  };
}
