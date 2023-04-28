import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilesPage from "./ProfilesPage";
import ErrorPage from "./error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
