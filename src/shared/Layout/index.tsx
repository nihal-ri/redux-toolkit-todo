import { Link } from "react-router-dom";

import { AppWrapper, ButtonWrap, PositionDiv } from "modules/todo/styles";
import { useAppDispatch, useAppSelector } from "logic/hooks";
import { toggleDarkMode } from "logic/actions";
import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";
import { PrimaryBtn } from "shared/button/style";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userData);

  const { isDarkmode } = useAppSelector((state) => state.UI);

  const changeTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppWrapper>
      <nav>
        {user.name && (
          <ButtonWrap>
            <PrimaryBtn as={Link} to="/posts">
              Posts
            </PrimaryBtn>
            <PrimaryBtn as={Link} to="/profile">
              Hello, <span>{user.name.split(" ")[0]}</span>
            </PrimaryBtn>
          </ButtonWrap>
        )}
        <PositionDiv>
          <button onClick={changeTheme}>
            <img src={isDarkmode ? Sun : Moon} alt="theme icon" />
          </button>
        </PositionDiv>
      </nav>

      {children}
    </AppWrapper>
  );
};

export default Layout;
