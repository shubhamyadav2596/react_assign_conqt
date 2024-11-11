import React, { useEffect } from 'react'
import Headeing from './Headeing'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCountry } from '../redux/features/CountrySlice';
import { fetchStateById, setSelectedState } from '../redux/features/StateSlice';
import { fetchStatesByCountry } from '../redux/features/StateSlice';
const Supplier = () => {
  const { countries } = useSelector((state) => state.country);
  const { selectedCountry } = useSelector((state) => state.country);
  const { states } = useSelector((state) => state.state);
  const { selectedState } = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    dispatch(setSelectedCountry(selectedCountryId));
    dispatch(setSelectedState(selectedCountryId));
    console.log(selectedCountryId+"COUNTRY")
  };
  useEffect(() => {
    dispatch(setSelectedState(selectedCountry));
    console.log(states+"STATE")
  }, [dispatch, selectedCountry]);
  useEffect(() => {
    dispatch(fetchStateById(fetchStatesByCountry));
  }, [dispatch, selectedCountry]);

  return (
    <>
    <Headeing text1={"suppliers"} text2={"Details"} />
    <div className="mt-5 md:flex flex-wrap gap-4 max-w-[1100px] rounded-2xl mx-auto p-8 bg-[#EBEEFD]">
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Supplier Name
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Supplier Name"
        required
      />
      <p className="mt-2 text-[#00000080]">Max 50 characters</p>
    </div>
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Company Name
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Company Name"
        required
      />
      <p className="mt-2 text-[#00000080]">Max 50 characters</p>
      </div>
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
       Country
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="select a country"
        required
        id="country"
        onChange={handleCountryChange}
      > {countries.map((country) => (
        <option key={country.countryId} value={country.countryId}>
          {country.name}
        </option>
      ))} </select>
      <p className="mt-2 text-[#00000080]">select country fron the list</p>
    </div>
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
       State
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="select a country"
        required
      > {states.map((state) => (
        <option key={state.stateId} value={state.stateId}>
          {state.name}
        </option>
      ))} </select>
      <p className="mt-2 text-[#00000080]">select state fron the list</p>
    </div>
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
       city
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="select a country"
        required
      > <option>1</option> </select>
      <p className="mt-2 text-[#00000080]">select city fron the list</p>
    </div>
    <div className="mb-5 w-full md:w-[49%] mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email address
      </label>
      <input
        type="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="enter email address"
        required
      />
      <p className="mt-2 text-[#00000080]">valid email address</p>
    </div>
  </div>
    </>
  )
}

export default Supplier