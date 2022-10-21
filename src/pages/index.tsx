import Image from "next/future/image";
import * as Dialog from "@radix-ui/react-dialog";

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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button type="button">Termos de Uso</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.modal}>
              <Dialog.Title>Esses são os termos de uso</Dialog.Title>
              <Dialog.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                dolore pariatur quo ducimus aperiam repudiandae consequuntur
                voluptatum iure accusantium, maiores vero totam doloribus minima
                corporis necessitatibus dignissimos fuga cupiditate est.
              </Dialog.Description>
              <Dialog.Close className={styles.button}>
                Fechar termos de uso
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </footer>
    </>
  );
}
