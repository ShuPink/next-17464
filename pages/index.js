import Cards from "../components/cards";
import s from "./index.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <h1 className={s.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Cards />
      </main>
    </div>
  );
}
