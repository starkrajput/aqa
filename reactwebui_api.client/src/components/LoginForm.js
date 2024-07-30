import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';
const LoginForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [useEmail, setUseEmail] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { token, role } = await AuthService.login(emailOrUsername, password, useEmail);
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            setError(null);
            switch (role) {
                case 'Admin':
                    history.push('/admin-dashboard');
                    break;
                case 'Employee':
                    history.push('/employee-dashboard');
                    break;
                case 'Customer':
                    history.push('/customer-dashboard');
                    break;
                default:
                    history.push('/');
                    break;
            }
        }
        catch (error) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Login" }), _jsxs("form", { onSubmit: handleLogin, children: [_jsxs("div", { children: [_jsx("label", { children: "Email or Username" }), _jsx("input", { type: "text", value: emailOrUsername, onChange: (e) => setEmailOrUsername(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx("div", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: useEmail, onChange: () => setUseEmail(!useEmail) }), "Use Email"] }) }), error && _jsx("p", { style: { color: 'red' }, children: error }), _jsx("button", { type: "submit", children: "Login" })] })] }));
};
export default LoginForm;
