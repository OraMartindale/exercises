import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title='Model S'
          desc='Order Online for Touchless Delivery'
          backgroundImage={ModelS}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
          first
        />
        <Item
          title='Model Y'
          desc='Order Online for Touchless Delivery'
          backgroundImage={ModelY}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
        />
        <Item
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          backgroundImage={Model3}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
        />
        <Item
          title='Model X'
          desc='Order Online for Touchless Delivery'
          backgroundImage={ModelX}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
        />
        <Item
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          backgroundImage={SolarPanels}
          leftBtnTxt='Order Now'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
        />
        <Item
          title='Solar for New Roofs'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          backgroundImage={SolarRoof}
          leftBtnTxt='Order Now'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
