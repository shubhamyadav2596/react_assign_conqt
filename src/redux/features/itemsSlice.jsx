import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewItem = createAsyncThunk("createItem", async (data, { rejectWithValue }) => {

    const response = await fetch("https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers" , {
        method: "POST",
        body:   JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result
    } catch (error) {
         return rejectWithValue(error)
    }

})

export const countryDetails = createAsyncThunk("countryDetails", async (_, { rejectWithValue }) => {
    const response = await fetch("https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList",
    );

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})


const initialState = {
    items: [],
    suppliers: {},
    country: {},
    loading: false,
    error: null
}


 const itemSlice  = createSlice({
    name: "itemSlice",
    initialState,
    reducer: {},
    extraReducers:  (builder) => {
        builder
        .addCase(createNewItem.pending, (state) => {
            state.loading = true
        })
        .addCase(createNewItem.fulfilled, (state, action) => {
           state.loading = false
           state.items.push(action.payload)
        })
        .addCase(createNewItem.rejected, (state, action) => {
           state.loading = true
           state.error = action.payload.message
        }),

        builder.addCase(countryDetails.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(countryDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.country = action.payload
        })
        builder.addCase(countryDetails.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })

    }
})


export default itemSlice.reducer;