import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import solutionIfis_1 from '@/public/image/solutionIfis/solutionIfis-1.png';
import func_ifispro from '@/public/image/solutionIfis/func-ifispro.png';
import func_1 from '@/public/image/solutionIfis/func-1.png';
import func_2 from '@/public/image/solutionIfis/func-2.png';
import func_3 from '@/public/image/solutionIfis/func-3.png';
import func_4 from '@/public/image/solutionIfis/func-4.png';
import func_5 from '@/public/image/solutionIfis/func-5.png';
import func_m from '@/public/image/solutionIfis/func-m.png';

import flow_w from '@/public/image/solutionIfis/flow-w.png';
import flow_m from '@/public/image/solutionIfis/flow-m.png';
import flow_k from '@/public/image/solutionIfis/flow-k.png';
import flow_all from '@/public/image/solutionIfis/flow-all.png';
import ifisViz from '@/public/image/solutionIfis/ifisViz.png';
import Head from 'next/head';

export default function SolutionIfis() {
  return (
    <>
    <Head>
      <title>DKLAB - 솔루션</title>
      <meta name="title" content="디케이랩 솔루션"></meta>
      <meta name="description" content="아이피스, CM, ERP, MES, QMS, WMS, 공정 시각화, 스마트공방, 스마트공장, SaaS, 실시간 생산, 모니터링"></meta>
      <meta property="og:site_name" content="디케이랩"></meta>
      <meta property="og:image" content="/image/solutionIfis/ifisViz.png" />
      <meta property="og:image" content="/image/solutionIfis/solutionIfis-1.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩 솔루션 아이피스" />
    </Head>
    <div className="solutionIfis">
      <Header><h1>솔루션</h1></Header>
      <main>
          <section>
            <div>
              <Image src={solutionIfis_1} alt="아이피스"/>
            </div>
            <div>
              <p className="title">아이피스 미니 (IFIS MINI), 아이피스 프로 (IFIS PRO)</p>
              <p className="discription">엑셀만 사용하는 기초수준 공장에서도 제조 공정을 시각적으로 표현하여 단기간에 적용 가능한 "제조공정 시각화 시스템" 입니다. 제조 공정에서 생산되는 제품의 수량, 생산 속도, 불량률 등을 시각적으로 표현하여  제조 공정의 상태를 실시간으로 파악하고, 공정의 성능을 향상시키는데 도움이 되는 솔루션 입니다.</p>
            </div>
          </section>
          <section>
            <p className="subtitle">핵심 기능</p>
            <div>
              <Image src={func_1} alt="아이피스 기능" className='func-w'/>
              <Image src={func_2} alt="아이피스 기능" className='func-w'/>
              <Image src={func_3} alt="아이피스 기능" className='func-w'/>
              <Image src={func_4} alt="아이피스 기능" className='func-w'/>
              <Image src={func_5} alt="아이피스 기능" className='func-w'/>
              <Image src={func_m} alt="아이피스 기능" className='func-m'/>
            </div>
          </section>
          <section>
            <p className="subtitle">기능 구성</p>
            <div>
              <Image src={func_ifispro} alt="아이피스 프로 기능 이미지" className='func-w'/>
            </div>
          </section>
          <section>
            <p className="subtitle">공정 흐름</p>
            <div>
              {/* <Image src={flow_w} alt="공정흐름" className='flow-w'/> */}
              <Image src={flow_m} alt="공정흐름" className='flow-m'/>
              <Image src={flow_k} alt="공정흐름" className='flow-w'/>
            </div>
          </section>
          <section>
            <p className="subtitle flow-w">시스템 구성도</p>
            <div>
              <Image src={flow_all} alt="공정흐름" className='flow-w'/>
            </div>
          </section>
          <section className='ifis-viz'>
            <p className="subtitle">제조공정 시각화 화면 예시 (당사 특허 보유)</p>
            <div>
              <Image src={ifisViz} alt="제조공정 시각화"/>
              <ul>
                {/* <li>특장점</li> */}
                <li>스마트공장을 처음 도입하는 기업에 딱 맞는 <br/><span>쉽고 간편한 MES 솔루션</span></li>
                <li>제조 어플리케이션의 <span>공통 편의기능 통합</span> <br/>(SCM + ERP + MES + QMS + WMS)</li>
                <li><span>공정 시각화 특허</span> 적용, <br/>실시간 생산 진척 현황 모니터링 (직관성 극대화)</li>
                <li><span>SaaS 완성형</span> 패키지 (추가개발 불필요)</li>
              </ul>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  </>
  )
}