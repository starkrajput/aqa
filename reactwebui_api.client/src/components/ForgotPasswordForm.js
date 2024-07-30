import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ForgotPassword.tsx
import { useState } from 'react';
import AuthService from '../services/AuthService';
const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const handleForgotPassword = async () => {
        const response = await AuthService.forgotPassword(email);
        alert(response);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Forgot Password" }), _jsx("input", { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("button", { onClick: handleForgotPassword, children: "Send Password Reset Link" })] }));
};
export default ForgotPasswordForm;
