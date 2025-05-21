import AccordionOption from "./AccordionOption/AccordionOption";
import VisibleAccordion from "./VisibleAccordion/VisibleAccordion";

import { useState } from "react";

import styles from "./AccordionList.module.css";

// const AccordionList = ({ title, Icon, label }) => {
const AccordionList = ({ title, options }) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleExpandClick = () => {
    setIsClosed(prevState => !prevState);
  };

  return (
    <li className={`${styles.details__accordion__list}`}>
      
      <VisibleAccordion title={title.toUpperCase()} onClick={handleExpandClick} />
      {/* <AccordionOption Icon={Icon} label={label} /> */}
      {!isClosed && options.map(({Icon, label}, i) => {
        return <AccordionOption key={i} Icon={Icon} label={label} />
      })}
    </li>
  );
};

export default AccordionList;
