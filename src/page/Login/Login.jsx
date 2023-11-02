import React from 'react'

import "./Login.scss"
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='Login-wrapper'>
      <div className="Login__inner">
      <form action="">
         <label htmlFor="">
            Email
         </label>
         <div className="form-group">
         <Icon icon="ic:outline-email" />
            <input
            id='email'
            type="email" 
            placeholder='Enter your email'
            />
         <span className="input-error">
               Not a valid email
        </span>
         </div>
         <label htmlFor="">
            Password
         </label>
         <div className="form-group">
         <Icon icon="akar-icons:lock-on" />
            <input type="password" 
            id='password'
            typeof='password'
            placeholder='Enter your password'
            pattern="[a-z0-9]{8,}"
            maxLength={8}
            />
         <span className="input-error">
               Digits or letters, min 8 character
         </span>
         </div>
         <div className="form-buttom">
         <div className="rmbr-checkbox">
            <input type="radio" />
            Remember 
         </div>
         <Link>Forgot password?</Link>
         </div>
         <div className="login">
         <button type='submit'>Sign In</button>
         <span>Dont have an account <Link>Create Tickect</Link></span>
         <div>or with</div>
         </div>
         <div className="login-Option">
            <button>
            <Icon icon="flat-color-icons:google" />
               Google
            </button>
            <button>
            <Icon icon="logos:apple" />
               Apple
            </button>
         </div>
      </form>
      </div>
    </div>
  )
}




