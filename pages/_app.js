import "../styles/globals.css";
import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import up from "./up.module.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <TransitionGroup>
      <CSSTransition
        key={router.asPath}
        classNames={{ ...up }}
        enter
        exit
        timeout={1500}
        unmountOnExit
      >
        <Component {...pageProps} />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default MyApp;
