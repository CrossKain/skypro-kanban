import { Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import TaskCard from "./pages/TaskCard";
import ExitPage from "./pages/ExitPage";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { RoutesObject } from "./utils/Routes/Routes";
import Card from "./components/Card/Card";
import PageWrapper from "./components/PageWrapper/PageWrapper";

const AppRoutes = () => {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
    navigate("/");
  };

  return (
    <PageWrapper>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path={RoutesObject.MAIN} element={<MainPage />}>
            <Route
              path={RoutesObject.CARD}
              element={
                <TaskCard>
                  <Card />
                </TaskCard>
              }
            />
          </Route>
          <Route path={RoutesObject.EXIT} element={<ExitPage />} />
        </Route>

        <Route
          path={RoutesObject.LOGIN}
          element={<LoginPage login={login} />}
        />
        <Route path={RoutesObject.NOTFOUND} element={<NotFound />} />
        <Route
          path={RoutesObject.REGISTRATION}
          element={<RegistrationPage />}
        />
      </Routes>
    </PageWrapper>
  );
};

export default AppRoutes;
