import React from "react";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Plan from "../components/Plan";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useNavigate();

  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen_body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen_info">
          <img
            src={
              user.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt=""
          />
          <div className="ProfileScreen_details">
            <h2>{user.email}</h2>
            <div className="ProfileScreen_plans">
              <h2>Plans (Current Plan: premium)</h2>
              <Plan type={"Premium"} quality={"4K"}/>
              <Plan type={"Standard"} quality={"1080"}/>
              <Plan type={"Basic"} quality={"720"}/>

            </div>

            <button
              className="ProfileScreen_signOut"
              onClick={() => {
                auth.signOut();
                history("/");
              }}
            >
              Sign Out
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
//*9864309#
export default ProfileScreen;
