import { BsFillPeopleFill } from "react-icons/bs";

import tomLogo from "../../../../../assets/images/users/tom.jpg";

import styles from "./AiDetailsPropertyRow.module.css";

const AiDetailsPropertyRow = ({ label, value = 'Unassigned', logo }) => {
  return (
    <div
      className={`${styles.details__info__row} ${styles.details__info__row__1}`}
    >
      <h5 className={`${styles.details__properties}`}>{label}</h5>
      <div className={`${styles.details__value__container}`}>
        <span className={`${styles.details__value__icon}`}>
          {logo && <img src={tomLogo} alt="" />}
          {!logo && <BsFillPeopleFill />}
        </span>
        <p className={`${styles.details__value}`}>{value}</p>
      </div>
    </div>
  );
};

export default AiDetailsPropertyRow;
