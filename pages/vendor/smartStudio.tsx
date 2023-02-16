import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import vendor_s from '@/public/image/vendor/smart-s.png';
import vendor_s_map from '@/public/image/vendor/smart-s-map.png';
import vendor_s_icon from '@/public/image/vendor/smart-s-icon.png';
import Head from 'next/head';

export default function SmartStudio() {
  return (
    <>
    <Head>
      <title>DKLAB - 구축실적</title>
      <meta property="og:image" content="../../public/image/vendor/smart-s.png" />
      <meta property="og:image" content="../../public/image/vendor/smart-s-map.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩 스마트공방 구축실적" />
    </Head>
    <div className='smartProduct'>
      <Header><h1>스마트공방</h1></Header>
      <main>
          <section>
            <div>
              <Image src={vendor_s_icon} alt='스마트공방'/>
            </div>
            <div>
              <p className='title'>스마트 공방이란</p>
              <p className='discription'>‘스마트공방’은 소공인(10인 미만 제조업)이 스마트기술(IoT, AI 등)을 도입해 수작업 위주의 제조공정을 개선(부분 자동화, 생산관리시스템 도입 등)하고 생산성과 품질 향상하도록 지원하는 사업입니다.</p>
            </div>
          </section>
          <section>
            <p className='subtitle'>스마트 공방</p>
            <div>
              <Image src={vendor_s} alt="스마트공방 실적"/>
              <Image src={vendor_s_map} alt="스마트공방 실적"/>
            </div>
          </section>
          <section></section>
      </main>
      <Footer />
    </div>
  </>
  )
}