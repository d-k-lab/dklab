import { Inter } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/header'
import Footer from '@/components/footer'

import smartFactory_w from '@/public/image/index/smartFactory_w.png'
import smartFactory_m from '@/public/image/index/smartFactory_m.png'
import smartFactory_banner from '@/public/image/index/banner.png'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DKLAB - 디케이랩</title>
      </Head>
      <div className='index'>
        <Header />
        <main>
            <div className='img-m'>
              <Image src={smartFactory_m} alt="DKLAB Logo"/>
              <Image src={smartFactory_banner} alt="banner" className='banner'/>
            </div>
            <div>
              <p>Data<br /> Knowledge<br /> Laboratory</p>
              <p>DKLab(디케이랩)은 스마트 공방, 스마트 공장 진단 및 구축 컨설팅과 제조 솔루션 개발 및 공급, 프로세스 분석 및 개선 등 연구개발을 통해 최적의 솔루션을 공급하는 기업입니다.</p>
              <Link href='/smartFactory' className='smartFactory-btn'>
                2023 스마트 공방 바로가기
              </Link>
            </div>
            <div className='img-w'>
              <Image src={smartFactory_w} alt="스마트팩토리 이미지"/>
              <Image src={smartFactory_banner} alt="banner" className='banner'/>
              <p className='contact'>
                문의<br />
                070-4354-0782<br />
                contact@dklab.kr
              </p>
            </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
