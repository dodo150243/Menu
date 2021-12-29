import React, { useState } from "react";
import Categories from "./Categories"
import Menu from "./Menu";
import items from "./data";

const App = () => {
  const [menuItems, setMenuItem] = useState(items);
  const [allCategories, setAllCategories] = useState([
   "all", ...new Set(items.map((item) => item.category)),
  ]);

  // const [allCategories, setAllCategories] = useState([
  //   ...new Set(items.map((item) => item.category)),
  // ]);
const filterItems = (category) => {
  if(category === "all") setMenuItem(items);
  else{
  const newItems = items.filter((item) => item.category === category );
  setMenuItem(newItems);
  }
};
  return (
    <main>
      <section className="menu section">
        <div className="title">
            <h2>Our Menu</h2>
            <div className="unserline"></div>
        </div>
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
};

export default App;
