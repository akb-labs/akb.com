import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import './styles/index.css'

export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
})
