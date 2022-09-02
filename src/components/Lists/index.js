import React, { useState, useEffect } from "react";
import List from "../List/index";

const Lists = ({ datas }) => {
  let [Data, setData] = useState([]);

  useEffect(() => {
    updateData();
  }, [datas]);

  const updateData = () => {
    setData(() => {
      return datas.map((data, idx) => {
        return <List data={data} key={idx} />;
      });
    });
  };
  return <div>{Data}</div>;
};

export default Lists;
