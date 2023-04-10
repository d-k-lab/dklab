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
          <div>
            <p className='title'>디케이랩</p>
            <p className='discription'>DKLab은 스마트 공방/공장 진단 및 구축 컨설팅, 제조 솔루션 개발 및 공급, 프로세스 분석 및 개선, 연구개발을 통해 최적의 솔루션을 공급하는 기업입니다.</p>
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
              <li>2019 성균관대 [스마트팩토리융합학과] 대학원 창업</li>
              <li>2019 학생창업유망팀300 선발(교육부)</li>
              <li>2019 실험심 창업탐색팀 선발(과기정통부) 및 연구개발전담부서 인정</li>
              <li>2019 [재도전 성공패키지] 선발, 후속지원 선발(창업진흥원)</li>
              <li>2020 창업성장기술개발사업 완료(참여기업: 제조가공산업 스마트 매칭시스템)</li>
              <li>2022 벤처기업 인증, 하이서울기업 인증</li>
              <li>2022 클라우드기반 솔루션개발사업 선정(기정원) </li>
              <li>2022 성남산업진흥원 오픈이노베이션 선정(SK 스마트공장 플랫폼 연동)</li>
              <li>2023 성남산업진흥원 지원 성남벤처센터(정자동 킨스타워 19층) 정글ON 입주</li>
              <li>특허 등록: 공정시각화(제10-2048377호), 미국 특허(US 11,288,610 B2)</li>
              <li>상표 등록: 아이피스 프로(제40-1604081호), 아이피스 미니(제40-1667402호)</li>
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