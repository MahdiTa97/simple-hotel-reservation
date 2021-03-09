import React from "react";
import { useForm } from "react-hook-form";

const From = (props) => {
  const { setState, items } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setState(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="bg-white shadow rounded-2xl p-6 my-6 sm:w-full">
        {items.map((item, index) => (
          <>
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 my-4">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="name" class="bg-white text-gray-600 px-1">
                    {item}
                  </label>
                </p>
              </div>
              <p>
                <input
                  id={item}
                  name={item}
                  type="text"
                  class="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                  ref={register}
                />
              </p>
            </div>
          </>
        ))}
        <div class="border-t mt-6 pt-3 flex justify-between w-full">
          <button class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
            Search
          </button>
          <button class="rounded text-gray-100 px-3 py-1 bg-green-500 hover:shadow-inner hover:bg-green-700 transition-all duration-300">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default From;
