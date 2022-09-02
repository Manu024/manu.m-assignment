import React, { useState } from "react";
import Lists from "../Lists/index";
import Search from "../Search/index";
import data from "../../Data/Data";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const datas = data.filter((d) => {
    let t1 = d.uname.toLowerCase().replace(" ", "");
    let t2 = searchText.toLowerCase().replace(" ", "");
    if (t2 == "") {
      return true;
    }
    return t1.startsWith(t2);
  });

  const updateText = (value) => {
    setSearchText(() => value);
  };

  return (
    <div id="home">
      <Search updateText={(e) => updateText(e.target.value)} />
      <Lists datas={datas} />
    </div>
  );
};

export default Home;
