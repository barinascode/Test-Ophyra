import React, {Suspense} from 'react'
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAppThunkDispatch } from "../../../store";
import { fetchProductById } from "../../../store/Products.slice";
import DashboardTemplate from "../../../templates/DashboardTemplate"
const UpsertProductCase = React.lazy(() => import("../cases/UpsertProductCase"));

const UpsertProductPage = () => {

  const params = useParams();
  const {product_id} = params
  
  const dispatch = useAppThunkDispatch()

  useEffect(() => {
    if(product_id)
      dispatch(fetchProductById(product_id || uuidv4()))
  },[dispatch, product_id])


  return <>
      <DashboardTemplate>
        <Suspense fallback={<div>Loading</div>}>
          <UpsertProductCase />
        </Suspense>
      </DashboardTemplate>
    </>

}

export default UpsertProductPage