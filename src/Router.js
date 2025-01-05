import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Main from "./pages/Main/Main";
import New from "./pages/new/New";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/new",
    element: <New />
  },
  {
    path: "/old-path",
    element: <Navigate to="/new" replace /> // "/old-path"로 접근 시 "/new"로 리다이렉트
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

// 동적 라우팅 필요할시
// {
//   path: "/new-items",
//   element: <NewItems />, // 부모 컴포넌트
//   children: [
//     {
//       path: ":id", // 동적 라우팅 (디테일 페이지)
//       element: <NewItemDetail />,
//     },
//   ],
// },
