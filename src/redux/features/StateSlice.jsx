import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setSelectedCountry } from './CountrySlice';

// Modified async thunk to get countryId from state
export const fetchStatesByCountry = createAsyncThunk(
  'state/fetchStatesByCountry',
  async (countryId) => {
    const response = await fetch(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=1`);
    // const response = await fetch(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${countryId}`);
    dispatch(setStates(response.data.data.stateList))
  }
);

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    states: [],
    selectedState: null
  },
  reducers: {
    setStates: (state, action) => {
      state.states = action.payload
    },
    setSelectedState: (state, action) => {
      state.selectedState = action.payload
    },
    fetchStateById: async (state, action) => {
      const response = await fetch(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=1`);
      dispatch(setStates(response.data.data.stateList))
      dispatch(setSelectedState(response.data.data.stateList))
      console.log(response.data.data.stateList)

    }
  }
});

export const { setStates, setSelectedState, fetchStateById } = stateSlice.actions;
export default stateSlice.reducer;
