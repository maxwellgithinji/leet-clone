import React from 'react';

type TableProps = {
  header: string;
  tableHeads: string[];
};

const Table: React.FC<TableProps> = ({ header, tableHeads }) => {
  return (
    <>
      <h1 className="mb-5 mt-10 text-center text-2xl font-medium uppercase text-gray-700 dark:text-gray-400">
        &ldquo; {header} &rdquo; 👇
      </h1>

      <div className="relative mx-auto overflow-x-auto px-6 pb-10">
        <table className="mx-auto w-full max-w-[1200px] text-left text-sm text-gray-500 dark:text-gray-400 sm:w-7/12">
          <thead className="border-b text-xs uppercase text-gray-700 dark:text-gray-400 ">
            <tr>
              {tableHeads.map((head) => (
                <th
                  key={head}
                  scope="col"
                  className="w-0 px-6 py-3 font-medium"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          {/* Add the rest of your table body here */}
        </table>
      </div>
    </>
  );
};

export default Table;
