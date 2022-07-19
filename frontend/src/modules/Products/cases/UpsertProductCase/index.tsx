import { useSelector } from 'react-redux'
import { IoCheckmark,IoTrashOutline } from "react-icons/io5";
import { useAppThunkDispatch } from '../../../../store'
import { useSearchParams } from "react-router-dom";
import { deleteProduct, getProductsState, productsActions, upsertProduct } from '../../../../store/Products.slice'
import Notification from '../../../../tools/Notification';
import FileUploader from '../../../../Ui/FileUploader';
import assetsUrl from '../../../../tools/assetsUrl';
import './Style.css'

const iconSize = '35px'
const iconColor = '#161d70'


const UpsertProductCase = () => {

    const dispatch = useAppThunkDispatch()
    const tempProduct = useSelector(getProductsState).selected
    const [searchParams] = useSearchParams();
    const operation = searchParams.get('operation')


    const onChangeHandler = (key:string, value:string) => {
        dispatch(productsActions.setSelected({
            ...tempProduct,
            [key] : value
        }))
    }


    const onDeleteHandler = () => {
        dispatch(deleteProduct(tempProduct.id))
        .then(()=>
            Notification.dispath({
            title: 'Producto',
            message: 'Producto eliminado con exito',
            type: 'success'
          })
        )
        .catch((error) =>
            Notification.dispath({
                title: 'Producto',
                message: 'Ocurrio un error al eliminar el producto',
                type: 'danger'
            })
        )
    }


    const onFormSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(upsertProduct(tempProduct))
        .then(()=>Notification.dispath({
            title: 'Producto',
            message: (operation==='create') ? 'Producto creado con exito' : 'Producto actualizado con exito',
            type: 'success'
          })
        )
        .catch((error)=>{
            Notification.dispath({
                title: 'Producto',
                message: (operation==='create') ? 'Error al crear el producto' : 'Error al actualizar el producto',
                type: 'danger'
              })
        })
    }


    return <>
        <div>
            <h1>{( operation === 'create' ) ? 'Nuevo producto' : 'Actualizar producto'}</h1>
        </div>
        <form onSubmit={onFormSubmit}>
            <div className="inputs-group">

                <label htmlFor="">Título</label>
                <input 
                    type='text' 
                    placeholder="Título"
                    value={tempProduct.title}
                    onChange={(e)=> onChangeHandler('title', e.target.value)} />
                
                <label htmlFor="">Precio</label>
                <input 
                    type='text' 
                    placeholder="Precio"
                    value={tempProduct.price}
                    onChange={(e)=> onChangeHandler('price', e.target.value)} />

                <label htmlFor="">Descripción</label>
                <textarea 
                rows={4} 
                    placeholder="Descripción"
                    value={tempProduct.description}
                    onChange={(e)=> onChangeHandler('description', e.target.value)}
                ></textarea>

                <FileUploader 
                    type={'image'}
                    label='Subir imagen en miniatura'
                    idInput={`resource-image-${tempProduct.id}`}
                    onUploadSuccess={(response:any) => onChangeHandler('image',response.data.file_name)}
                    uploadedFileUri={(tempProduct.image) ? assetsUrl(`/products/${tempProduct.image}`) : ''}
                    onPressDelete={()=>onChangeHandler('image','')}
                />
                
            </div>
            <br />
            <div className="button-group btn-controller-bar">
                
                   

                { operation === 'update' && 
                    <button type={'button'} onClick={()=>onDeleteHandler()}>
                    <IoTrashOutline size={iconSize} color={iconColor}/>
                    </button>
                }

                 <button type="submit">
                        <IoCheckmark size={iconSize} color={iconColor}/>
                    </button>
                
            </div>
            
        </form>

    </>
}

export default UpsertProductCase