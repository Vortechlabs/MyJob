import React from 'react'
import { Footer } from "flowbite-react";
import logo from '../assets/logo.svg'

function FooterSection() {
  return (
      <div className='mt-20'>
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src={logo}
            alt="MyJob Logo"
            name="MyJob"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="MyJob" year={2022} />
      </div>
    </Footer>
    </div>
  )
}

export default FooterSection