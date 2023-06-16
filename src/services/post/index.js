import { useState } from "react";
import useClient from "../rest-client";

export const usePostService = () => {
    const client = useClient('posts')
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        if(loading) return
        setLoading(true)
        return client.get().then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const createPosts = async (post) => {
        if(loading) return
        setLoading(true)
        return client.post(`/`, {post, timestamp: new Date ()}).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const deletePosts = async (id) => {
        if(loading) return
        setLoading(true)
        return client.delete(`/${id}`).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const updatePosts = async (id,post) => {
        if(loading) return
        setLoading(true)
        return client.delete(`/${id}`, {post}).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    return { getPosts, createPosts, deletePosts, updatePosts, loading}
    
}
export default usePostService