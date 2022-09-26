import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { addUser } from "logic/actions";
import { useAppDispatch, useAppSelector } from "logic/hooks";
import { PrimaryBtn } from "shared/button/style";
import { Err } from "shared/styles/styled";
import { InputCont, LoginCont } from "./style";

const Login = () => {
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("test@123");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userData);
  const isValidUser = email === "test@email.com" && password === "test@123";

  useEffect(() => {
    if (user.name) {
      navigate("/todos");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidUser) {
      setShowError(true);
    } else {
      setShowError(false);

      dispatch(
        addUser({
          email: "test@email.com",
          name: "John doe",
          address: "221 b, Baker street, London",
          phone: "3055049089",
          birthday: "July 1, 1948",
          zodiac: "leo",
          age: 74,
          username: "johnDoe",
          countryCode: 1,
          company: "Ola",
          occupation: "Driver",
        })
      );
    }

    navigate("/todos");
  };

  return (
    <LoginCont>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <InputCont>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputCont>
        <PrimaryBtn type="submit">Login</PrimaryBtn>

        {showError && <Err>Invalid User</Err>}
      </form>
    </LoginCont>
  );
};

export default Login;
