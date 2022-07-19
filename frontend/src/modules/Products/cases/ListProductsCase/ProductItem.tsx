import { Link } from "react-router-dom"
import assetsUrl from "../../../../tools/assetsUrl"
import Card from "../../../../Ui/Card/Card"
import {IProduct} from "../../entities/IProduct"
import './Style.css'

interface PropTypes {
    item: IProduct,
    onSelect: (item: IProduct) => void
}

const ProductItem = (props: PropTypes) => {

    const { item, onSelect } = props
    const { id, title, description, price, image } = item

    return <>
        <Card>
            <div className="f f-a-center f-row m-1" onClick={()=>onSelect(item)}>
                <div className="p-1">
                    <div 
                        className="product-image" 
                        style={{
                            backgroundImage : `url(${assetsUrl(`/products/${image}`)})`
                        }}>

                    </div>
                </div>
                <div className="ml-1">
                    <Link className="text-1 text-z-1" to={`/products/upsert/${id}?operation=update`}>{title}</Link>
                    <p className="p-1">{description}</p>
                    <h2 className="text-5 text-z-1">COP {price}</h2>
                </div>
            </div>
        </Card>

    </>
}

export default ProductItem