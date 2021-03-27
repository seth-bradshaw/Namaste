import React, { useEffect } from "react";
import { actions as userActions } from "./store/ducks/userDuck";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const { status, activeUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(activeUser);

  useEffect(() => {
    dispatch(userActions.getUserThunk());
    console.log("here");
  }, []);
  return <div></div>;
}
