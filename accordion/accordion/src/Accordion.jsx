import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currOpen={isOpen}
          onOpen={setIsOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        />
      ))}
    </div>
  );
};

export default Accordion;
