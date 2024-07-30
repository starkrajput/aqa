import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Register.tsx
import { useState } from 'react';
import AuthService from '../services/AuthService';
const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mysteryWord, setMysteryWord] = useState('');
    const [usernameSec, setUsernameSec] = useState('');
    const handleRegister = async () => {
        const response = await AuthService.register(email, password, name, mobileNumber, mysteryWord, usernameSec, 'User');
        if (response.success) {
            alert('Registration successful');
        }
        else {
            alert(response.message);
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Register" }), _jsx("input", { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("input", { type: "text", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { type: "text", placeholder: "Mobile Number", value: mobileNumber, onChange: (e) => setMobileNumber(e.target.value) }), _jsx("input", { type: "text", placeholder: "Mystery Word", value: mysteryWord, onChange: (e) => setMysteryWord(e.target.value) }), _jsx("input", { type: "text", placeholder: "Username", value: usernameSec, onChange: (e) => setUsernameSec(e.target.value) }), _jsx("button", { onClick: handleRegister, children: "Register" })] }));
};
export default RegistrationForm;
