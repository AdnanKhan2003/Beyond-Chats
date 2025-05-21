import { MdOutlineExpandMore } from "react-icons/md";

import styles from "./VisibleAccordion.module.css";

const VisibleAccordion = ({ title, onClick }) => {
  return (
    <div className={`${styles.visible__accordion}`}>
      <h2 className={`${styles.accordion__list__title}`}>{title}</h2>
      <MdOutlineExpandMore onClick={onClick} />
    </div>
  );
};

export default VisibleAccordion;
