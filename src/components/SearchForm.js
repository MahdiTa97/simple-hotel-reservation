import React from "react";
import { useForm } from "react-hook-form";

const SearchForm = (props) => {
  const { items, onOpenModal, onSubmit } = props;
  const { register, handleSubmit } = useForm();

  const submitter = (data) => {
    onSubmit(data);
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    onOpenModal(e);
  };

  return (
    <form onSubmit={handleSubmit(submitter)}>
      <div className="bg-white shadow rounded-2xl p-6 my-6 sm:w-full">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 my-4">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="name" className="bg-white text-gray-600 px-1">
                    {item}
                  </label>
                </p>
              </div>
              <p>
                <input
                  id={item}
                  name={item}
                  type="text"
                  className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                  ref={register}
                />
              </p>
            </div>
          </React.Fragment>
        ))}
        <div className="border-t mt-6 pt-3 flex justify-between w-full">
          <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
            Search
          </button>
          <button
            className="rounded text-gray-100 px-3 py-1 bg-green-500 hover:shadow-inner hover:bg-green-700 transition-all duration-300"
            onClick={handleAddBtn}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
