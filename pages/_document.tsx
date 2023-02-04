import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="DKLab 디케이랩" />
        <meta name="description" content="스마트공방, 스마트공장을 위한 제조공정 시각화 MES 솔루션 공급기업" />
        <link rel="canonical" href="http://dklab.kr" />
        <meta name="keywords" content="스마트공방, 스마트공장, mes, MES, 생산관리시스템, 자동화시스템, 정부지원사업" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DKLab 디케이랩" />
        <meta property="og:description" content="스마트공방, 스마트공장을 위한 제조공정 시각화 MES 솔루션 공급기업" />
        <meta property="og:url" content="http://dklab.kr" />
        <meta property="og:image" content="/image/index/logo_og_image_1200x630.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
