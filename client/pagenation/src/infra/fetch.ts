import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
})

export const fetcher = async (key: string) => {
    const res = await axiosInstance.get(key)

    return res.data

}