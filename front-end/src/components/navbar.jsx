import { Link } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import SignIn from '../pages/signIn'
import SignUp from '../pages/SignUp'


const navbar = () => {
  return (

    <div className='flex justify-between items-center'>
       {/* <p>Home</p> */}
       <SignUp/>
       {/* <p>SignUp</p> */}
    </div>
  )
}

export default navbar