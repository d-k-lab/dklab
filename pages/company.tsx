import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import logo from '@/public/image/logo/dklab-logo-white.svg';
import business_w from '@/public/image/company/business.png';
import business_m from '@/public/image/company/business-m.png';
import business_all from '@/public/image/company/business-all.png';
import history from '@/public/image/company/history.png';
import patent from '@/public/image/company/patent.png';

import company from '@/public/image/company/info.png';
import building from '@/public/image/company/building.png';
import Head from 'next/head';

export default function Company() {
  return (
    <>
    <Head>
      <title>DKLAB - 회사소개</title>
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
          <div>
            <p className='title'>디케이랩</p>
            <p className='discription'>‘스마트 공장’은 산업 4.0 기술을 적용한 공장을 의미합니다. 이를 위해 인공지능, 빅데이터, 사물인터넷 등의 기술을 사용하여 생산 공정을 자동화하고 데이터를 분석하여 생산 효율을 높이는 방식으로 운영됩니다.</p>
          </div>
        </section>
        <section>
          <p className='subtitle'>사업영역</p>
          <div>
            <Image src={business_w} alt="사업영역" className='business-w'/>
            <Image src={business_m} alt="사업영역" className='business-m'/>
            <Image src={business_all} alt="사업영역" />
          </div>
        </section>
        <section>
          <p className='subtitle'>회사개요</p>
          <div>
            <Image src={history} alt="회사 연혁"/>
          </div>
        </section>
        <section>
          <div>
            <Image src={patent} alt="특허"/>
            <ul>
              <li>2019.04 성균관대학교 대학원 스마트팩토리융합학과 창업</li>
              <li>2019 과학기술정보통신부 주관 실험실창업탐색팀 우수기업 선정</li>
              <li>2019 중소벤처기업부 주관 스마트제조혁신추진단 공급기업</li>
              <li>2019 ~ 2021 창업진흥원 주관 재도전성공패키지 선발 및 우수 졸업, 후속지원</li>
            </ul>
          </div>
        </section>
        <section>
          <p className='subtitle'>회사정보</p>
          <div>
            <Image src={company} alt="company"/>
            <Image src={building} alt="building"/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
  )
}