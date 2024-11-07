import axios from 'axios';
import {BaseResponseTypes} from "../models/BaseResponseTypes";
import {IProducts} from "../models/IProducts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})

export const apiService = {
    products:{
        getAll:async (page:number) :Promise<BaseResponseTypes & {products: IProducts[]}> => {
            const skip = (page - 1) * 30;
            const {data} = await axiosInstance.get<BaseResponseTypes & {products: IProducts[]}>('/products', {
                params:{
                    skip:skip
                }
            })
            console.log(data);
            return data;
        }
    }
}






//
// export const getProducts = async ():Promise<IProducts[]> => {
//     const {data: {products}} = await axiosInstance.get<BaseResponseTypes&{products: IProducts[]}>('/products');
//     return products;
// }