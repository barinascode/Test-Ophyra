import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
  } from '@reduxjs/toolkit';
import {IProduct} from '../modules/Products/entities/IProduct';
import ProductsService from '../services/Products/ProductsService';

  export const PRODUCTS_FEATURE_KEY = 'products';
  
  /*
   * Update these interfaces according to your requirements.
   */
  export interface ProductsEntity extends IProduct{
    id: string;
  }
  
  export interface ProductsState extends EntityState<ProductsEntity> {
    loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
    error: string | null | undefined;
    page : number;
    total : number;
    operation : 'create' | 'update'
    selected : ProductsEntity;
  }
  
  export const productsAdapter = createEntityAdapter<ProductsEntity>();
  
  export const fetchProducts = createAsyncThunk(
    'products/fetchStatus',
    async (_page:number, thunkAPI) => {
      try {
        const result = await ProductsService.list(_page)
        
        thunkAPI.dispatch(
          productsActions.setTotal(result.data.total)
        );


        return result.data.data
      } catch (error) {
        console.log(error)
        return []
      }
    }
  );


  export const upsertProduct = createAsyncThunk(
    'products/upsert',
    async (product:IProduct, thunkAPI) => {
      try {
        const result = await ProductsService.upsert(product)
        return result.data.data  
      } catch (error) {
        console.log(error)
      }  
    }
  );


  export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id:string, thunkAPI) => {
      try {
        await ProductsService.delete(id)
      } catch (error) {
        console.log(error)
      }  
    }
  );


  export const fetchProductById = createAsyncThunk(
    'products/find',
    async (id:string, thunkAPI) => {
      
      try {
        const {data} = await ProductsService.find(id)
        
        thunkAPI.dispatch(
          productsActions.setSelected(data)
        );
        thunkAPI.dispatch(
          productsActions.setOperation('update')
        );

      } catch (error) {
        thunkAPI.dispatch(
          productsActions.setSelected({
            id: id,
            title: '',
            description:'',
            image:'',
            price:''
          })
        );
        thunkAPI.dispatch(
          productsActions.setOperation('create')
        );
      }
    }
  );


  export const initialProductsState: ProductsState =
    productsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
      page : 1,
      total : 0,
      operation : 'create',
      selected : {
        id:'',
        title: '',
        description:'',
        image:'',
        price:''
      }
    });
  

  export const productsSlice = createSlice({
    name: PRODUCTS_FEATURE_KEY,
    initialState: initialProductsState,
    reducers: {
      add: productsAdapter.addOne,
      remove: productsAdapter.removeOne,
      setSelected : (state, payload : {payload : ProductsEntity} )=> {
        state['selected'] = payload.payload
      },
      setTotal : (state, payload : {payload : number} )=> {
        state['total'] = payload.payload
      },
      setPage : (state, payload : {payload : number} )=> {
        state['page'] = payload.payload
      },
      setOperation : (state, payload : {payload : 'create' | 'update'} )=> {
        state['operation'] = payload.payload
      }
    },
      
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state: ProductsState) => {
          state.loadingStatus = 'loading';
        })
        .addCase(
          fetchProducts.fulfilled,
          (state: ProductsState, action: PayloadAction<ProductsEntity[]>) => {
            productsAdapter.setAll(state, action.payload);
            state.loadingStatus = 'loaded';
          }
        )
        .addCase(fetchProducts.rejected, (state: ProductsState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        });
    },
  });
  
  export const productsReducer = productsSlice.reducer;
  
  
  export const productsActions = productsSlice.actions;

  const { selectAll, selectEntities } = productsAdapter.getSelectors();
  
  export const getProductsState = (rootState: any): ProductsState =>
    rootState[PRODUCTS_FEATURE_KEY];
  
  export const selectAllProducts = createSelector(getProductsState, selectAll);
  
  export const selectProductsEntities = createSelector(
    getProductsState,
    selectEntities
  );