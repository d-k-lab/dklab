import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import logo from '@/public/image/logo/dklab-logo-white.svg';
import business_w from '@/public/image/company/business.png';
import business_m from '@/public/image/company/business-m.png';
import ceo from '@/public/image/company/ceo.png';
import patent from '@/public/image/company/patent.png';

import company from '@/public/image/company/company.png';
import building from '@/public/image/company/building.png';
import Head from 'next/head';

export default function Company() {
  return (
    <>
    <Head>
      <title>DKLAB - 회사소개</title>
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
          </div>
        </section>
        <section>
          <p className='subtitle'>회사개요</p>
          <div>
            <Image src={ceo} alt="CEO"/>
            <p>삼성전자 DS부문, 시스코시스템즈 코리아에서 21년 간 근무한 혁신전문가(CEO)가 우수한 개발팀을 구성하여 공정시각화 특허를 등록하였으며 아이피스미니를 출시하여 스마트공장 솔루션을 공급하기 위한 모든 준비를 마쳤습니다. 이론과 현장 실무를 모두 경험한 스마트공장 전문가로서 IoT 센서, CPS, 클라우드, 빅데이터 및 AI 연구개발을 통해 스마트공장 컨설팅과 자동화 설비 도입, 그리고 그것을 운영하는 최적의 솔루션 공급을 위해 최선을 다하겠습니다.</p>
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