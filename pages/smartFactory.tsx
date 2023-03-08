import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import dklab_samrtFactory_1 from '@/public/image/smartFactory/dklab_samrtFactory_1.png';
import dklab_samrtFactory_2 from '@/public/image/smartFactory/dklab_samrtFactory_2.png';
import dklab_samrtFactory_3 from '@/public/image/smartFactory/dklab_samrtFactory_3.png';
import company_samrtFactory_1 from '@/public/image/smartFactory/company_samrtFactory_1.png';
import company_samrtFactory_2 from '@/public/image/smartFactory/company_samrtFactory_2.png';
import company_samrtFactory_3 from '@/public/image/smartFactory/company_samrtFactory_3.png';
import company_samrtFactory_4 from '@/public/image/smartFactory/company_samrtFactory_4.png';
import company_samrtFactory_5 from '@/public/image/smartFactory/company_samrtFactory_5.png';
import company_samrtFactory_6 from '@/public/image/smartFactory/company_samrtFactory_6.png';
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
import gov_16 from '@/public/image/smartFactory/gov-16.png';
import gov_17 from '@/public/image/smartFactory/gov-17.png';
import gov_18 from '@/public/image/smartFactory/gov-18.png';
import gov_19 from '@/public/image/smartFactory/gov-19.png';


