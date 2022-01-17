import React from 'react'
import "./Footer.css"
import {Button} from './Button';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                    Join the adventure newsletter to receive updates
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <form action="">
                    <input type="email" placeholder="Your email" className='footer-input' name='email'/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <div className='footer-social'>
                <Link to='/'><i className="fab fa-facebook"></i></Link>
                <Link to='/'><i className="fab fa-instagram"></i></Link>
                <Link to='/'><i className="fab fa-twitter"></i></Link>
                <Link to='/'><i className="fab fa-youtube"></i></Link>
            </div>
        </div>
    )
}

export default Footer
