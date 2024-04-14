import Head from "next/head";
import { getDatabase } from "../lib/notion.js";
import styles from "./index.module.css";

import { Posts } from "../components/PostsComponent.jsx";
import { Corner } from "../components/CornerComponent.jsx";
import { Cover } from "../components/CoverComponent.jsx";
import { HorizontalScrollComponent } from "../components/HorizontalScrollComponent.jsx";
import { Message } from "../components/MessageComponent.jsx";
import { CircleAnim } from "../components/circleAnimComponent.jsx";
import { Footer } from "../components/FooterComponent.jsx";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div className={styles.wrap}>
      <Head>
        <title>AmauSyrup unofficial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Corner />
        
        <Cover />

        <section className={styles.section1}>
          <CircleAnim  size={100} top={"10rem"} right={"-15vw"} />
          <Posts id="section1" posts={posts} /> 
        </section>

        <HorizontalScrollComponent />

        <Message />

        <Footer />

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