export default function SmartFactory() {
  return (
    <>
    <Head>
      <title>DKLAB - 스마트팩토리</title>
      <meta name="title" content="2023년 스마트공방 기술보급 사업 모집 공고"></meta>
      <meta name="description" content="2023년 스마트공방 기술보급 사업 모집 공고"></meta>
      <meta property="og:site_name" content="디케이랩"></meta>
    </Head>
    <div className='smartFactory'>
      <Header><h1>스마트팩토리</h1></Header>
      <main>
          <section>
            <p className='title'><span>스마트공방</span> 기술보급 사업</p>
          </section>
          <section>
            <p className='subtitle'><u>작업자의 행복을 위해</u> 스마트공방 구축 시 이점</p>
            <div className='contents'>
              <ul>
                <li>
                  <p>기업의 원활한 공정과 제품 관련 데이터 관리</p>
                  <p>작업자의 생산성과 삶과 업무의 행복 향상</p>
                  <Image src={dklab_samrtFactory_1} alt='작업자 이미지'></Image>
                </li>
                <li>
                  <p>작업 외의 모든 데이터를 디케이랩이 관리</p>
                  <p>작업자는 작업 디테일을 살리는 것에 집중 가능</p>
                  <Image src={dklab_samrtFactory_2} alt='작업자 이미지'></Image>
                </li>
                <li>
                  <p>디케이랩은 기업의 정확한 데이터를 관리</p>
                  <p>기업의 원가 절감과 Co2 탄소 절감 가능</p>
                  <Image src={dklab_samrtFactory_3} alt='ESG 이미지'></Image>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <p className='subtitle'><u>스마트공방</u> 정부지원사업 공고 내용</p>
            <div className='contents business'>
              <Image src={smartFactory_1_1} alt="스마트공방 정부지원사업 공고 내용"/>
              <Image src={smartFactory_1_2} alt="스마트공방 정부지원사업 공고 내용"/>
            </div>
          </section>
          <section>
            <p className='subtitle'>기업의 <u>스마트 팩토리를 위해</u> 한걸음 다가가는 방법</p>
            <div className='contents step'>
              <ul>
                <li>
                  <p>작업자가 손으로 하나씩 체크하는 재고 수동 체크</p>
                  <p>디지털화로 입/출고 재고 자동 체크</p>
                  <Image src={company_samrtFactory_1} alt='스마트 팩토리 이미지'></Image>
                </li>
                <li>
                  <p>잃어버리거나 숫자를 알아볼 수 없는 종이 장부</p>
                  <p>디지털화로 정확한 숫자 기록 관리</p>
                  <Image src={company_samrtFactory_2} alt='스마트 팩토리 이미지'></Image>
                </li>
                <li>
                  <p>작업자가 기입하는 재고 엑셀 관리</p>
                  <p>재고, 불량, 교체시기, 제어, 공정 등 모든 데이터 관리</p>
                  <Image src={company_samrtFactory_3} alt='스마트 팩토리 이미지'></Image>
                </li>
                <li>
                  <p>작업자의 감각으로 의존하는 제품 불량 선별</p>
                  <p>데이터 기록을 통해 불량 선별</p>
                  <Image src={company_samrtFactory_4} alt='스마트 팩토리 이미지'></Image>
                </li>
                <li>
                  <p>작업자의 감각으로 의존하는 기계의 모든 데이터</p>
                  <p>진동, 회전, 동작, 온도, 습도, 전압 등 데이터 관리</p>
                  <Image src={company_samrtFactory_5} alt='스마트 팩토리 이미지'></Image>
                </li>
                <li>
                  <p>사람의 감각으로 의존하는 제품 교체 시기</p>
                  <p>데이터 기록을 통해 제품 교체 시기 측정</p>
                  <Image src={company_samrtFactory_6} alt='스마트 팩토리 이미지'></Image>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <p className='subtitle'><u>스마트공방</u> 지원 기간 및 절차</p>
            <div className='contents timeline'>
              <Image src={smartFactory_2_1} className='timeline-w' alt="지원 기간 및 절차"/>
              <Image src={smartFactory_2_1_1} className='timeline-m' alt="지원 기간 및 절차"/>
              <Image src={smartFactory_2_2} className='timeline-w' alt="지원 기간 및 절차"/>
            </div>
          </section>
          <section>
            <p className='subtitle'>구축실적 및 참고자료</p>
            <div className='contents'>
              <Link href='/vendor/smartStudio' className='smartFactory-btn dklab-smartFactory-btn'>디케이랩 스마트공방 구축 실적 보기</Link>
              <Link href='#' className='smartFactory-btn'>스마트공방 기술보급 사업 모집 공고</Link>
            </div>
          </section>
          <section>
            <p className='subtitle'>디케이랩 유관기관</p>
            <div className='gov'>
              <Link href='https://www.mss.go.kr/'><Image src={gov_1} alt="gov Logo"/></Link>
              <Link href='https://semas.or.kr/index_main.html'><Image src={gov_2} alt="gov Logo"/></Link>
              <Link href='https://www.kosmes.or.kr/intro/kosme_intro.html'><Image src={gov_3} alt="gov Logo"/></Link>
              <Link href='https://www.kbiz.or.kr/#'><Image src={gov_4} alt="gov Logo"/></Link>
              <Link href='https://smartfactory.skku.edu/smartfactory/index.do'><Image src={gov_5} alt="gov Logo"/></Link>
              <Link href='https://www.tipa.or.kr/'><Image src={gov_6} alt="gov Logo"/></Link>
              <Link href='https://www.smtech.go.kr/'><Image src={gov_7} alt="gov Logo"/></Link>
              <Link href='https://www.smart-factory.kr/'><Image src={gov_8} alt="gov Logo"/></Link>
              <Link href='https://www.bizinfo.go.kr/'><Image src={gov_9} alt="gov Logo"/></Link>
              <Link href='https://www.kmtca.or.kr/'><Image src={gov_10} alt="gov Logo"/></Link>
              <Link href='https://www.ksa.or.kr/'><Image src={gov_11} alt="gov Logo"/></Link>
              <Link href='https://www.kpc.or.kr/'><Image src={gov_12} alt="gov Logo"/></Link>
              <Link href='https://www.korcham.net/'><Image src={gov_13} alt="gov Logo"/></Link>
              <Link href='https://www.snip.or.kr/'><Image src={gov_14} alt="gov Logo"/></Link>
              <Link href='https://www.skcc.co.kr/'><Image src={gov_15} alt="gov Logo"/></Link>
              <Link href='https://www.innobiz.net/'><Image src={gov_16} alt="gov Logo"/></Link>
              <Link href='https://www.smart-factory.kr/ciIntrcn'><Image src={gov_17} alt="gov Logo"/></Link>
              <Link href='https://hiseoul.sba.kr/'><Image src={gov_18} alt="gov Logo"/></Link>
              <Link href='http://www.korsca.kr/'><Image src={gov_19} alt="gov Logo"/></Link>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  </>
  )
}