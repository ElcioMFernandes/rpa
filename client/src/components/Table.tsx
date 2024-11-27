import React from 'react';
import { TableProps } from "../interfaces/TableProps";

const Table: React.FC<TableProps> = ({ headers, data, onCellClick }) => {
    const handleCellClick = (row: { [key: string]: any }, columnKey: string) => {
        if (onCellClick) {
            onCellClick(row, columnKey);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header.key}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, colIndex) => (
                            <td
                                key={`${rowIndex}-${colIndex}`}
                                onClick={header.clickable ? () => handleCellClick(row, header.key) : undefined}
                                style={{ cursor: header.clickable ? 'pointer' : 'default' }}
                            >
                                {row[header.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;