import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { addUser } from "logic/actions";
import { useAppDispatch, useAppSelector } from "logic/hooks";
import { PrimaryBtn } from "shared/button/style";
import { ProfileCont, Title } from "./style";

const Profile = () => {
  const { user } = useAppSelector((state) => state.userData);
  const [isEditEnable, setEditEnable] = useState(false);
  const [name, setName] = useState(user.name);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getFormattedPhone = (num: string) =>
    num.slice(0, 3) + "-" + num.slice(3, 6) + "-" + num.slice(6);

  useEffect(() => {
    if (!user.name) {
      navigate("/error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileCont>
      <h1>Profile</h1>
      <main>
        {!isEditEnable && <h3>{user.name}</h3>}

        {isEditEnable && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <PrimaryBtn
          onClick={() => {
            if (isEditEnable) {
              dispatch(addUser({ ...user, name }));
              setEditEnable(false);
            } else {
              setEditEnable(true);
            }
          }}
        >
          {isEditEnable ? "Save" : "Edit name"}
        </PrimaryBtn>
      </main>
      <p>{user.address}</p>

      <section>
        <Title>Phone</Title>
        <dl>
          <dt>Phone</dt>
          <dd>{getFormattedPhone(user.phone)}</dd>
        </dl>

        <dl>
          <dt>Country Code</dt>
          <dd>{user.countryCode}</dd>
        </dl>
      </section>

      <Title>birthday</Title>
      <dl>
        <dt>Birthday</dt>
        <dd>{user.birthday}</dd>
      </dl>
      <dl>
        <dt>Age</dt>
        <dd>{user.age}</dd>
      </dl>
      <dl>
        <dt>Zodiac</dt>
        <dd>{user.zodiac}</dd>
      </dl>

      <Title>online</Title>

      <dl>
        <dt>Email address</dt>
        <dd>{user.email}</dd>
      </dl>
      <dl>
        <dt>Username</dt>
        <dd>{user.username}</dd>
      </dl>
      <Title>employment</Title>

      <dl>
        <dt>Company</dt>
        <dd>{user.company}</dd>
      </dl>
      <dl>
        <dt>Occupation</dt>
        <dd>{user.occupation}</dd>
      </dl>
    </ProfileCont>
  );
};

export default Profile;
