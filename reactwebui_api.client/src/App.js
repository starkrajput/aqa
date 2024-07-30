import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import VerifyOtp from './components/VerifyOtp';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import ForgotPassword from './components/ForgotPasswordForm';
import Home from './pages/Home';
import HomeView from './pages/HomeView';
import ArtificialIntelligenceSolutions from './pages/Myself/Services/ArtificialIntelligenceSolutions';
const App = () => {
    const role = localStorage.getItem('role');
    return (_jsx(Router, { children: _jsxs(Switch, { children: [_jsx(Route, { exact: true, path: "/", component: Home }), _jsx(Route, { path: "/login", component: Login }), _jsx(Route, { path: "/register", component: Register }), _jsx(Route, { path: "/forgot-password", component: ForgotPassword }), _jsx(Route, { path: "/verify-otp", component: VerifyOtp }), _jsx(Route, { path: "/reset-password/:token", component: ResetPassword }), _jsx(PrivateRoute, { path: "/admin-dashboard", component: AdminDashboard, role: role, requiredRole: "Admin" }), _jsx(PrivateRoute, { path: "/employee-dashboard", component: EmployeeDashboard, role: role, requiredRole: "Employee" }), _jsx(Route, { path: "/HomeView", component: HomeView }), _jsx(Route, { path: "/solutions/ai-solutions-development/", component: ArtificialIntelligenceSolutions })] }) }));
};
const PrivateRoute = ({ component: Component, role, requiredRole, ...rest }) => {
    return (_jsx(Route, { ...rest, render: (props) => role === requiredRole ? _jsx(Component, { ...props }) : _jsx(Redirect, { to: "/login" }) }));
};
export default App;
