import React , { useRef , useState , useContext , useEffect } from 'react'
import { Logo } from './Logo' ; 
import "./Login.css" ; 
import { Link , useNavigate } from "react-router-dom" ; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase" ; 
import { CardContext } from './Context';
import { onAuthStateChanged } from "firebase/auth" ;


export default function Login() {

    const emailRef = useRef(null) ; 
    const passwordRef = useRef(null) ;

    const [email , setEmail] = useState("") ; 
    const [ password , setPassword ] = useState("") ;
     const [ error , setError ] = useState("") ;
    const [ errorAnimate , setErrorAnimate] = useState(false) ;  
    const  user  = useContext(CardContext) ;
    // const [ setUser ] = useContext(CardContext) ; 

      const navigate = useNavigate() ; 


    const errorRef = useRef("") ; 

    const emailFocus = () => {
        const email = emailRef.current ; 
        email.style.top = "-40%" ; 
        resetError()

    }

    const passwordFocus = () => {
        const password = passwordRef.current ;
        password.style.top = "-30%" ; 
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

    const login = (e) => {
        if(!error) {
            setErrorAnimate(false) ;
        }
        e.preventDefault() ; 
         
        signInWithEmailAndPassword(auth , email , password)
        .then(response => {
            console.log(response.user)
            // setUser(response.user) ;
            setError("") ;
            setErrorAnimate(false) ; 
        }) 
        .catch(err => {
            const errMsg = err.message
            setError(errMsg) ; 
            setErrorAnimate(true) ; 
            console.log(err) ;
        })
    }

    const resetError = () => {
        setError("") ; 
        setErrorAnimate(false)
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

        <form className="loginContainer"  autoComplete="off" onSubmit={e => login(e)}>
            <div className="loginLogo">
                <Logo className="logo"/>
            </div>

            <div className="inputContainer">
                <div className="emailContainer">
                    <div ref={emailRef} className="emailText" >
                        <p>Email</p>
                    </div>

                    <div className="email">
                        <input type="text" onFocus={e => emailFocus()} onBlur={e => emailBlur(e)} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="passwordContainer">
                    <div ref={passwordRef} className="passwordText" >
                        <p>Password</p>
                    </div>
                    <div className="password">
                        <input type="password" onFocus={e => passwordFocus()} onBlur={e => passwordBlur(e)} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="loginBtnContainer">
                <button type="submit">LOGIN</button>
            </div>

            <div className="dontHave">
                <p>Don't have an account ? <Link to="/signup" style={{textDecoration : "none"}, {cursor : "pointer"}}>Sign up</Link></p>
            </div>
        </form>
    </div>
  )
}
