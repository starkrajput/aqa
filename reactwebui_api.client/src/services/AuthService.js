/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/AuthService.ts
import axios from 'axios';
const apiUrl = 'https://localhost:7271/api/';
const AuthService = {
    register: async function (email, password, name, mobileNumber, mysteryWord, usernameSec, role) {
        try {
            const response = await axios.post(apiUrl + 'Auth/register', { email, password, name, mobileNumber, mysteryWord, usernameSec, role });
            return response.data;
        }
        catch (error) {
            console.error('Registration failed:', error);
            return { success: false, message: 'Registration failed' };
        }
    },
    login: async function (emailOrUsername, password, useEmail) {
        try {
            const response = await axios.post(`${apiUrl}Auth/login`, { EmailOrUsername: emailOrUsername, Password: password, UseEmail: useEmail });
            return response.data;
        }
        catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },
    getUserRole: async function () {
        try {
            const response = await axios.get(`${apiUrl}User/role`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            return response.data.role;
        }
        catch (error) {
            console.error('Failed to fetch user role:', error);
            throw error;
        }
    },
    logout: function () {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    },
    sendOtpByEmail: async function (email) {
        try {
            const response = await axios.post(apiUrl + 'Auth/send-otp', { email });
            return response.data;
        }
        catch (error) {
            console.error('Failed to send OTP:', error);
            return 'Failed to send OTP';
        }
    },
    verifyOtp: async function (email, otpCode) {
        try {
            const response = await axios.post(apiUrl + 'Auth/verify-otp', { email, otpCode });
            return response.data.token;
        }
        catch (error) {
            console.error('OTP verification failed:', error);
            return null;
        }
    },
    forgotPassword: async function (email) {
        try {
            const response = await axios.post(apiUrl + 'Auth/forgot-password', { email });
            return response.data;
        }
        catch (error) {
            //console.error('Failed to send password reset link:', error);
            return 'Failed to send password reset link';
        }
    },
    resetPassword: async function (email, token, newPassword) {
        try {
            const response = await axios.post(apiUrl + 'Auth/reset-password', { email, token, newPassword });
            return response.data;
        }
        catch (error) {
            console.error('Failed to reset password:', error);
            return 'Failed to reset password';
        }
    },
};
export default AuthService;
