import React, {useEffect } from 'react'
import { Routes, Route } from'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import UserHome from "../../pages/user/UserHome.js";
import UserProfile from '../../pages/user/UserProfile.js';

import isAuthUser from '../../utils/isAuthUser';
import { set_Authentication } from "../../redux/authentication/authenticationSlice";
import { set_user_basic_details } from '../../redux/userBasicDetails/userBasicDetailsSlice';
import axios from 'axios';
import UserFooter from './UserFooter.js';
import UserHeader from './UserHeader.js';


const UserWrapper = () => {
    const dispatch = useDispatch();
    const authentication_user = useSelector((state) => state.authentication_user);

    const checkAuth = async () => {
        const isAuthenticated = await isAuthUser();
        dispatch(
          set_Authentication({
            name: isAuthenticated.name,
            isAuthenticated: isAuthenticated.isAuthenticated,
          })
        );
    };

    const baseURL = "http://127.0.0.1:8000";
  const token = localStorage.getItem("access");

  const fetchUserData = async () => {
    try {
      await axios.get(baseURL + "/api/v1/accounts/user/details/", {
          headers: {
            authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("hiiiiiiiiiiiiiiiiii   :",res.data);
          dispatch(
            set_user_basic_details({
              name: res.data.first_name,
              profile_pic: res.data.profile_pic,
            })
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!authentication_user.name) {
      console.log("the auth user  ");
      checkAuth();
    }
    if (authentication_user.isAuthenticated) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, [authentication_user]);
      
  return (
    <>
        <UserHeader />
        <Routes>
            <Route path="/" element={<UserHome />} />
        </Routes>
        {/* <UserFooter /> */}
    </>
  )
}

export default UserWrapper