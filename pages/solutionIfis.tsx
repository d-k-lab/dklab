import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import solutionIfis_1 from '@/public/image/solutionIfis/solutionIfis-1.png';
import func_1 from '@/public/image/solutionIfis/func-1.png';
import func_2 from '@/public/image/solutionIfis/func-2.png';
import func_3 from '@/public/image/solutionIfis/func-3.png';
import func_4 from '@/public/image/solutionIfis/func-4.png';
import func_5 from '@/public/image/solutionIfis/func-5.png';
import func_m from '@/public/image/solutionIfis/func-m.png';

import flow_w from '@/public/image/solutionIfis/flow-w.png';
import flow_m from '@/public/image/solutionIfis/flow-m.png';
import ifisViz from '@/public/image/solutionIfis/ifisViz.png';
import Head from 'next/head';

export default function SolutionIfis() {
  return (
    <>
    <Head>
      <title>DKLAB - 솔루션</title>
      <meta property="og:image" content="../public/image/solutionIfis/ifisViz.png" />
      <meta property="og:image" content="../public/image/solutionIfis/solutionIfis-1.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩 솔루션 아이피스" />
    </Head>
    <div className="solutionIfis">
      <Header><h1>솔루션</h1></Header>
      <main>
          <section>
            <div>
              <Image src={solutionIfis_1} alt="아이피스 미니"/>
            </div>
            <div>
              <p className="title">아이피스 미니 (IFIS MINI)</p>
              <p className="discription">엑셀만 사용하는 기초수준 공장에서도 제조 공정을 시각적으로 표현하여 단기간에 적용 가능한 "제조공정 시각화 시스템" 입니다. 제조 공정에서 생산되는 제품의 수량, 생산 속도, 불량률 등을 시각적으로 표현하여  제조 공정의 상태를 실시간으로 파악하고, 공정의 성능을 향상시키는데 도움이 되는 솔루션 입니다.</p>
            </div>
          </section>
          <section>
            <p className="subtitle">기능</p>
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
            <p className="subtitle">공정흐름</p>
            <div>
              <Image src={flow_w} alt="공정흐름" className='flow-w'/>
              <Image src={flow_m} alt="공정흐름" className='flow-m'/>
            </div>
          </section>
          <section>
            <p className="subtitle">제조공정 시각화 화면 예시 (당사 특허 보유)</p>
            <div>
              <ul>
                <li>특장점</li>
                <li>1. 사용이 쉽고, 간편하고 직관적, 공장시각화 특허 보유</li>
                <li>2. 대외적으로 인정받은 사례 (창원지원, 후속지원 등)</li>
                <li>3. 성균관대학교 스마트 팩토리 융합학과 창업</li>
                <li>4. 삼성 및 시스코 경력의 혁신 및 설계 전문 역량 보유</li>
              </ul>
              <Image src={ifisViz} alt="제조공정 시각화"/>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  </>
  )
}