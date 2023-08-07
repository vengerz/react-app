import React from 'react'
import TitleComponent from '../components/TitleComponent';
import RegisterComponent from '../components/RegisterComponent';

function SignupPage() {
    const title1  = "ลงทะเบียนการใช้งาน";
  return (
    <>
    <TitleComponent data ={title1}/>
    <RegisterComponent/>
    </>
  )
}

export default SignupPage