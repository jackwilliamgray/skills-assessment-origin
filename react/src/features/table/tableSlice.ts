import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface TableState {
  status: 'idle' | 'loading' | 'failed';
  result: {rank:number, name: string, priceUsd: string, changePercent24Hr: string}[]
}
interface Item {
  rank:number;
   name: string;
    priceUsd: string;
     changePercent24Hr: string;

}
const initialState: TableState = {
 
  status: 'idle',
  result: [{rank:1, name: 'Bitcoin', priceUsd: '$11,890.00', changePercent24Hr: '+0.00%'}]
};



export const tableSlice = createSlice({
  name: 'table',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem:(state, action: PayloadAction<Item>) => {
      state.result.push({rank:action.payload.rank, name: action.payload.name, priceUsd: action.payload.priceUsd, changePercent24Hr: action.payload.changePercent24Hr})
    },
    
  },

});

export const { addItem } = tableSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectResult = (state: RootState) => state.table.result;



export default tableSlice.reducer;
