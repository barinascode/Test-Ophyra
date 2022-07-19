import { useEffect } from "react"
import ProductList from "./ProductList"
import { ThunkAppDispatch } from "../../../../store"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../../../store/Products.slice"
import PaginateProductsCase from "../PaginateProductsCase"
import { useParams } from "react-router-dom"

const ListProductsCase = () => {
    const params = useParams();
    const {page} = params
    const dispatch = useDispatch<ThunkAppDispatch>()   
   
    useEffect(()=>{
        dispatch(fetchProducts( Number(page) || 1 ))
    },[dispatch, page])

    return <>
        <ProductList />
        <PaginateProductsCase/>
    </>

}

export default ListProductsCase