import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { GetJournalRoutes } from "../journal";
import { BlockCheck } from "../ui/";
import { useCheckOut } from "../hooks";

const GetAppRoutes = createBrowserRouter([
  {
    path: "/",
    children: GetJournalRoutes,
  },
]);

const GetAuthRoutes = createBrowserRouter([{
  path: "/auth/*",
  children: AuthRoutes,
}]);

export default function AppRouter() {
  const status = useCheckOut();

  if (status === "checking") {
    return <BlockCheck />;
  }

  return (
    <>
    {
      status === "authenticated"
      ? <RouterProvider router={GetAppRoutes} />
      : <RouterProvider router={GetAuthRoutes} />
    }
    </>
  );
}
