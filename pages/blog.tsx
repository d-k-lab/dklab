import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Blog() {
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
        </main>
        <Footer />
      </div>
    </>
  )
}