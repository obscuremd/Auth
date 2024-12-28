import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useClerk } from "@clerk/clerk-react";

interface UserProps {
    userData: User |  undefined
    loading: boolean
    Create: (props: CreateProps)=> Promise<void>
}

interface CreateProps {
    formData:{
        username: string,
        full_name: string,
        email: string,
        phone_number: string,
        residential_address: string,
    }
  }

const UserContext = createContext<UserProps | undefined>(undefined)

export default function UserProvider ({children}:PropsWithChildren){

    const {user} = useClerk()

    const [userData, setUserData] = useState<User>()
    const [loading, setLoading] = useState(false)

    const url = 'https://pinoy-sever.vercel.app'

    useEffect(()=>{

        const fetchUser =async()=>{
            setLoading(true)
            try {
                const res = await axios.get(`${url}/user/email/${user?.emailAddresses[0].emailAddress}`)
                setUserData(res.data)
                console.log(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            
        }

        fetchUser()
    },[])

    const Create =async({formData}:CreateProps)=>{
        setLoading(true)
        try {
          const res = await axios.post(`${url}/user/register`,formData)
          console.log(res.data )
          setLoading(false)
          window.location.reload()
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }

    return(
        <UserContext.Provider value={{userData, loading, Create}}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDBUser = ():UserProps=>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error('must be wrapped within user Context')
    }else{
        return context
    }
}