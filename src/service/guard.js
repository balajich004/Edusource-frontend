// src/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ApiService from './ApiService';

// For any authenticated user (both admin and user)
export const ProtectedRoute = ({ element: Component }) => {
  const location = useLocation();

  return ApiService.isAuthenticated() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

// For admin role only
export const AdminRoute = ({ element: Component }) => {
  const location = useLocation();

  return ApiService.isAdmin() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

// For user role only
export const UserRoute = ({ element: Component }) => {
  const location = useLocation();

  return ApiService.isUser() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
