import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./pages/components/Header";
import Game from "./pages/Game.page";
import Home from "./pages/Home.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/game', element: <Game /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
