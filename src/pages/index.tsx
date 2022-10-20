import Image from "next/future/image";

import LogoRocketseat from "../assets/rocketseat-logo.svg";
import LogoGithub from "../assets/github-logo.svg";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolvendo uma web acessível | Blog Rocketseat</title>
      </Head>
      <header className={styles.header}>
        <Image src={LogoRocketseat} width={286 / 2} alt="Blog da Rocketseat" />
        <nav className={styles.nav}>
          <a
            href="https://github.com/grasielarosa"
            aria-label="Github de Grasiela Rosa"
          >
            <Image src={LogoGithub} alt="" />
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <p className={styles.tagline}>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </p>
          </header>
          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>
          <h2>O que é acessibilidade, afinal?</h2>
        </article>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/grasielarosa">feito por Grasiela Rosa</a>
      </footer>
    </>
  );
}
