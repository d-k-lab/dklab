import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";
import Form from "@/components/form";

export default function Smart2023() {
  return (
    <>
      <Head>
        <title>DKLAB - 스마트팩토리</title>
        <meta name="title" content="2023년 스마트공방 기술보급 사업 모집 공고"></meta>
        <meta name="description" content="2023년 스마트공방 기술보급 사업 모집 공고"></meta>
        <meta property="og:site_name" content="디케이랩"></meta>
      </Head>
      <div className='smart2023'>
        <Header><h1>2023년 스마트공방</h1></Header>
        <section><p className='title'>2023년 스마트공방 기술보급사업 모집 공고</p></section>
        <section>
          <div className='public'>
            <p><b>1. 사업목적 :</b> 수작업 위주 작업공정 내 디지털 전환을 위한 자동화 기기 도입, 데이터 수집·연계, 공용솔루션 등 스마트화 지원</p>
            <p><b>2. 지원규모 :</b> 1,200개사 내외</p>
            <p><b>3. 지원방식 :</b> 사업비 매칭 지원(국비 70% 이내, 자부담 30% 이상)</p>
            <p><b>4. 신청접수 및 선정 :</b></p>
              <p className='left'>(사업신청) 신청서, 사업계획서 및 H/W, S/W 비교견적서, 개인정보동의서 등 필수서류를 e-나라도움 홈페이지를 통해 신청·제출</p>
              <p className='left'>(선정평가) “자격확인 → 서류평가 → 현장평가” 통해 선정</p>
              <p className='left'>(협약체결) 선정소공인은 이행보증보험증권 발급 및 자부담금 납부 후 선정소공인↔공급업체↔공단 간 3자 협약진행</p>
            <p><b>5. 지원내용 :</b></p>
              <p className='left'>(장비 및 재료비) 장비 및 상용소프트웨어 임차료, 장비 고도화를 위한 부품 등 재료비</p>
              <p className='left'>(위탁개발비) 공정개선, 생산관리 및 제품개발 등을 위한 소프트웨어 개발비 지원</p>
            <p><b>6. 지원유형 :</b> (통합)공정디지털화</p>
            <p><b>7. 주요내용 :</b> 공정의 자동화 연계, 업무의 디지털화를 위한 ★스마트장비 및 소프트웨어 구축</p>
            <p><b>8. 공정디지털 유형(H/W 지원, S/W 지원)</b></p>
              <p className='left'>(지원규모) 750개사 내외</p>
              <p className='left'>(지원한도) 국고보조금 4,500만원 이내 + ⍺, (자부담금 30% 별도)</p>
              <p className='left'> - ⍺포함 국고보조금 최대 1억원까지 신청가능하며, 국고보조금 4,500만원을 초과신청 시 지원한도는 평가위원회 결정</p>
              <p className='left'>(지원내용) 생상공정별 자동화 연계, 생산에서 최종 소비자로의 유통 단계까지 자동화를 위해 H/W와 S/W 지원</p>
              <p className='left'>⍺(국비)의 최대한도는 5,500만원, 𐌁(자부담)의 최대한도는 2,360만원이며 ⍺는 지원항목별 지원한도 없음</p>
            <p><b>9. 지원대상 :</b> 소공인(상시근로자 수 10인 미만 제조업)</p>
            <p><b>10. 신청기간 :</b> 2023. 4 27(목) ~ 2023. 5. 17(수) 18:00까지(기한엄수)</p>
          </div>
        </section>
        <Form />
        <Footer />
      </div>
    </>
  )
}