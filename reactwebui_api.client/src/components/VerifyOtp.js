import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/VerifyOtp.tsx
import { useState } from 'react';
import AuthService from '../services/AuthService';
const VerifyOtp = () => {
    const [email, setEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const handleVerifyOtp = async () => {
        const token = await AuthService.verifyOtp(email, otpCode);
        if (token) {
            localStorage.setItem('token', token);
            alert('OTP verified successfully');
        }
        else {
            alert('OTP verification failed');
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Verify OTP" }), _jsx("input", { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "text", placeholder: "OTP Code", value: otpCode, onChange: (e) => setOtpCode(e.target.value) }), _jsx("button", { onClick: handleVerifyOtp, children: "Verify OTP" })] }));
};
export default VerifyOtp;
