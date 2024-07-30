import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Navigation = () => {
    return (_jsx("nav", { className: "navbar", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "/", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "/login", children: "Login" }) }), _jsx("li", { children: _jsx("a", { href: "/register", children: "Register" }) }), _jsx("li", { children: _jsx("a", { href: "/admin-dashboard", children: "Admin Dashboard" }) }), _jsx("li", { children: _jsx("a", { href: "/employee-dashboard", children: "Employee Dashboard" }) })] }) }));
};
const HomePageBanner = () => {
    return (_jsxs("div", { className: "banner", children: [_jsx(Navigation, {}), _jsxs("div", { className: "banner-content", children: [_jsx("h1", { children: "Welcome to Our Software Company" }), _jsx("p", { children: "Explore our solutions for your business needs." })] })] }));
};
const Home = () => {
    return (_jsxs("div", { children: [_jsx(HomePageBanner, {}), _jsxs("div", { className: "main-content", children: [_jsx("h2", { children: "Company Overview" }), _jsx("p", { children: "Content about the company and its services..." })] })] }));
};
export default Home;
