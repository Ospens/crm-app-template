import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { axiosInstance } from "../../../shared/api/axiosInstance"
import { toast } from 'react-toastify';
import styles from "./Register.module.css"

const RegisterPage = () => {
  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userRepeatPassword, setUserRepeatPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault()

    setErrorMessage("")
    if (userPassword === userRepeatPassword) {
      try {
        const response = await axiosInstance.post('/auth/register', {
          "email": userEmail,
          "password": userPassword,
          "first_name": userFirstName,
          "last_name": userLastName
        })
        toast.success(`${response.data.message}, please Login`)
        navigate("/login");
      }
      catch (error) {
        setErrorMessage(error.response?.data?.message || "Something Went Wrong")
        setUserPassword("")
        setUserRepeatPassword("")
        setUserFirstName("")
        setUserLastName("")
        setUserEmail("")
      }
    }
    else {
      setErrorMessage("The Passwords Don't Match");
      setUserPassword("")
      setUserRepeatPassword("")
      setUserFirstName("")
      setUserLastName("")
      setUserEmail("")
    }

  }

  return (
    <div className={styles.background}>

      <div className={styles.main}>
        <h1>Registration</h1>

        <form action="" onSubmit={register}>
          <div className={styles.inputs}>
            <div>
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
              <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                <label>First name</label> <small style={{ fontSize: "12px" }}>(Latin or Cyrillic)</small>
              </div>
              <input type="text" required value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} pattern="[ \p{Script=Latin}\p{Script=Cyrillic} ]+" />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                <label>Last name</label> <small style={{ fontSize: "12px" }}>(Latin or Cyrillic)</small>
              </div>
              <input type="text" required value={userLastName} onChange={(e) => setUserLastName(e.target.value)} pattern="[ \p{Script=Latin}\p{Script=Cyrillic} ]+" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" minLength={6} required value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            </div>
            <div>
              <label>Repeat password</label>
              <input type="password" minLength={6} required value={userRepeatPassword} onChange={(e) => setUserRepeatPassword(e.target.value)} />
            </div>
          </div>
          <div className={styles.actionsWrapper}>
            <NavLink to={"/login"}>Back</NavLink>
            <button>Sign up</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RegisterPage


// if token doesn't exists redirect to login
// if token exists, redirect to the dashboar and log him in automatically (make a private route basically)
// toast for success

// make the task which waiting for us in Telegram

// check for: if the token is expired, if it's redirect to the login again. But there is a "refresh token" in the api, check why is this thing for. We never have done anything similar





// + regex for alphabet only letters
// + regex email format 
// + read https://ospens.github.io/react-roadmap/projects/crm/ (Login and Register)
// + make register work as like login does
// + need to check is the passwords match
// + error message if they dont match
// + error message if the user alredy exists
// it's not => useRef in oder to reset the values of the inputs (if possible)
// + if error the login value should reset, othervise a person have to delete manually
// + if error => show what kind of error, othervise it's only in the console
// + if person exists => also reset, bcz why keep?
// + what if account doesnt exist? => "Invalid Credentials", will be shown on both (for the security reasons) when someone entered a wrong password and when user entered an email which doesnt exists. Othervise people can guess "aha this user exists let me try a bunch of passwords"
// + redirect to the dashboard
// + make @media(when height is 600px){the registration popu changes, othervise it doesn't look nice}
// later => refactor using react-hook-form

// accounts i have created
// sanjarkama26@gmail.com sanjar2006
// sanjark@gmail.com sanjar2006