import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState(false);
  const [modal, setModal] = useState(false);
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
    if (res.status === 201) {
      setModal(true);
      console.log('상담 신청 완료!', { type: 'success' });
    } else {
      console.log('폼 에러', { type: 'error' });
    }
  };
  const onModal = () => {
    return (
      <>
        <div className="modal">
          <div>
            <p>{name} 님의</p>
            <p>상담이 접수되었습니다.</p>
            <button onClick={() => location.reload()}>닫기</button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='btn-form'>
        <button onClick={smartForm}>스마트 공방 정부지원사업 신청 버튼</button>
      </div>
      {form
        ? (
          <form onSubmit={submitForm}>
            <input type="hidden" name="dklab-form" value="contact" />
            <p>스마트공방 상담 신청 양식</p>
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
                개인정보에 동의합니다.
              </label>
                <span></span>
              {agree
                ? null
                : <button type='submit' onClick={onModal}>신청</button>
              }
            </div>
            {modal ? onModal() : null}
          </form>
          )
        : null
      }
    </>
  )
}