import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks/localStorage"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import { PostForm } from "../../components/PostForm"
export const HomePage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    useEffect(() => {
        !credentials && navigate('/login')
    }, [credentials])
    return <div>
        <h1>Home Page</h1>
        <div style={{maxWidth: 1080, margin: 'auto'}}>
            <Grid container>
                <Grid item md={3} lg={3}>
                    <PostForm/>
                </Grid>
                <Grid item md={3} lg={9}> 

                </Grid>
            </Grid>
        </div>
    </div>
}