
 import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes =  [
  { path: '*', element: <LoginPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegisterPage /> },
]



