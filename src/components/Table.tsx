"use client";

import { useState } from "react";

interface TableProps {
  headers: { key: string; title: string }[];
  rows?: { [key: string]: string }[];
}

export const Table = (props: TableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSort = (key: string) => {
    if (sortColumn === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortDirection("asc");
    }
  };

  const filteredRows = () => {
    if (!props.rows) return [];
    if (!searchTerm.trim()) return props.rows;

    return props.rows.filter((row) =>
      props.headers.some((header) => {
        const value = row[header.key]?.toLowerCase() || "";
        return value.includes(searchTerm.toLowerCase());
      })
    );
  };

  const sortedRows = () => {
    const rows = filteredRows();
    if (!rows || !sortColumn || !sortDirection) {
      return rows;
    }

    return [...rows].sort((a, b) => {
      const valueA = a[sortColumn]?.toString() || "";
      const valueB = b[sortColumn]?.toString() || "";

      if (sortDirection === "asc") {
        return valueA.localeCompare(valueB, "pt-BR");
      } else {
        return valueB.localeCompare(valueA, "pt-BR");
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search ..."
        className="focus:outline-none border border-gray-400 w-1/2 px-2 py-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead className="bg-gray-200">
          <tr>
            {props.headers.map((header) => (
              <th
                key={header.key}
                className="border border-gray-400 px-4 py-2 text-center cursor-pointer select-none"
                onClick={() => handleSort(header.key)}
                style={{ width: "150px" }} // Define largura fixa
              >
                <div className="flex justify-between items-center">
                  <span>{header.title}</span>
                  <span className="ml-2 text-sm w-4 text-right">
                    {sortColumn === header.key
                      ? sortDirection === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows()?.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {props.headers.map((header) => (
                <td
                  key={header.key}
                  className="border border-gray-400 px-4 py-2 text-center cursor-default select-none"
                >
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
