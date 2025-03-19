import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/custom/header.jsx'
import ViewEvent from './viewEvent/viewEvent.jsx'
import EventIndex from './createEvent/eventIndex.jsx'
import AppStore from './store/appStore.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import ErrorBoundary from './errorBoundary.jsx'
import About from './components/custom/about.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/create-event',
//     element: <EventIndex />,
//   },
//   {
//     path: '/view-event',
//     element: <ViewEvent />,
//   },
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLEOAuth_CLIENT_ID}>
      <BrowserRouter> {/* ✅ Use only BrowserRouter */}
          <ErrorBoundary>
            <Header />
            <Routes> {/* ✅ Use Routes instead of RouterProvider */}
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/create-event" element={<EventIndex />} />
              <Route path="/view-event" element={<ViewEvent />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
)
