import React from "react";
import "./ListElements.css";

const List = ({ data }) => {
  return (
    <div id="userwrapper">
      <div id="user">
        <img
          id="usericon"
          src={
            process.env.PUBLIC_URL + "assets/Graphicloads-100-Flat-Contact.ico"
          }
        />
        <div id="userdetails">
          <div id="userdetail">
            <div id="username">{data.uname}</div>
            <div id="userdescription">&nbsp; - {data.desc}</div>
          </div>
          <div id="useremail">{data.email}</div>
        </div>
        <input id="usercheckbox" type="checkbox" name="checkbox" />
      </div>
    </div>
  );
};

export default List;
