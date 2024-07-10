// src/components/TableList.js
import React from 'react';
import './TableList.css';

const TableList = ({ columns, rows, onCheckboxChange, selectedRow }) => {
    return (
        <table className="table-list">
            <thead>
                <tr>
                    <th></th>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id} className={selectedRow === row.id ? 'selected' : ''}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRow === row.id}
                                onChange={() => onCheckboxChange(row.id)}
                            />
                        </td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableList;
