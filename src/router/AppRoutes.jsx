import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import NotFound from "@/pages/notFound/notFound.page";
import MainLayout from "../components/layout/mainLayout/mainLayout.component";
import Home from "../pages/home/home.page";
import PageDemoOne from "../pages/home/PageDemoOne.page";
import PageDemoTow from "../pages/home/PageDemoTow.page";

const AppRoutes = () => {
  const router = createHashRouter([
  
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, // 👈 default route (when path is "/")
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "PageDemoOne",
          element: <PageDemoOne />,
        },
        {
          path: "PageDemoTow",
          element: <PageDemoTow />,
        },
        // {
        //   path: "ManagerTask",
        //   element: <ManagerTask />,
        // },
        // {
        //   path: "ManagerLog",
        //   element: <ManagerLog />,
        // },
        // {
        //   path: "procurementtasks",
        //   element: <ProcurementTasks />,
        // },
        // {
        //   path: "procurementlog",
        //   element: <ProcurementLog />,
        // },
        // {
        //   path: "requestDetails/:id", // Dynamic route
        //   element: <RequestDetails />,
        // },
      ],
    },
    // {
    //   path: "/",
    //   element: <MainLayout />,
      
    // },
    // {
    //   path: "/correspondences",
    //   element: <CorrsLayout />,
    //   children: [
    //     {
    //       path: "home",
    //       element: <CorrsHome />,
    //     },
    //     {
    //       path: "myTasks",
    //       element: <MyTasks />,
    //     },
    //     {
    //       path: "createCorrs",
    //       element: <CreateCorrs />,
    //     },
    //     {
    //       path: "incommingcorrsLogs",
    //       element: <IncommingcorrsLogs />,
    //     },
    //     {
    //       path: "outgoingcorrsLogs",
    //       element: <OutgoingcorrsLogs />,
    //     },
    //   ],
    // },
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
