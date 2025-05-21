import { IoAddCircle } from "react-icons/io5";

import styles from "./AccordionOption.module.css";

const AccordionOption = ({ Icon, label }) => {
  return (
    <div className={`${styles.accordion__option__container}`}>
      <div className={`${styles.accordion__option}`}>
        {Icon && <Icon />}
        <p className={`${styles.accordion__option__property}`}>{label}</p>
      </div>
      <div className="accordion__icon">
        <IoAddCircle />
      </div>
    </div>
  );
};

export default AccordionOption;
