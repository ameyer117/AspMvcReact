import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
          <Route path='/' index element={<Link to="/admin"> Go to admin</Link>} />
          <Route path='/admin' element={<Link to="/">Go home</Link>}>
          </Route>
      </>
  ),
)

export default function Example() {
  return <RouterProvider router={router} />
}
