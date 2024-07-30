import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ResetPassword.tsx
import { useState } from 'react';
import AuthService from '../services/AuthService';
import { useParams } from 'react-router-dom';
const ResetPassword = () => {
    const { token } = useParams();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleResetPassword = async () => {
        const response = await AuthService.resetPassword(email, token, newPassword);
        alert(response);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Reset Password" }), _jsx("input", { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "New Password", value: newPassword, onChange: (e) => setNewPassword(e.target.value) }), _jsx("button", { onClick: handleResetPassword, children: "Reset Password" })] }));
};
export default ResetPassword;
