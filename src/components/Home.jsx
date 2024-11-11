import React, { useState, useEffect } from "react";
import ItemsForm from "./ItemsForm";
import Supplier from "./Supplier";
import DataTable from "./dataTable";
import SubmitDetail from "./SubmitDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/features/CountrySlice";

const Home = () => {

    const [form, setForm] = useState("items")

  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(fetchCountries());
    console.log(countries)
  }, [dispatch]);
  return (
    <>
    <div className="w-100 flex gap-4 justify-center items-center my-5">
    <div className="flex items-center">
      <input
        type="checkbox"
        name="checkForm"
        value="items"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e) => setForm(e.target.value)}
        checked={form === "items"}
      />
      <label
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
      items
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="checkform"
        value="suppliers"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e) => setForm(e.target.value)}
        checked={form === "suppliers"}
      />
      <label
      
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        suppliers
      </label>
    </div>
  </div>

  <form>
   
   {
    form && form === "items" ? <ItemsForm /> : <Supplier />
   }


   </form>

   <SubmitDetail />


   <DataTable />


    </>
  );
};

export default Home;
