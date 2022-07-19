import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const UI_FEATURE_KEY = 'uI';

/*
 * Update these interfaces according to your requirements.
 */
export interface UIEntity {
  id: number;
}

export interface UIState  {
  isUpsertingProduct : boolean
}

export const uIAdapter = createEntityAdapter<UIEntity>();

export const initialUIState: UIState = {
  isUpsertingProduct: false
};

export const uISlice = createSlice({
  name: UI_FEATURE_KEY,
  initialState: initialUIState,
  reducers: {
    
    setIsUpsertingProduct : (state:UIState, payload : {payload:boolean})=>{
      state['isUpsertingProduct'] = payload.payload
    }
  },
 
});

/*
 * Export reducer for store configuration.
 */
export const uIReducer = uISlice.reducer;


export const uIActions = uISlice.actions;

export const getUIState = (rootState: any): UIState => rootState[UI_FEATURE_KEY];




