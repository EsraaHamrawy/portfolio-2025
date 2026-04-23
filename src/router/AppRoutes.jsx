import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import NotFound from "@/pages/notFound/notFound.page";
import MainLayout from "../components/layout/mainLayout/mainLayout.component";
import Home from "../pages/home/home.page";
import ProjectShowcase from "../pages/home/ProjectShowcase.page";
import ProjectHighlights from "../pages/home/ProjectHighlights.page";

const AppRoutes = () => {
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

  return <RouterProvider router={router} />;
};

export default AppRoutes;
