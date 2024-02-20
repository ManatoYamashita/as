import Head from "next/head";
import { getDatabase } from "../lib/notion.js";
import styles from "./index.module.css";

import { Posts } from "../components/PostsComponent.jsx";
import { Header } from "../components/HeaderComponent.jsx";
import { Cover } from "../components/CoverComponent.jsx";
import { HorizontalScrollComponent } from "../components/HorizontalScrollComponent.jsx";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>AmauSyrup unofficial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>

        <Cover />

        <section className={styles.section1}>
          <Posts posts={posts} /> 
        </section>

        <HorizontalScrollComponent />

        <footer className={styles.footer}>
        </footer>

      </main>
    </div>
  );
}

//SSG(ISR)を追加
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 10, //10秒間隔で更新
  }
}

