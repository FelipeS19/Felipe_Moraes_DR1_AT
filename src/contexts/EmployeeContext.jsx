// src/contexts/EmployeeContext.jsx
import React, { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => {
    return useContext(EmployeeContext);
};

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' }
    ]);

    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
