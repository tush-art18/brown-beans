import React from 'react';

const CategoryMenu = () => {
  return (
    <div className="menu-icon">
        <div className="inner">
            <div className="cold-coffee reveal-stagger">
                <img src="/cold-coffee.png" alt="" />
                <h2 id="cc">Cold Coffee</h2>
            </div>
            <div className="hot-coffee reveal-stagger">
                <img src="/hot-coffee.png" alt="" />
                <h2 id="hc">Hot Coffee</h2>
            </div>
            <div className="cup-coffee reveal-stagger">
                <img src="/cup-coffee.png" alt="" />
                <h2 id="ccee">Cup Coffee</h2>
            </div>
            <div className="dessert reveal-stagger">
                <img src="/dessert.png" alt="" />
                <h2 id="de">Dessert</h2>
            </div>
        </div>
    </div>
  );
};

export default CategoryMenu;
