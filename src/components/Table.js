import React from "react";

export default function Table(props) {
  const { data, onDelete, setDefaultValues, onOpenModal, notEdit } = props;

  const Header = (props) => {
    const { rows } = props;

    return (
      <thead className="bg-gray-50">
        <tr>
          {rows.map((item, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const Body = (props) => {
    const { rows, onDelete } = props;

    return (
      <tbody className="bg-white divide-y divide-gray-200 relative">
        <tr>
          {Object.values(rows).map((item, index) => (
            <td key={index} className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 text-center">{item}</div>
            </td>
          ))}
          {notEdit ? null : (
            <td className="px-6 py-4 whitespace-nowrap absolute left-5 hover:invisible">
              <button
                className="text-xl text-red-500 text-center hover:text-red-800"
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(rows);
                }}
              >
                ❌
              </button>
              <button
                className="text-xl text-green-500 text-center hover:text-green-800"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal();
                  setDefaultValues(rows);
                }}
              >
                🖋️
              </button>
            </td>
          )}
        </tr>
      </tbody>
    );
  };

  return (
    <>
      {data.length ? (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block w-screen sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="w-screen divide-y divide-gray-200">
                  <Header rows={Object.keys(data[0])} />
                  {data.map((row, index) => (
                    <Body rows={row} key={index} onDelete={onDelete} />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-solid border-3 border-b-4 border-t-4">
          <h2 className="flex justify-center	text-1xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
            No Data
          </h2>
        </div>
      )}
    </>
  );
}
