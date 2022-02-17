import React , { createContext , useState , useEffect  } from "react" ; 
import { auth } from "./firebase" ; 
import { onAuthStateChanged  } from "firebase/auth";

 export const data = [
    {
      id : 0 , 
      key :  0 , 
   img : "https://images.pexels.com/photos/9024609/pexels-photo-9024609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , 
   header : "EDITOR'S CHOICE" , 
   title : "News Needs to Meet Its Audiences Where They Are" , 
   sneak : "t wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been" , 
   author : "Ahamad Tahir" , 
   category : "Programming"  ,
   date : "Jun 14"   
  } , 
{
      id : 1 , 
      key :  1 , 
    img : "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,
   header : "EDITOR'S CHOICE" , 
   title : "News Needs to Meet Its Audiences Where They Are" , 
   sneak : "t wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been" , 
   author : "Ahamad Tahir" , 
   category : "Programming"  ,
   date : "Jun 14"   
  } , 
  {
      id : 2, 
      key : 2 , 
   img : "https://images.pexels.com/photos/8270932/pexels-photo-8270932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , 
   header : "EDITOR'S CHOICE" , 
   title : "News Needs to Meet Its Audiences Where They Are" , 
   sneak : "t wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been" , 
   author : "Ahamad Tahir" , 
   category : "Programming"  ,
   date : "Jun 14"   
  } , 
  {
      id : 3 ,
      key : 3 , 
   img : "https://images.pexels.com/photos/10034687/pexels-photo-10034687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , 
   header : "EDITOR'S CHOICE" , 
   title : "News Needs to Meet Its Audiences Where They Are" , 
   sneak : "t wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been" , 
   author : "Ahamad Tahir" , 
   category : "Programming"  ,
   date : "Jun 14"   
  } , 
  {
      id : 4 , 
      key :  4 , 
   img : "https://images.pexels.com/photos/8505208/pexels-photo-8505208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , 
   header : "EDITOR'S CHOICE" , 
   title : "News Needs to Meet Its Audiences Where They Are" , 
   sneak : "t wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been" , 
   author : "Ahamad Tahir" , 
   category : "Programming"  ,
   date : "Jun 14"   
  } , 
  ]  ;

export const CardContext = createContext() ; 
export const CardProvider= props => {

  const [ user , setUser] = useState() ; 
  const [ loading , setLoading] = useState(true) ;

 
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth , user => {
      if(user) {
         setUser(user) ;
        console.log(user) ;

      } else {
        console.log("no user" , user)
        console.log(user) ;
      }

      setLoading(false) ;

      return unsubscribe ;
    })
  } ,  )

    return (
        <CardContext.Provider value={ user }>
            {!loading && props.children}
        </CardContext.Provider>
    )
} ; 

