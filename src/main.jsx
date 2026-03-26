import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './components/Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h3 className="text-white mt-52 text-3xl font-semibold text-center" disabled>
    <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>Processing…..</h3>}>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
)
