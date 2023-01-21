import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
  return localStorage.getItem("isLogin") !== null ? <Outlet /> : <Navigate to="/" />
}