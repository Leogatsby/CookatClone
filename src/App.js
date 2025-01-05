import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/new",
    element: <div>쿠켓신공 페이지</div>,
  },
  {
    path: "/best",
    element: <div>베스트 페이지</div>,
  },
  {
    path: "/new-items",
    element: <div>신상품 페이지</div>,
  },
  {
    path: "/discount",
    element: <div>할인중 페이지</div>,
  },
  {
    path: "/events",
    element: <div>이벤트 페이지</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;