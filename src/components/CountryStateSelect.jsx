import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchCountries, 
  fetchStatesByCountry,
  setSelectedCountry,
  setSelectedState 
} from '../redux/features/CountrySlice';

const CountryStateSelect = () => {
  const dispatch = useDispatch();
  const { 
    countries, 
    selectedCountry, 
    states,
    selectedState,
    loading, 
    statesLoading,
    error 
  } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCountryChange = (e) => {
    const country = countries.find(c => c.countryId === parseInt(e.target.value));
    dispatch(setSelectedCountry(country));
    if (country) {
      dispatch(fetchStatesByCountry(country.countryId));
    }
  };

  const handleStateChange = (e) => {
    const state = states.find(s => s.stateId === parseInt(e.target.value));
    dispatch(setSelectedState(state));
  };

  if (loading) return <div>Loading countries...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4 max-w-md">
      {/* Country Select */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Country
        </label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedCountry?.countryId || ''}
          onChange={handleCountryChange}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.countryId} value={country.countryId}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Select */}
      {selectedCountry && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select State
          </label>
          {statesLoading ? (
            <div>Loading states...</div>
          ) : (
            <select
              className="w-full p-2 border rounded-md"
              value={selectedState?.stateId || ''}
              onChange={handleStateChange}
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.stateId} value={state.stateId}>
                  {state.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {/* Selected Details */}
      {selectedCountry && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold mb-2">Selected Location:</h3>
          <p>Country: {selectedCountry.flag} {selectedCountry.name}</p>
          {selectedState && (
            <>
              <p>State: {selectedState.name}</p>
              <p>State Code: {selectedState.isoCode}</p>
              <p className="text-sm text-gray-500">
                Coordinates: {selectedState.latitude}, {selectedState.longitude}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryStateSelect; 