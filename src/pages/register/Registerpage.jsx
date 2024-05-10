//rafce -----> type it ..........> react arrow function

import React, { useState } from 'react';

const Registerpage = () => {

  // useState

  //logic section



  // usestate use garera temporary value hold garna lai variable banako
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


  // validation
  var validate = () => {

    var isValid = true;

    //validate the first name

    //.trim for removing forward and backward extra spacing
    if (firstName.trim() === '') {

      setFirstNameError("Firstname is Required!")

      isValid = false
    }

    if (lastName.trim() === '') {

      setLastNameError("Lastname is Required!")

      isValid = false
    }

    if (email.trim() === '') {

      setEmailError("Email is Required!")

      isValid = false
    }

    if (password.trim() === '') {

      setPasswordError("password is Required!")

      isValid = false
    }

    if (confirmpassword.trim() === '') {

      setConfirmPasswordError("Confirm password is required")

      isValid = false
    }

    if (confirmpassword.trim() !== password.trim()) {

      setConfirmPasswordError("password doesnot matched")

      isValid = false
    }

    return isValid;


  }


  //submit button function

  //preventDefault ----> preventing event from getting refreshed in zero second
  const handleSubmit = (e) => {
    e.preventDefault()

    //validate
    var isValidated = validate();

    if (!isValidated) {
      return
    }


    console.log(firstName, lastName, email, password, confirmpassword) // value shown in browser
  }










  return (
    <>

      <div className='container mt-2'>
        <h1> Create an Account! </h1>



        <form className='w-50'>

          <label> FirstName : {firstName} </label>
          <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your Firstname' />

          {
            firstNameError && <p className='text-danger'> {firstNameError} </p>
          }



          <label className='mt-2'> SecondName</label>
          <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your Lastname' />
          {
            lastNameError && <p className='text-danger'> {lastNameError} </p>
          }


          <label className='mt-2'>  Email </label>
          <input onChange={handleEmail} type="text" className='form-control' placeholder='Enter your Email' />
          {
            emailError && <p className='text-danger'> {emailError} </p>
          }

          <label className='mt-2'> Password</label>
          <input onChange={handlePassword} type="text" className='form-control' placeholder='Enter your Password' />
          {
            passwordError && <p className='text-danger'> {passwordError} </p>
          }

          <label className='mt-2'>  Confirm Password</label>
          <input onChange={handleConfirmpassword} type="text" className='form-control' placeholder=' Confirm your password' />
          {
            confirmpasswordError && <p className='text-danger'> {confirmpasswordError} </p>
          }

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