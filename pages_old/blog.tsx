import Footer from "@/components/footer";
import Header from "@/components/header";
import Section from "@/components/section";
import Head from "next/head";
import Link from "next/link";

import { getAllPublished } from './api/notionBlog';

export default function Blog({ posts }: any) {
  return (
    <>
      <Head>
        <title>DKLAB - 디케이랩</title>
      </Head>
      <div className='blog'>
        <Header />
        <main>
          <section>
            <p className='title'>DKLAB BLOG</p>
          </section>
          <Section tag="fe" posts={posts} limit={4}>
            <Link href='/post/fe' className='more'>
              All Posts
              <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="more button" />
            </Link>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};