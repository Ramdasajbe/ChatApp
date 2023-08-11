import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Protected({ Compo }) {
  const history = useHistory();
  const { loggedIn } = useSelector((state) => state.user);

  loggedIn && history.push("/Signup");

  return (
    <div>
      <Compo />
    </div>
  );
}
