import axios from 'axios'
import baseUrl from '../../tools/baseUrl'
import { IProduct, IFetchProductsResponse } from '../../modules/Products/entities/IProduct'

const ProductsService = {
    list : (page: number) =>  axios.get<IFetchProductsResponse>(baseUrl(`/products?page=${page}`)),
    find: (id:string)=> axios.get<IProduct>(baseUrl(`/products/${id}`)),
    upsert: (product: IProduct) => axios.put(baseUrl('/products'), product),
    delete: (id:string) => axios.delete(baseUrl(`/products/${id}`)),

}

export default ProductsService