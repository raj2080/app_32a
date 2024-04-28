//rafce -----> type it ..........> react arrow function

import React, { useState } from 'react';

const Registerpage = () => {

  // useState

  //logic section




  //make a useState for 5 fields

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')





  // Use State for Error Message

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmpasswordError, setConfirmPasswordError] = useState('')







  // OnChange

  // make a each function for changing the value

  //e for event such as typing in the text field, a default parameter of handleFirstname parameter

  const handleFirstname = (e) => {
    setFirstName(e.target.value)

  }

  // make each function then use onchange on each input 
  const handleLastname = (e) => {
    setLastName(e.target.value)

  }


  const handleEmail = (e) => {
    setEmail(e.target.value)

  }


  const handlePassword = (e) => {
    setPassword(e.target.value)

  }


  const handleConfirmpassword = (e) => {
    setConfirmPassword(e.target.value)

  }



  //preventDefault ----> preventing event from getting refreshed in zero second
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password, confirmpassword)
  }









  return (
    <>

      <div className='container mt-2'>
        <h1> Create an Account! </h1>



        <form className='w-50'>

          <label> FirstName : {firstName} </label>
          <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your Firstname' />

          <label className='mt-2'> SecondName</label>
          <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your Lastname' />

          <label className='mt-2'>  Email </label>
          <input onChange={handleEmail} type="text" className='form-control' placeholder='Enter your Email' />

          <label className='mt-2'> Password</label>
          <input onChange={handlePassword} type="text" className='form-control' placeholder='Enter your Password' />

          <label className='mt-2'>  Confirm Password</label>
          <input onChange={handleConfirmpassword} type="text" className='form-control' placeholder=' Confirm your password' />

          <button onClick={handleSubmit} className='btn btn-dark mt-2 w-100'>Create an Account</button>

        </form>

      </div>
    </>
  )
}

export default Registerpage;


//step 1: Make complete UI of Register page (fields, buttons etc)

//step 2: useState

// step 3 ; onchange on each input