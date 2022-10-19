import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUp from "./components/profile/SignUp";
import Welcome from "./components/Welcome/Welcome";
import { authActions } from "./store/AuthSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(authActions.setIsAuth());
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {!isAuth && <SignUp />}
      {!isAuth && (
        <Route path="/welcome">
          <Redirect to="/" />
        </Route>
      )}
      {isAuth && <Redirect to="/welcome" />}

      <Route path="/welcome">
        <Welcome />
      </Route>
    </>
  );
}

export default App;
