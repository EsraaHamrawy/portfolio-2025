import { lazy, Suspense } from "react";
import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout/mainLayout.component";
const Home = lazy(() => import("../pages/home/home.page"));
const ProjectShowcase = lazy(() => import("../pages/home/ProjectShowcase.page"));
const ProjectHighlights = lazy(() => import("../pages/home/ProjectHighlights.page"));
const NotFound = lazy(() => import("@/pages/notFound/notFound.page"));

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "showcase",
        element: <ProjectShowcase />,
      },
      {
        path: "highlights",
        element: <ProjectHighlights />,
      },
    ],
  },
  {
    path: "/notFound",
    element: <NotFound />,
  },

  {
    path: "*",
    element: <Navigate to="/notFound" />,
  },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
