import Head from "next/head";
import { getDatabase } from "../lib/notion.js";
import styles from "./index.module.css";

import { SeoHead } from "../components/SeoHeadComponent.jsx";
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
    <SeoHead
      title={"AmauSyrup.net - 天羽しろっぷ"}
      titleTemplate={"天羽しろっぷ 非公式ファンサイト"}
      description={"AmauSyrup.netは、VTuber『天羽しろっぷ』の非公式ファンサイトです。notionAPIを使用して、天羽しろっぷの最新情報をお届けします。"}
      ogType={"website"}
      imgUrl={`${pageOgImg}/ogp.webp`}
    />

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

