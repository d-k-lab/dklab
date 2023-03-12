import Image from 'next/image';

import Footer from "@/components/footer";
import Header from "@/components/header";

import vendor_s from '@/public/image/vendor/smart-s.png';
import vendor_s_map from '@/public/image/vendor/smart-s-map.png';
import vendor_s_icon from '@/public/image/vendor/smart-s-icon.png';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function SmartStudio() {
  const [form, setForm] = useState(false);
  const [agree, setAgree] = useState(true);

  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [employ, setEmploy] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agreeDate, setagreeDate] = useState(new Date());
  
  // 신청하기 버튼 클릭
  const smartForm = () => {
    setForm(true);
    console.log('Smart Studio form');
  }
  // 동의하기 버튼 클릭
  const agreeBtn = (e:any) => {
    setAgree((prev) => !prev);
    setagreeDate(new Date());
  }
  // 인풋 텍스트
  const handleCompany = (e:any) => {setCompany(e.target.value);}
  const handleCategory = (e:any) => {setCategory(e.target.value);}
  const handleEmploy = (e:any) => {setEmploy(e.target.value);}
  const handleName = (e:any) => setName(e.target.value);
  const handlePhone = (e:any) => {setPhone(e.target.value);}
  const handleEmail = (e:any) => {setEmail(e.target.value);}

  const submitForm = async (e:any) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_PATH}`, {
      method: 'POST',
      body: JSON.stringify({
        company,
        category,
        employ,
        name,
        phone,
        email,
        agreeDate: agreeDate.getTime()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res)
    // console.log(`${process.env.DEPLOY_PATH}`)
    // Success if status code is 201
    if (res.status === 201) {
      console.log('상담 신청 완료!', { type: 'success' });
      // alert('상담 신청 접수 되었습니다.');
    } else {
      console.log('폼 에러', { type: 'error' });
    }
  };

  return (
    <>
    <Head>
      <title>DKLAB - 구축실적</title>
      <meta name="title" content="2023년 스마트공방 기술보급 사업 신청"></meta>
      <meta name="description" content="2023년 스마트공방 기술보급 사업 신청, 아이피스, CM, ERP, MES, QMS, WMS, 공정 시각화, 스마트공방, 스마트공장, SaaS, 실시간 생산, 모니터링"></meta>
      <meta property="og:site_name" content="디케이랩"></meta>
      <meta property="og:image" content="./image/vendor/smart-s.png" />
      <meta property="og:image" content="./image/vendor/smart-s-map.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content="DKLAB 디케이랩 스마트공방 구축실적" />
    </Head>
    <div className='smartProduct'>
      <Header><h1>스마트공방</h1></Header>
      <main>
        <section>
          <div>
            <Image src={vendor_s_icon} alt='스마트공방'/>
          </div>
          <div>
            <p className='title'>스마트 공방이란</p>
            <p className='discription'>‘스마트공방’은 소공인(10인 미만 제조업)이 스마트기술(IoT, AI 등)을 도입해 수작업 위주의 제조공정을 개선(부분 자동화, 생산관리시스템 도입 등)하고 생산성과 품질 향상하도록 지원하는 사업입니다.</p>
          </div>
        </section>
        <section>
          <p className='subtitle'>스마트 공방</p>
          <div className='performance'>
            <div>
              <Image src={vendor_s} alt="스마트공방 실적"/>
              <button onClick={smartForm}>스마트 공방 신청하기</button>
            </div>
            <Image src={vendor_s_map} alt="스마트공방 실적"/>
          </div>
        </section>
        <section>
          {form
            ? (
              <form onSubmit={submitForm}>
                <input type="hidden" name="dklab-form" value="contact" />
                <p>스마트공방 상담 신청</p>
                <label>기업명       <input type='text'  id='company' name='company' value={company} onChange={handleCompany} required></input></label>
                <label>업종 및 업태  <input type='text' id='category' name='category'  value={category} onChange={handleCategory} required></input></label>
                <label>근로자 수     <input type='text' id='employ' name='employ'  value={employ} onChange={handleEmploy} required></input></label>
                <hr/>
                <label>담당자 이름   <input type='text' id='name' name='name' value={name} onChange={handleName} required></input></label>
                <label>담당자 연락처  <input type='text' id='phone' name='phone' value={phone} onChange={handlePhone} required></input></label>
                <label>담당자 메일주소 <input type='text' id='email' name='email' value={email} onChange={handleEmail} required></input></label>
                <div className='agree'>
                  <label htmlFor='agree'>
                    <input
                      type='checkbox' name='agree' value={agreeDate.toString()}
                      onClick={agreeBtn}
                      />
                    개인정보 동의합니다.
                  </label>
                    <span></span>
                  {agree
                    ? null
                    : <button type='submit'>신청</button>
                  }
                </div>
              </form>
              )
            : null
          }
        </section>
      </main>
      <Footer />
    </div>
  </>
  )
}