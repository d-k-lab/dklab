import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import logo from '@/public/image/logo/dklab-logo-white.svg';
import business_w from '@/public/image/company/business.png';
import business_m from '@/public/image/company/business-m.png';
import business_all from '@/public/image/company/business-all.png';
import history from '@/public/image/company/history.png';
import patent from '@/public/image/company/patent.png';
import member from '@/public/image/company/member.png';

import company from '@/public/image/company/info.png';
import building from '@/public/image/company/building.png';
import Head from 'next/head';

export default function Company() {
  return (
    <>
    <Head>
      <title>DKLAB - 회사소개</title>
      <meta name="title" content="디케이랩 회사소개"></meta>
      <meta name="description" content="아이피스, CM, ERP, MES, QMS, WMS, 공정 시각화, 스마트공방, 스마트공장, SaaS, 실시간 생산, 모니터링"></meta>
      <meta property="og:site_name" content="디케이랩"></meta>
      <meta property="og:image" content="/image/logo/dklab-logo-black.svg" />
      <meta property="og:image" content="/image/logo/dklab-logo-white.svg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩" />
      <meta property="og:image" content="/image/company/business.png" />
      <meta property="og:description" content="DKLAB 디케이랩 사업영역" />
      <meta property="og:image" content="/image/company/business-m.png" />
      <meta property="og:description" content="DKLAB 디케이랩 사업영역 스마트공장, 스마트공방" />
      <meta property="og:image" content="/image/company/building.png" />
      <meta property="og:description" content="DKLAB 디케이랩 회사개요, 회사정보" />
    </Head>
    <div className='company'>
      <Header><h1>회사소개</h1></Header>
      <main>
        <section>
          <div>
            <Image src={logo} alt='디케이랩 로고'/>
          </div>
          <div className='title-area'>
            <p className='title'>디케이랩</p>
            <p className='description'>DKLab은 스마트 공방/공장 진단 및 구축 컨설팅, 제조 솔루션 개발 및 공급, 프로세스 분석 및 개선, 연구개발을 통해 최적의 솔루션을 공급하는 기업입니다.</p>
          </div>
        </section>
        <section>
          <p className='subtitle'>회사개요</p>
          <div>
            <Image src={member} alt="멤버"/>
          </div>
        </section>
        <section>
          <div>
            <Image src={patent} alt="특허"/>
          </div>
        </section>
        <section>
          <p className='subtitle'>회사연혁</p>
          <div>
            <Image src={history} alt="회사연혁"/>
          </div>
        </section>
        <section>
          <p className='subtitle'>사업영역</p>
          <div>
            <Image src={business_all} alt="사업영역" />
          </div>
        </section>
        <section>
          <p className='subtitle'>회사정보</p>
          <div>
            <Image src={company} alt="company"/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
  )
}