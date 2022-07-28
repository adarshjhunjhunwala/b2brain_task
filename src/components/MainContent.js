import React from 'react'
import hero_img from '../assets/images/hero_img.svg'
import trusted_by from '../assets/images/trusted_by.svg'
import customers from '../assets/images/customers.svg'
const MainContent = () => {
  return (
    <div className="main-content">
    <img src={hero_img} alt="hero_img" />
    <img src={trusted_by} alt="trusted_by" />
    <img src={customers} alt="customers" />
    </div>
  )
}

export default MainContent