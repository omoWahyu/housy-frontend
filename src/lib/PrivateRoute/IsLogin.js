import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

export default function PrivateRoute() {
  const Redirect = useNavigate()
  return localStorage.getItem("isLogin") !== null ? <Outlet /> : <Redirect to="/" />
}