import React, { useEffect } from "react";
import { actions as userActions } from "./store/ducks/userDuck";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const { status, activeUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUserThunk());
  }, []);
  return <div></div>;
}
