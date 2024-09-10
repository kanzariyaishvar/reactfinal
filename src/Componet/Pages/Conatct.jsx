import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'


function Conatct() {

  return (
    <>
      <Header />
      <div id='ConatctHeader'>
        <h1>Contact Us</h1>
      </div>

      <div id='ConatctSection' >
        <div id="ConactParent">
          <div className='ConatctChid1 p-5'>
            <h3 className='text-start'>Get In Touch</h3>
            <form action="" className='text-start'>
              <textarea name="" id="" rows="6" placeholder='Enter Message...' className='form-control'></textarea><br />
              <input type="text" placeholder='Enter Your Name..' className='ContactInput rounded'/>
              <input type="text" placeholder='Enter Your Email..' className='ContactInput rounded ms-2'/><br />
              <input type="text" placeholder='Enter Subject..' className='form-control'/><br />
              <button className='btn bg-primary fs-5 text-light'>SEND</button>
            </form>
          </div>
          <div className='ConatctChid2'>
                <img src="Colorlib//laptop.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Conatct