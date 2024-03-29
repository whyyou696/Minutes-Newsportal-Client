import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return <>
  <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <aside>
    <img src={logo} alt="logo" width={70} height={70}/>
    <p className="footer-title">Minutes Newsportal<br/>Copyright © 2024 - All right reserved</p>
  </aside> 
</footer>
</>;
}
