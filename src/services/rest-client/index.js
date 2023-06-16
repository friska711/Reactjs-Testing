import axios from "axios"
import { useLocalStorage } from "../../hooks/localStorage"
export const useClient = (collection) => {
    const prefix = 'friska'
    const [creds] = useLocalStorage('credetial')
    const client = axios.create({
        baseURL:`https://msib-feb3-objectstorage.productzillaacademy.com/collections/${prefix}_${collection}`,
        headers: {
            Authorization: `Bearer ${creds}`
        }
    })
    return client;
}

export default useClient