import Cards from "../components/cards";
import s from "./id.module.scss";

export default function Id({id}) {
  return (
    <div className={`${s.container} ${id === "1" ? s.p1 : s.p2 }`}>
      <main>
        <h1 className={s.title}>
          Page {id}
        </h1>
        <Cards />
      </main>
    </div>
  );
}


export async function getStaticProps({ params }) {
  return {
    props: {id: params.id },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = ["1","2"].map((p) => {
    return { params: { id: p } };
  });

  return {
    paths,
    fallback: false,
  };
}
