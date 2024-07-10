// src/pages/List.js
import React, { useState } from 'react';
import TableList from '../components/TableList';
import Typography from '../components/Typography';
import Button from '../components/Button';
import { useEmployees } from '../contexts/EmployeeContext';
import './List.css';

const List = () => {
    const { employees, deleteEmployee } = useEmployees();
    const [selectedRow, setSelectedRow] = useState(null);

    const handleCheckboxChange = (id) => {
        setSelectedRow(id === selectedRow ? null : id);
    };

    const handleDelete = () => {
        deleteEmployee(selectedRow);
        setSelectedRow(null);
    };

    const columns = ['Name', 'Age', 'Email'];

    return (
        <div className="list-container">
            <Typography variant="h4" text="Funcionários" />
            <div className="list-content">
                <TableList
                    columns={columns}
                    rows={employees}
                    onCheckboxChange={handleCheckboxChange}
                    selectedRow={selectedRow}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDelete}
                    text="Delete"
                    disabled={!selectedRow}
                />
            </div>
        </div>
    );
};

export default List;
