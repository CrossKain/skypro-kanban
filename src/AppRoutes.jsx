import { Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { RoutesObject } from "./utils/Routes/Routes";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import EditCardPopup from "./components/EditCardPopup";
import PopExit from "./components/PopExit";

const AppRoutes = () => {
  
  const [isAuth, setAuth] = useState(false);


  return (
    <PageWrapper>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path={RoutesObject.MAIN} element={<MainPage />}>
            <Route path={RoutesObject.CARD} element={<EditCardPopup />} />
            <Route path={RoutesObject.EXIT} element={<PopExit />} />
          </Route>
          
        </Route>

        <Route
          path={RoutesObject.LOGIN}
          element={<LoginPage setAuth={setAuth} />}
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
