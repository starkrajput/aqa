/* eslint-disable @typescript-eslint/no-explicit-any */
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import VerifyOtp from './components/VerifyOtp';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import ForgotPassword from './components/ForgotPasswordForm';
/*import Home from './pages/Home';*/
import HomeView from './pages/HomeView';
import ArtificialIntelligenceSolutions from './pages/Myself/Services/ArtificialIntelligenceSolutions';

const App: React.FC = () => {
    const role = localStorage.getItem('role');

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/verify-otp" component={VerifyOtp} />
                <Route path="/reset-password/:token" component={ResetPassword} />
                <PrivateRoute path="/admin-dashboard" component={AdminDashboard} role={role} requiredRole="Admin" />
                <PrivateRoute path="/employee-dashboard" component={EmployeeDashboard} role={role} requiredRole="Employee" />
                {/* Add route for CustomerDashboard once implemented */}
                <Route  path="/Home" component={HomeView} />
                <Route path="/solutions/ai-solutions-development/" component={ArtificialIntelligenceSolutions} />
            </Switch>
        </Router>
    );
};

const PrivateRoute: React.FC<{ component: React.FC<any>; path: string; role: string | null; requiredRole: string }> = ({ component: Component, role, requiredRole, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                role === requiredRole ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};



export default App;
