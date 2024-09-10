import React from 'react'

function Footer() {
    return (
        <div id='footer'>
            <footer className='row'>
                <div className="footer col-md-6 col-lg-3">
                    <img src="/Colorlib//logo2_footer.png" alt="" />
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At  maxime nemo! Delectus ipsa commodi ...</p>
                </div>
                <div className="footer col-md-6 col-lg-3">
                    <h2>Quick Links</h2>
                    <span>About</span><br />
                    <span>Offer & Discount</span><br />
                    <span>Get Coupon</span><br />
                    <span>Contact us</span>
                </div>
                <div className="footer col-md-6 col-lg-3">
                    <h2>New Product</h2>
                    <span>Woman Cloth</span><br />
                    <span>Fashion Accessories</span><br />
                    <span>Man Accessories</span><br />
                    <span>Rubber made Toys</span>
                </div>
                <div className="footer col-md-6 col-lg-3">
                    <h2>Support</h2>
                    <span>Frequently Asked Questions</span><br />
                    <span>Terms & Conditions</span><br />
                    <span>Privacy Policy</span><br />
                    <span>Report a Payment Issue</span> <br /><br />
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-facebook ms-3"></i>
                    <i className="bi bi-behance ms-3"></i>
                    <i className="bi bi-globe ms-3"></i>
                </div>
            </footer>
        </div>
    )
}

export default Footer