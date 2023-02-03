import Link from "next/link";
import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import smartFactory_1_1 from '@/public/image/smartFactory/smartFactory-1-1.png';
import smartFactory_1_2 from '@/public/image/smartFactory/smartFactory-1-2.png';
import smartFactory_2_1 from '@/public/image/smartFactory/smartFactory-2-1.png';
import smartFactory_2_1_1 from '@/public/image/smartFactory/smartFactory-2-1-1.png';
import smartFactory_2_2 from '@/public/image/smartFactory/smartFactory-2-2.png';
import gov_1 from '@/public/image/smartFactory/gov-1.png';
import gov_2 from '@/public/image/smartFactory/gov-2.png';
import gov_3 from '@/public/image/smartFactory/gov-3.png';
import gov_4 from '@/public/image/smartFactory/gov-4.png';
import gov_5 from '@/public/image/smartFactory/gov-5.png';
import gov_6 from '@/public/image/smartFactory/gov-6.png';
import gov_7 from '@/public/image/smartFactory/gov-7.png';
import gov_8 from '@/public/image/smartFactory/gov-8.png';
import gov_9 from '@/public/image/smartFactory/gov-9.png';
import gov_10 from '@/public/image/smartFactory/gov-10.png';
import gov_11 from '@/public/image/smartFactory/gov-11.png';
import gov_12 from '@/public/image/smartFactory/gov-12.png';
import gov_13 from '@/public/image/smartFactory/gov-13.png';
import gov_14 from '@/public/image/smartFactory/gov-14.png';
import gov_15 from '@/public/image/smartFactory/gov-15.png';
import Head from "next/head";

export default function SmartFactory() {
  return (
    <>
    <Head>
      <title>DKLAB - 스마트팩토리</title>
    </Head>
    <div className='smartFactory'>
      <Header><h1>스마트팩토리</h1></Header>
      <main>
          <section>
            <p className='title'>2023년 스마트공방 기술보급 사업</p>
          </section>
          <section>
            <p className='subtitle'>사업지원</p>
            <div className='contents'>
              <Image src={smartFactory_2_1} className='timeline-w' alt="지원내용"/>
              <Image src={smartFactory_2_1_1} className='timeline-m' alt="지원내용"/>
              <Image src={smartFactory_2_2} className='timeline-w' alt="지원내용"/>
            </div>
          </section>
          <section>
            <p className='subtitle'>지원내용</p>
            <div className='contents'>
              <Image src={smartFactory_1_1} alt="사업지원"/>
              <Image src={smartFactory_1_2} alt="사업지원"/>
            </div>
          </section>
          <section>
            <p className='subtitle'>구축실적 및 참고자료</p>
            <div className='contents'>
              <Link href='/vendor/smartStudio' className='smartFactory-btn'>2022년 구축 실적 보러가기</Link>
              <Link href='#' className='smartFactory-btn'>2023년 스마트공방 기술보급 사업 모집 공고</Link>
            </div>
          </section>
          <section>
            <p className='subtitle'>디케이랩 유관기관</p>
            <div className='gov'>
              <Link href='#'><Image src={gov_1} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_2} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_3} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_4} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_5} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_6} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_7} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_8} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_9} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_10} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_11} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_12} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_13} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_14} alt="gov Logo"/></Link>
              <Link href='#'><Image src={gov_15} alt="gov Logo"/></Link>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  </>
  )
}