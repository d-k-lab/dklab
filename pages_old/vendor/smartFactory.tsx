import Link from "next/link";
import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import vendor_p from '@/public/image/vendor/smart-p.png';
import vendor_p_map from '@/public/image/vendor/smart-p-map.png';
import vendor_p_icon from '@/public/image/vendor/smart-p-icon.png';
import Head from "next/head";
import Form from "@/components/form";

export default function SmartProduct() {
  return (
    <>
    <Head>
      <title>DKLAB - 구축실적</title>
      <meta name="title" content="2023년 스마트공방 기술보급 사업 신청"></meta>
      <meta name="description" content="2023년 스마트공방 기술보급 사업 신청, 아이피스, CM, ERP, MES, QMS, WMS, 공정 시각화, 스마트공방, 스마트공장, SaaS, 실시간 생산, 모니터링"></meta>
      <meta property="og:site_name" content="디케이랩"></meta>
      <meta property="og:image" content="./image/vendor/smart-p.png" />
      <meta property="og:image" content="./image/vendor/smart-p-map.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩 스마트공장 구축실적" />
    </Head>
    <div className='smartProduct'>
      <Header><h1>스마트공장</h1></Header>
      <main>
        <section>
          <div>
            <Image src={vendor_p_icon} alt='스마트공장'/>
          </div>
          <div>
            <p className='title'>스마트 공장이란</p>
            <p className='discription'>‘스마트 공장’은 산업 4.0 기술을 적용한 공장을 의미합니다. 이를 위해 인공지능, 빅데이터, 사물인터넷 등의 기술을 사용하여 생산 공정을 자동화하고 데이터를 분석하여 생산 효율을 높이는 방식으로 운영됩니다.</p>
          </div>
        </section>
        <section>
          <p className='subtitle'>스마트 공장</p>
          <div className='performance'>
            <div>
              <Image src={vendor_p} alt="스마트공장 실적"/>
              <Form />
            </div>
            <Image src={vendor_p_map} alt="스마트공장 실적"/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
  )
}