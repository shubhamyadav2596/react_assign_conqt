import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk for fetching countries
export const fetchCountries = () => async (dispatch) => {
  try {
    const response = await axios.get('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList');
    dispatch(setCountries(response.data.data.countyList));
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Initial state
const initialState = {
  countries: [],
  selectedCountry: null
};

// Create the slice
const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setCountries, setSelectedCountry } = countrySlice.actions;
export default countrySlice.reducer;
