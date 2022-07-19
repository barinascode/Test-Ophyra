import React, {Suspense} from 'react'
import DashboardTemplate from "../../../templates/DashboardTemplate"
const ListProductsCase = React.lazy(() => import("../cases/ListProductsCase"));

const ListProductsPage = () => {
  
  return <>
      <DashboardTemplate>
      <Suspense fallback={<div>Loading</div>}>
          <ListProductsCase />
        </Suspense>
      </DashboardTemplate>
    </>

}

export default ListProductsPage