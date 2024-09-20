import React, { useState } from 'react';

const AccordianItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h1>{title}</h1>
        <span className="accordion-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content open">{content}</div>}
    </div>
  );
};

const Accordian = ({ items }) => {
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <AccordianItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };
  
  export default Accordian;

