import React from 'react'

import "./FooterMultiColumn.scss"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export const FooterMultiColumn = () => {
  return (
    <div className='footer-wrapper'>
     <div className="footer__inner">
     <div className="footer-columns">
           <h4>Abstract</h4>
           <Link>Branches</Link>
       </div>
       <div className="footer-columns">
           <h4>Resources</h4>
           <Link>Blog</Link>
           <Link>Help Center</Link>
           <Link>Release Notes</Link>
           <Link>Status</Link>
       </div>
       <div className="footer-columns">
           <h4>Community</h4>
           <Link>Twitter</Link>
           <Link>LinkedIn</Link>
           <Link>Facebook</Link>
           <Link>Dribble</Link>
           <Link>Podcast</Link>
       </div>
       <div className="footer-columns">
           <h4>Company</h4>
           <Link>About Us</Link>
           <Link>Careers</Link>
           <Link>Legal</Link>
           <div className="contact">
            <h4>Contact Us</h4>
            <Link>info@abstract.com</Link>
           </div>
       </div>
       <div className="footer-columns copyright">
       <Icon icon="simple-icons:abstract" />
         <div>&copy; Copyright 2023</div>
         <div>Abstract Studio Design, Inc.</div>
         <div>All rights reserved.</div>
       </div>
     </div>
    </div>
  )
}
