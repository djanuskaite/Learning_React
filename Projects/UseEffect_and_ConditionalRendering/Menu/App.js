import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// getting unique categories 
const allCategories = ['all', ...new Set(items.map((item) => item.category))];  // by adding new set we get values without repetition & [] - here goes all category values
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // if the category === all then set menu items to the default - original items array
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category); // if the item category property matches to the string that im passing in then return my that item to my new items array
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
