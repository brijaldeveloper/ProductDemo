import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: any;
    discountPercentage: number;
    thumbnail: string;
    stock: null,
    brand: string,
    category: string,
    rating:number,

}

export const fetchData = createAsyncThunk('products/fetchData', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
   const productList=data.products

return productList
 
});
export const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        list: [] as Product[],
        status: 'idle',
        error: null as string | null,
        selectedProduct: null as Product | null,
    },
    
    reducers: {
      
        loadMoreSuccess: (state, action) => {
            state.status = 'succeeded';
            state.list = [...state.list, ...action.payload];
        },
        localSearchSuccess: (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
          },

    },
})

// Action creators are generated for each case reducer function
export const { loadMoreSuccess ,localSearchSuccess} = ProductSlice.actions

export default ProductSlice.reducer

export const loadMore = createAsyncThunk('products/loadMore', async (index: number, { dispatch }) => {
 
        const data=[
            {
                name:"abcd"
            }
        ]

    dispatch(loadMoreSuccess(data));
  });
  
  export const localSearch = createAsyncThunk('products/localSearch', async (query:any,{ dispatch }) => {
    const data=[
        {
            name:"abcd"
        }
    ]
    console.log("data seatch details",data)

    dispatch(localSearchSuccess(data));
  });
  