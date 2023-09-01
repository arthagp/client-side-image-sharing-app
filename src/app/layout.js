import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'Splasher',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  )
}
