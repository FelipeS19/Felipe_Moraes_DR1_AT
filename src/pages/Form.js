// src/pages/Form.js
import React, { useState } from 'react';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Alert from '../components/Alert';
import { useEmployees } from '../contexts/EmployeeContext'; // Import useEmployees
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ show: false, severity: '', message: '' });

    const { addEmployee } = useEmployees(); // Destructure addEmployee from the context

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !age || !email) {
            setAlert({ show: true, severity: 'error', message: 'Por favor, preencha todos os campos.' });
            return;
        }

        const newEmployee = { name, age, email };
        try {
            addEmployee(newEmployee); // Use addEmployee from context
            setAlert({ show: true, severity: 'success', message: `Novo funcionário adicionado com sucesso: ${name}` });
            setName('');
            setAge('');
            setEmail('');
        } catch (error) {
            setAlert({ show: true, severity: 'error', message: 'Erro ao adicionar funcionário' });
            console.error('Erro ao adicionar funcionário:', error);
        }
    };

    return (
        <div className="form-container">
            <Typography variant="h4" text="Adicione um novo funcionario" />
            {alert.show && (
                <Alert severity={alert.severity} message={alert.message} />
            )}
            <form className="form-content" onSubmit={handleSubmit}>
                <TextField 
                    label="Nome"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    label="Idade"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField 
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                    variant="contained"
                    color="primary"
                    text="Submit"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
};

export default Form;
