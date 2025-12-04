import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';


const Footer = () => {


    return (
        <div>
            <footer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-6 gap-6 sm:gap-8 footer bg-[#FFF0E1] text-base-content rounded px-16 py-10 
             ">
                <nav className='col-span-2 md:col-span-2 flex md:flex-col'>
                    <Link to='/'> <img className="w-[100px] h-10 btn-ghost text-xl" src="https://images.squarespace-cdn.com/content/v1/6594040f3b38c97cdafab8d3/969658bd-5410-4fae-a5dc-5076eca40fd0/GreeNest+Logo+%28h%29.png" alt="" /></Link>
                    <p>
                        Your trusted this place for authentic local 
                         plants. Discover the plants from across
                          Bangladesh.
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/plants' className="link link-hover">Plants</Link>
                    <Link to='/login' className="link link-hover">Login</Link>
                    <Link to='/register' className="link link-hover">Register</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Multimedia</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex items-center gap-1'>
                        <FaSquareXTwitter />
                        <a className="link link-hover">Twitter</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaInstagramSquare />
                        <a className="link link-hover">Instagram</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaFacebook />
                        <a className="link link-hover">Facebook</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaGithub />
                        <a className="link link-hover">GitHub</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact & Support</h6>
                    <a className="link link-hover">support@Smartdeals.com</a>
                    <a className="link link-hover">+880 123 456 789</a>
                    <a className="link link-hover">123 Commerce Street, Dhaka, Bangladesh</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal text-center bg-[#FFF0E1] text-base-content justify-center items-center p-4">
                <p>“© {new Date().getFullYear()} GreenNest. All rights reserved.”</p>
            </footer>
        </div>
    );
};

export default Footer;
