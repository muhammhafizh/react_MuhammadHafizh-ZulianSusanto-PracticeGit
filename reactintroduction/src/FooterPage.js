import React from 'react'
import logoBawah from './img/logo-ALTA-v2.png'
import facebook from './img/ic_fb@2x.png'
import twitter from './img/ic-twitter@2x.png'
import instagram from './img/ic-instagram@2x.png'
import linkedin from './img/ic-linkedin@2x.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
        <div className="row pt-5 pb-5">
            <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                <a href="index.html">
                    <img className="logo-bawah" src={logoBawah} />
                </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                    <h6>Social Media:</h6>
                    <a href="https://www.facebook.com/AlterraAcademy">
                        <img className="logo-sosmed" src={facebook} />
                    </a>        
                    <a href="https://twitter.com/">
                        <img className="logo-sosmed" src={twitter} />
                    </a>    
                    <a href="https://www.instagram.com/alterra.academy/">
                        <img className="logo-sosmed" src={instagram} />
                    </a>          
                    <a href="https://id.linkedin.com/">
                        <img className="logo-sosmed" src={linkedin} />
                    </a>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                <h6 className="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer