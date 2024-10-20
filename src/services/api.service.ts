import axios from 'axios';
import {BaseResponseTypes} from "../models/BaseResponseTypes";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

export const getPosts = async ():Promise<IPost[]> => {
    const {data:{ posts }}  = await axiosInstance.get<BaseResponseTypes&{posts: IPost[]}>('/posts');
    return posts;
}

export const getUsers = async ():Promise<IUser[]> => {
    const {data: {users}} = await axiosInstance.get<BaseResponseTypes&{users: IUser[]}>('/users');
    return users;
}
