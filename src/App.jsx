import Layout from './routes/Layout/Layout';
import Home from "./routes/Home/Home";
import List from "./routes/List/List";
import Single from './routes/Single/Single';
import Profile from './routes/Profile/Profile';
import './routes/Layout/Layout.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list",
          element: <List />
        },
        {
          path: "/:id",
          element: <Single />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router} />
  )
}

export default App
