import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useAppThunkDispatch } from "../../../../store"
import { getProductsState, productsActions } from "../../../../store/Products.slice"
import './Style.css'

const PaginateProductsCase = () => {

    const dispatch = useAppThunkDispatch()
    const productState = useSelector(getProductsState)
    const itemsPerPage = 5

    
    const DrawButtons = ()=>{

        const offset = (productState.total + itemsPerPage - 1) / itemsPerPage;

        let result:number[] = []

        for( let i=1; i <= offset; i++){
                result.push(i)
        }

        return <>
            {
                result.map((page:any)=>(
                    <Link
                    className="pagination-button" 
                    to={`/products/page/${page}`}
                    onClick={()=>dispatch(productsActions.setPage(page))}>
                        {page}
                    </Link>
                ))
            }
        </>
    }

    return (
        <div>
            <br />
            <br />
            <DrawButtons /> 
            <br />
            <br />
        </div>
    )

}

export default PaginateProductsCase