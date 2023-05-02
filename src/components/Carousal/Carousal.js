import react from 'react';
import Carousal from "react-elastic-carousel";
import { useState } from "react";
import { render } from '@testing-library/react';

function Carousel() {
    const [items, setItems] = useState([
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ]);
  
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    );
  }
  
  export default Carousel;
  