import { Apple, Google, Lock, User } from "iconoir-react"
import { Button, Input, Logo, Text } from '../Exports/Exports';
import { useAuth } from "../Providers/AuthProvider";
import { useState } from "react";
import { lineWobble } from 'ldrs'

  lineWobble.register()


const Auth = () => {

  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const [code, setCode] = useState('')

  const [loading , setLoading] = useState(false)
  const [verification, setVerification] = useState(false)
  const [ verificationButton, setVerificationButton] = useState(0)

  const {Login, Register, RegisterVerification, LoginVerification} = useAuth()

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-7 w-[30vw]">
        <img src={Logo} alt="" className="w-10"/>
        <div className="flex flex-col gap-2">
          <Text text="Pinoy: Tracking Simplified" fontSize="h5" fontWeight="bold"/>
          <Text text="Choose one of the options to get started" fontSize="t2" />
        </div>
       { verification
        ?
          // verification
          <>
            <Input InputFunction={(e)=>setCode(e.target.value)} stretch placeholder="password" outside_icon={false} inside_icon={<Lock/>} />
            <div className="flex items-center gap-3">
              <Text no_wrap text="Didn't get code ??"/>
              <Button text="Go Back" onclick={()=>setVerification(false)} color="text"  size="sm"  rounded="full"/>
              <hr className="w-full" />
            </div>
            <div className="flex gap-5">
              {loading
              ?<l-line-wobble size="80" stroke="5" bg-opacity="0.1" speed="1.75" color="white" />
              :<>
                <Button 
                  text="Verify Otp" 
                  onclick={()=>(verificationButton === 0 ? RegisterVerification({code, setLoading}) : LoginVerification({code, setLoading}))} 
                  color="primary"  
                  size="md" 
                  rounded="full"/>
              </>
              }
              </div>
            </>
          :
          // inputs
          <>
            <Input InputFunction={(e)=>setEmail(e.target.value)} stretch placeholder="email" outside_icon={false} inside_icon={<User/>} />
            <Input InputFunction={(e)=>setPassword(e.target.value)} stretch placeholder="password" outside_icon={false} inside_icon={<Lock/>} />
            <div className="flex items-center gap-3">
              <Text no_wrap text="or continue in with"/>
              <hr className="w-full" />
            </div>
            <div className="flex gap-5">
              <Button icon_left={<Google/>} color="text" outline  size="sm" rounded="medium"/>
              <Button icon_left={<Apple/>} color="text"  outline size="sm" rounded="medium"/>
              <Button icon_left={<Google/>} color="text" outline  size="sm" rounded="medium"/>
            </div>
            <div className="flex gap-5">
              {loading
              ?<l-line-wobble size="80" stroke="5" bg-opacity="0.1" speed="1.75" color="white" />
              :<>
                <Button text="Login" onclick={()=>Login({email, password, setLoading, setVerification, setVerificationButton})} color="primary"  size="md" rounded="full"/>
                <Button text="Sign Up" onclick={()=>Register({email, password, setLoading, setVerification, setVerificationButton})} color="text" outline  size="md" rounded="full"/>
              </>
              }
            </div>
        </>
        }        
        
      </div>
    </div>
  )
}

export default Auth