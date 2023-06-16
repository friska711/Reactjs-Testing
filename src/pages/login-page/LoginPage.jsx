import { useNavigate } from "react-router-dom"
import { ButtonGoogleLogin } from "../../components/ButtonGoogleLogin"
import { useLocalStorage } from "../../hooks/localStorage"
import { useEffect } from "react"

export const LoginPage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    useEffect(() => {
        credentials && navigate('/home')
    }, [credentials])
    return <div style={{ textAlign: 'center'}}>
        <h1>Login Page</h1>
        <ButtonGoogleLogin/>
    </div>
}