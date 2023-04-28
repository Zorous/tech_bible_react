import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import YouMightLikeItem from "./YouMightLikeItem";

const YouMightLikeApp = () => {
  const { currentUser, currentUserData, isAdmin } = useContext(AuthContext);
  // const [userData, setUserData] = useContext()
  const [Tools, setTools] = useState();

  // useEffect(()=>(console.log("current user",currentUser)),[currentUser])

  const LoadingMightLike = async () => {
    const ToolsRef = collection(db, "Tools");
    const tools = [];
    const q = query(ToolsRef, where("category", "in", currentUser?.interests));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        Tools.push(doc.data());
        setTools(Tools);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row" style={{ display: "flex" }}>
        <YouMightLikeItem title="" description="" icon="" />
      </div>
    </div>
  );
};

export default YouMightLikeApp;
