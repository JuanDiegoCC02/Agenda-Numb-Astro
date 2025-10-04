import React from 'react'
import insta from '../imagenes/insta.png'
import facebook from '../imagenes/facebook.png'
import youtube from '../imagenes/youtube.png'
import email from '../imagenes/email.png'
import "../styles/FooterPage.css"

function FooterPage() {
  return (
    <div>

    <div className='container_AllFooter'>
     

         <div>
            <a href="/contact">Contact us</a>
        </div>

        <div>
            <a href="">Services/Policies</a>
        </div>



        <div>
            <a href="">2025 Numb Astro / All rights reserved.</a>
        </div>
        
        


   <div className='container_Networks'>
            <a className='link_Network'  href="www,instagram.com"> <img src={insta} alt="" style={{ width: '30px' }} /></a>
        </div>

         <div className='container_Networks'>
            <a className='link_Network' href="" ><img src={facebook} alt="" style={{ width: '30px' }} /></a>
        </div>

         <div className='container_Networks'>
            <a className='link_Network' href=""><img src={email} alt="" style={{ width: '30px' }} /></a>
        </div>

         <div className='container_Networks'>
            <a className='link_Network' href=""><img src={youtube} alt="" style={{ width: '30px' }} /></a>
        </div>

    </div>

    </div>
  )
}

export default FooterPage