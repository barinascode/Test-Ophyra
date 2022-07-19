import { useDispatch, useSelector } from "react-redux";
import { ThunkAppDispatch } from "../../../../store";
import { productsActions, selectAllProducts } from "../../../../store/Products.slice";
import { uIActions } from "../../../../store/ui.slice";
import {IProduct} from "../../entities/IProduct"
import ProductItem from "./ProductItem"

const ProductList = () => {
    
    const dispatch = useDispatch<ThunkAppDispatch>()
    const products = useSelector(selectAllProducts)
    
    const selectItemHandler = (item:IProduct) => {
        dispatch(productsActions.setSelected(item))
        dispatch(uIActions.setIsUpsertingProduct(true))
    }

    return <>
        {
            products.map((item)=>(
                <div className="product-item" key={item.id} >
                    <ProductItem item={item} onSelect={selectItemHandler} />
                </div>
            ))
        }
    </>
    
}

export default ProductList