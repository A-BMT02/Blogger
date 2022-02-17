import React , { useEffect, useRef , useState , useContext} from 'react'
import { Logo } from './Logo' ; 
// import "./Login.css" ; 
import { Link ,  useNavigate } from "react-router-dom" ; 
import Login from './Login';
import { auth } from "./firebase" ; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./Signup.css" ;
import { CardContext } from './Context';
import { onAuthStateChanged } from "firebase/auth" ;


export function Signup() {
    // const [ setUser ] = useContext(CardContext) ; 
    const  user = useContext(CardContext) ;
    

    const emailRef = useRef(null) ; 
    const passwordRef = useRef(null) ;
    const password2Ref = useRef(null) ;
    const errorRef = useRef("") ; 

    const [email , setEmail] = useState("") ; 
    const [ password , setPassword ] = useState("") ;
    const [ password2 , setPassword2] = useState("") ;
    const [ error , setError ] = useState("") ;
    const [ errorAnimate , setErrorAnimate] = useState(false) ;  

    const navigate = useNavigate() ; 
    const emailFocus = () => {
        const email = emailRef.current ; 
        email.style.top = "-40%" ; 
        resetError() ;

    }

    const passwordFocus = () => {
        const password = passwordRef.current ;
        password.style.top = "-30%" ; 
        resetError()
    }

    const password2Focus = () => {
        const password2 = password2Ref.current ;
        password2.style.top = "-30%" ; 
        resetError()
    }

    const emailBlur = (e) => {
        const email = emailRef.current ; 
        if(!e.target.value ) {
        email.style.top ="30%" ;   
        } else {
            email.style.top = "-40%" ; 
        }
    }

    const passwordBlur =(e) => {
        const password = passwordRef.current ; 
        if(!e.target.value ) {
        password.style.top ="30%" ;   
        } else {
            password.style.top = "-40%" ; 
        }
    }

    const password2Blur =(e) => {
        const password2 = password2Ref.current ; 
        if(!e.target.value ) {
        password2.style.top ="30%" ;   
        } else {
            password2.style.top = "-40%" ; 
        }
    }

    const resetError = () => {
        setError("") ; 
        setErrorAnimate(false)
    }
    const signup = (e) => {
        if(!error) {
            setErrorAnimate(false) ;
        } 
        e.preventDefault() ; 
        if( password ===  password2) {
            createUserWithEmailAndPassword(auth , email , password)
        .then(User => {
            console.log(User.user)
            setError("") ;
            setErrorAnimate(false) ; 
        })
        .catch(err => {
            const errMsg = err.message
            setError(errMsg) ; 
            setErrorAnimate(true) ; 
            console.log(errMsg) ;

        })
        } else {
            setError("Passwords do not match") ;
            setErrorAnimate(true) ; 

        }
        
        
    }
      
    useEffect(() => {
        if(user) {
            console.log("user is" , user)
            navigate("/") ; 
        } else {
            console.log("no user") ;

        }
    } , [user])


  return (
    <div className='wholeLogin'>
        <div ref={errorRef} className={errorAnimate ? "errorAnimate" : "removeErrorAnimate"}>
            <h2>{error}</h2>
        </div>
        <form className="loginContainer"  autoComplete="off" onSubmit={e => signup(e)}>
            <div className="loginLogo">
                <Logo className="logo"/>
            </div>

            <div className="inputContainer">
                <div className="emailContainer">
                    <div ref={emailRef} className="emailText" >
                        <p>Email</p>
                    </div>

                    <div className="email">
                        <input value ={email} type="text" onFocus={e => emailFocus()} onBlur={e => emailBlur(e)} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="passwordContainer">
                    <div ref={passwordRef} className="passwordText" >
                        <p>Password</p>
                    </div>
                    <div className="password">
                        <input value={password} type="password" onFocus={e => passwordFocus()} onBlur={e => passwordBlur(e)} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div className="passwordContainer">
                    <div ref={password2Ref} className="passwordText" >
                        <p>Password</p>
                    </div>
                    <div className="password">
                        <input value={password2} type="password" onFocus={e => password2Focus()} onBlur={e => password2Blur(e)} onChange={e => setPassword2(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="loginBtnContainer">
                <button type="submit" type="submit">SIGNUP</button>
            </div>

            <div className="dontHave">
                <p>Already have an account ? <Link to="/login" style={{textDecoration : "none"}, {cursor : "pointer"}}>Log In</Link></p>
            </div>
        </form>
    </div>
  )
}
