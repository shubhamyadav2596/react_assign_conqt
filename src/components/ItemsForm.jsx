import Headeing from "./Headeing";

const ItemsForm = () => {
  return (
    <>
      <Headeing text1={"item"} text2={"Details"} />
      <div className="mt-5 md:flex flex-wrap gap-4 max-w-[1100px] rounded-2xl mx-auto p-8 bg-[#EBEEFD]">
        <div className="mb-5 w-full md:w-[49%] mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Item Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter item name"
            required
          />
          <p className="mt-2 text-[#00000080]">Max 50 characters</p>
        </div>
        <div className="mb-5 w-full md:w-[49%] mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantity
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter quantity"
            required
          />
          <p className="mt-2 text-[#00000080]">numeric value</p>
        </div>
        <div className="mb-5 w-full md:w-[49%] mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Unit Price
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter unit price"
            required
          />
          <p className="mt-2 text-[#00000080]">numeric value (USD)</p>
        </div>
        <div className="mb-5 w-full md:w-[49%] mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date Submission
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter date"
            required
          />
          <p className="mt-2 text-[#00000080]">fomat MM/DD/YY</p>
        </div>
      </div>
    </>
  );
};

export default ItemsForm;
