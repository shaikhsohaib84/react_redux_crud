import { GET } from "./axiosApi"

export const fetchProduct = async () => {
    try{
        const url = 'https://fakestoreapi.com/products'
        const res = await GET(url)
        return res?.data
    } catch(error){
        return error?.response
    }
}