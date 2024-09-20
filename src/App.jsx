import React from 'react';
import Countetr from './Countetr';
import ImageCat from './ImageCat';
import Tab from './Tab';
import SelectedItems from './SelectedItems';
import StarRating from './StarRating';

//import Accordian from './Accordian';
// import './App.css'; // Import CSS here
import Stepper from './Stepper';
import Calculator from './Calculator';
import Traffic from './Traffic';
import ModalPopup from './ModelPopup';
import PasswordStrength from './PasswordStrength';
import TodoList from './TodoList';
import StopWatch from './StopWatch';
import QuizApp from "./QuizApp";
import TransferList from './TransferList';
import InfiniteScroll from './InfiniteScroll';
import WordConnect from "./WordConnect";
import ChipsInput from './ChipsInput';
import FoodResipe from "./FoodResipe";

const items = [
  {
    title: 'Item 1',
    content: 'This is the content for item 1.',
  },
  {
    title: 'Item 2',
    content: 'This is the content for item 2.',
  },
  {
    title: 'Item 3',
    content: 'This is the content for item 3.',
  },
];
const steps = [
  {
    label: 'Contact Details',
   
  },
  {
    label: 'Shipping Address',
    
  },
  {
    label: 'Payment',
    
  },
  {
    label: 'Delivered',
    content: (
      <div>
        <h2>Delivered</h2>
        <p>Your order has been delivered! Thank you for shopping with us.</p>
      </div>
    ),
  },
];

const App = () => {
  return (
    <div className="App">
      {/* <Accordian items={items} /> */}
      {/* <Countetr /> */}
      {/* <ImageCat /> */}
      {/* <Tab /> */}
      {/* <SelectedItems/> */}
      {/* <StarRating totalstars={5} initialRating={3}  /> */}
      {/* <Stepper steps={steps}/> */}
      {/* <Calculator /> */}
      {/* <Traffic /> */}
      {/* <ModalPopup /> */}
      {/* <PasswordStrength /> */}
      {/* <TodoList /> */}
      {/* <StopWatch /> */}
      {/* <QuizApp /> */}
      {/* <TransferList /> */}
      {/* <InfiniteScroll /> */}
      {/* <WordConnect /> */}
      {/* <ChipsInput /> */}
      <FoodResipe />
    </div>
  );
};

export default App;
