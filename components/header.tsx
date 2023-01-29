import { useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo_dklabLogoBlack from "@/public/image/logo/dklab-logo-black.svg"
import i_kakao from "@/public/image/icon/kakao.png"
import i_close from "@/public/image/icon/close.svg"
import i_gnb from "@/public/image/icon/gnb.svg"

export default function Header({children}:any) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e:any) => {
    setIsActive(current => !current);
  };
  const menuData=[
    {id: '1', ko: '스마트팩토리', en: 'smartFactory', path: '/smartFactory'},
    {id: '2', ko: '솔루션', en: 'solutionIfis', path: '/solutionIfis'},
    {id: '3', ko: '구축실적', en: 'smartFactory', path: '/vendor/smartStudio',
                  snb1: '스마트 공방', snb1path: '/vendor/smartStudio',
                  snb2: '스마트 공장', snb2path: '/vendor/smartFactory',
                  },
    {id: '4', ko: '회사소개', en: 'company', path: '/company'},
  ]
  const router = useRouter();
  return (
    <header>
      <Link href='/'><Image src={logo_dklabLogoBlack} alt="DKLAB Logo" /></Link>
      <div className="gnb">
        <div className="gnb-name">{children}</div>
        <button className="gnb-btn" onClick={handleClick}>
          <Image src={i_gnb} alt="close"/>
        </button>
        <nav>
          <ul className={`${isActive ? 'modal' : 'gnb-w'}`}>
            <button className="gnb-m" onClick={()=>{setIsActive(false);}}>
              <Image src={i_close} alt="close"/>
            </button>
            {menuData.map((menu)=>{
              return(
                <li key={menu.id}>
                  <Link href={menu.path} style={{color: menu.path === router.pathname ? 'var(--color-8)' : 'var(--color-7)'}}>
                    {menu.ko}
                  </Link>
                    <div className='snb'>
                      <Link href={`${menu.snb1path}`} style={{color: menu.snb1path === router.pathname ? 'var(--color-8)' : 'var(--color-7)'}}>{menu.snb1}</Link>
                      <Link href={`${menu.snb2path}`} style={{color: menu.snb2path === router.pathname ? 'var(--color-8)' : 'var(--color-7)'}}>{menu.snb2}</Link>
                    </div>
                </li>
              )
            })}
          </ul>
        </nav>
        <Link href='/'><Image src={i_kakao} alt="kakao" /></Link>
      </div>
    </header>
  )
}