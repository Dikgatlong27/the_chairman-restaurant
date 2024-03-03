import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './Social.css'

const Social = () => {
  return (
    <div>
        <div id='social__links' className='app__contactUs-social_socialLinks flex__center'>
          <a href='#'><FaInstagram color='White' size={35} /></a>
          <a href='#'><FaFacebookF color='White' size={35} /></a>
          <a href='#'><FaTiktok color='white' size={35} /></a>
          <a href='#'><FaWhatsapp color='white' size={35} /></a>
        </div>
        <div className='app__contactUs-social_socialLinks flex__center' id='social__links-mobile'>
          <a href='#'><FaInstagram color='White' size={25} /></a>
          <a href='#'><FaFacebookF color='White' size={25} /></a>
          <a href='#'><FaTiktok color='white' size={25} /></a>
          <a href='#'><FaWhatsapp color='white' size={25} /></a>
        </div>
    </div>
  )
}

export default Social
