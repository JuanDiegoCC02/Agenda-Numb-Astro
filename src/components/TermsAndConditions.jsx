import React from 'react'
import { Link } from 'react-router-dom'
import LogoNA from '../imagenes/LogoNA.png'
import  "../styles/TermsAndConditions.css"


function TermsAndConditions() {
  return (
    <div>
      <div className='container_Logo'>
            <Link to ="/">
              <img src={LogoNA} alt="logo" className='LogoNA' />
            </Link>
          </div>

        <div className='containerTitleTC'>
          <h3 className='titleTermsConditions'>Terms and Conditions</h3>
        </div>
    <div className='containerCardsTC'>
        <div className='containerInfoTerms'>
          <h4 className='titleTerms'>Terms --- Numb Astro</h4>

          <p className='textTerms'>
           -Acceptance of Terms
            By accessing or using the Numb Astro website and/or app (hereinafter, "the Platform"), you agree to be bound by these Terms and Conditions and the Privacy Policy. If you do not agree, do not use the Platform.
          </p>

          <p className='textTerms'>
           -Registration and Account
            You can use basic features without an account, but some require registration.
            You must provide truthful information and maintain the security of your account.
            You are responsible for all activity that occurs under your credentials.
          </p>

          <p className='textTerms'>
           -Intellectual Property
            The content, code, design, and visual identity of Numb Astro belong to its creators.
            You may not copy, distribute, or modify any elements without authorization.
          </p>

          <p className='textTerms'>
           -User Content
            You own the content you upload.
            You grant us a limited license to display it within the app.
            Numb Astro is not responsible for content posted by users.
          </p>

          <p className='textTerms'>
           -Termination of Service
            Numb Astro may suspend or terminate accounts for non-compliance or prolonged inactivity.
            Users may delete their account at any time.
          </p>
        </div>

        <div className='containerInfoConditions'>
          <h4 className='titleConditions'>Conditions --- Numb Astro</h4>
           <p className='textConditions'>
             -Proper Use
              You must not use the application for:
              Illegal or fraudulent activities.
              Distributing offensive, threatening, or harmful content.
              Manipulating data, scraping, or attacking system security.
          </p>

           <p className='textConditions'>
             -Limitation of Liability
              Numb Astro does not guarantee uninterrupted or error-free operation.
              Numb Astro is not responsible for data loss or indirect damages arising from its use.
          </p>

           <p className='textConditions'>
             -Privacy and Personal Data
              Data handling is governed by the Privacy Policy.
              Only the information necessary to operate the service is collected.
              You can request deletion of your data at any time.
          </p>

           <p className='textConditions'>
             -Indemnification
              You agree to hold Numb Astro harmless from any claims or damages arising from your misuse of the platform.
          </p>

           <p className='textConditions'>
             -Applicable Law
              These terms and conditions are governed by the laws of Costa Rica.
          </p>
        </div>
  </div>
    </div>
  )
}

export default TermsAndConditions