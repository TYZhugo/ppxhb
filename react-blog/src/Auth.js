import React , {useState ,createContext ,useContext} from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const Navigate = useNavigate();
function useAuth() {
    const [islogined , setlogin] = useState(false)


    return {
        islogined,
        slogin(){
            return new Promise((res)=>{
                setlogin(true);
                res();
            })
        }
    }
}

export function Successlogin({children}) {
    const auth = useAuth();

    return<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default function AuthConsumer() {
    return useContext(AuthContext)
}

export function RequireAuth({children}) {
    const {authed} = AuthConsumer();

    return authed ===true ?(children):(<Navigate to='/Login' replace/>)
}