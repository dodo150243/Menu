import React from 'react';
import MenuItem from './MenuItem';
const Menu = ({items}) => {
  return (
    <div className='section-center'>
        {items.map((menuItem)=>{
          const {id, title, price, img, desc, category} = menuItem;
          return(
           <MenuItem id={id} title={title} price={price} img={img} desc={desc}/>
          ) 
        })}
    </div>
  );
};

export default Menu;
