import React from 'react'
import Title from '../components/Title'
import Image from '../components/Image'
import Skills from '../components/Skills'
import Meta from '../components/Meta'

const AboutPage = () => {
  return (
    <>
    <Meta title={'About Me'}/>
    <div className='about-page'>
      <Title title={`About Me`} span={`About Me`} />
      <Image />
        <Title title={`Skills`} span={`Skills`} />
      <Skills />
    </div>
    </>
  )
}

export default AboutPage
