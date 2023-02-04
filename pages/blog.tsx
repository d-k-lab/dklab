import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>DKLAB - 디케이랩</title>
      </Head>
      <div className='index'>
        <Header />
        <main>
          blog
        </main>
        <Footer />
      </div>
    </>
  )
}