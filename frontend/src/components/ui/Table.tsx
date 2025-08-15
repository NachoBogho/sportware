import React from 'react';

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black text-white">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b border-green-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-green-700">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-b border-green-600">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;