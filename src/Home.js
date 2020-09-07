import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YzMyYzc0NzQt/YzMyYzc0NzQt-ZDM4YTMwNjMt-w1500._CB408853872_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="100"
          image="https://images-na.ssl-images-amazon.com/images/I/419MqI3z2DL._AC_SY200_.jpg"
          price={135.65}
          rating={5}
          title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel Core i3-8145U CPU, 8GB RAM, 128GB SSD, Windows 10 in S Mode, F512FA-AB34, Slate Gray"
        />
        <Product
          id="101"
          image="https://images-na.ssl-images-amazon.com/images/I/51sAtKgDkDL._AC_.jpg"
          price={187.6}
          rating={4}
          title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
        />
      </div>

      <div className="home__row">
        <Product
          id="102"
          image="https://images-na.ssl-images-amazon.com/images/I/61RwCe6KexL._AC_SL1500_.jpg"
          price={35.65}
          rating={3}
          title="
          TP-Link WiFi 6 AX3000 Smart WiFi Router – 802.11ax Router, Gigabit Router, Dual Band, OFDMA, MU-MIMO, Parental Controls, Free HomeCare,Works with..."
        />

        <Product
          id="103"
          image="https://images-na.ssl-images-amazon.com/images/I/71Uo2URSf9L._AC_SL1500_.jpg"
          price={135.65}
          rating={3}
          title="Black Diamond Moji Lantern"
        />
        <Product
          id="104"
          image="https://images-na.ssl-images-amazon.com/images/I/91El2O1fBoL._AC_SL1500_.jpg"
          price={135.65}
          rating={4}
          title="Carhartt 2-in-1 Insulated Cooler Backpack, Brown"
        />
      </div>
    </div>
  );
}

export default Home;
