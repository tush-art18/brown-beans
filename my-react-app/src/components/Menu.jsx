import React from 'react';

const Menu = () => {
  return (
    <div className="Explor">
        <h2 id="eam">Explore Our Menu</h2>
        <div className="upper">
            <div className="card-1 reveal-stagger">
                <div className="pho-1">
                   <img src="/coffee-latte.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Coffee Latte</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="card-2 reveal-stagger">
                <div className="pho-2">
                    <img src="/Dalgona-Coffee.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Dalgona Coffee</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="card-3 reveal-stagger">
                <div className="pho-3">
                    <img src="/Americano Coffee.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Americano Coffee</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
        <div className="middel">
            <div className="card-4 reveal-stagger">
                <div className="pho-4">
                    <img src="/ESPRESSO COFFEE SHOP.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Espresso Coffee</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="card-5 reveal-stagger">
                <div className="pho-5">
                    <img src="/Matcha.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Matcha</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="card-6 reveal-stagger">
                <div className="pho-6">
                    <img src="/cappuccino.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Cappuccino</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
        <div className="lower">
            <div className="card-7 reveal-stagger">
                <div className="pho-7">
                    <img src="/Vanilla-Latte.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Vanilla Latte</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="card-8 reveal-stagger">
                <div className="pho-8">
                   <img src="/cold-coffee.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Cold Coffee</p>
                     <button id="btn">
                       Order Now
                    </button>
                </div>
            </div>
            <div className="card-9 reveal-stagger">
                <div className="pho-9">
                   <img src="/Caffe- Mocha.jpeg" alt="" />
                </div>
                <div className="cont">
                    <p>Coffee Mocha</p>
                     <button id="btn">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Menu;
