import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-simple-hook-modal";

const CreateForm = (props) => {
  const {
    items,
    onSubmit,
    isModalOpen,
    closeModal,
    tableName,
    defaultValues,
    isUpdate,
  } = props;
  const { register, handleSubmit } = useForm();

  const submitter = (data) => {
    onSubmit(data);
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen}>
      <button className="text-red-900 font-bold" onClick={closeModal}>
        Close
      </button>
      <h2 className="text-3xl font-extrabold text-center md:p-7 my-7 text-gray-700 cursor-default capitalize">
        {isUpdate ? "Update" : "Add"} {tableName}
      </h2>
      <div className="relative text-gray-700">
        <form onSubmit={handleSubmit(submitter)}>
          <div className="bg-white shadow rounded-2xl p-6 my-6 sm:w-full">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 my-4">
                  <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                    <p>
                      <label
                        htmlFor="name"
                        className="bg-white text-gray-600 px-1"
                      >
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
                      defaultValue={
                        defaultValues ? defaultValues[item.toLowerCase()] : ""
                      }
                    />
                  </p>
                </div>
              </React.Fragment>
            ))}
            <div className="border-t mt-6 pt-3 flex justify-between w-full">
              <button
                className={`${
                  isUpdate
                    ? "bg-yellow-500 hover:bg-yellow-700"
                    : "bg-green-500 hover:bg-green-700"
                } rounded text-gray-100 px-3 py-1  hover:shadow-inner  transition-all duration-300`}
              >
                {isUpdate ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateForm;
