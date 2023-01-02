import Header from '../../components/header'
import styles from '../../styles/Home.module.css'



type props = {
  title: string;
  data: any[];
};

export default function Events({title,data}:props) {
  return (
    <>
    <Header/>
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
  )
}


export async function getStaticProps(){
  const { allEvents } = await import("../../data/data.json");

  return {
    props: {
      title: "Events",
      data: allEvents,
    },
  };
}