"use client";

import React, { useState } from "react";

interface TableProps {
  title?: string;
  headers: string[];
  data?: Array<{ [key: string]: any }>;
}

export const Table = (props: TableProps) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!props.data || !sortConfig) return props.data;

    const sorted = [...props.data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * (sortConfig.direction === "asc" ? 1 : -1);
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue, undefined, { sensitivity: "base" }) * (sortConfig.direction === "asc" ? 1 : -1);
      } else {
        return 0;
      }
    });

    return sorted;
  }, [props.data, sortConfig]);

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-w-full">
    {props.title ? <h1 className="font-semibold px-1.5 py-2 cursor-default select-none">{props.title}</h1> : <></> }
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-t border-zinc-200">
          {props.headers.map((header, headerIndex) => (
            <th
              key={headerIndex}
              className="text-left font-semibold text-blue-600 px-1.5 py-2 cursor-pointer select-none"
              onClick={() => requestSort(header)}
            >
              <div className="flex items-center">
                {header}
                {sortConfig?.key === header && (
                  <span className="ml-2">
                    {sortConfig.direction === "asc" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData?.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${hoveredRowIndex === rowIndex ? "bg-zinc-300 rounded-md" : ""}`}
            onMouseEnter={() => setHoveredRowIndex(rowIndex)}
            onMouseLeave={() => setHoveredRowIndex(null)}
          >
            {props.headers.map((header, colIndex) => (
              <td
                key={colIndex}
                className={`border-t px-1.5 py-2 cursor-default select-none ${
                  hoveredRowIndex === rowIndex ||
                  hoveredRowIndex === rowIndex - 1
                    ? "border-transparent"
                    : "border-zinc-200"
                } ${
                  hoveredRowIndex === rowIndex
                    ? colIndex === 0
                      ? "rounded-l-md"
                      : colIndex === props.headers.length - 1
                      ? "rounded-r-md"
                      : ""
                    : ""
                }`}
              >
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
