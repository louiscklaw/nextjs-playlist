import React,{useContext} from 'react';
import { useRouter } from 'next/router'
// import { say } from '../../lang';
import {LangContext} from '../../context/LangContext';


function langIndex({lang}){
  console.log(lang);
  const {say} = useContext(LangContext)
  return(
    <>
      {say(lang,'helloworld')}
    </>
  )
}

export async function getServerSideProps(context){
  console.log(context.query)
  return {
    props: context.query
  }
}

export default langIndex