import { BsFillPeopleFill } from "react-icons/bs";

import tomLogo from "../../../../assets/images/users/tom.jpg";

import styles from "./AiChatDetails.module.css";
import AiDetailsPropertyRow from "./AiDetailsPropertyRow/AiDetailsPropertyRow.jsx";
import AccordionOption from "./AccordionList/AccordionOption/AccordionOption.jsx";
import VisibleAccordion from "./AccordionList/VisibleAccordion/VisibleAccordion.jsx";
import AccordionList from "./AccordionList/AccordionList.jsx";

const AiChatDetails = () => {
  const accordion__lists = [
    {
      title: 'Links',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'User data',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'Conversation Attributes',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'Company Details',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'Salesforce',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'Stripe',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
    {
      title: 'Jira For Tickets',
      options: [
        {
          Icon: BsFillPeopleFill,
          label: "Tracker Ticket",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Back-office Tickets",
        },
        {
          Icon: BsFillPeopleFill,
          label: "Side conversations",
        },
      ],
    },
  ];

  return (
    <div className="details__container">
      <div className={`${styles.details__wrapper}`}>

        <div className={`${styles.details__info__container}`}>
          <AiDetailsPropertyRow
            label="Assignee"
            value="Aman Khan"
            logo={tomLogo}
          />
          <AiDetailsPropertyRow label="Team" />
        </div>

        <div className="details__accordion__container">
          <ul className={`${styles.details__accordion}`}>
            {/* <AccordionList title="Links" Icon={BsFillPeopleFill} label="asd; sdafk" /> */}
            {accordion__lists.map((accordion, i) => {
              console.log(accordion.title);
              return <AccordionList key={i} title={accordion.title} options={accordion.options} />
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AiChatDetails;
