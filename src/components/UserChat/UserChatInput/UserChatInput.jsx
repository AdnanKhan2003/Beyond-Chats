import { FaAngleDown, FaCode } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { MdBookmarks } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { FaIntercom } from "react-icons/fa";
import { BsTypeBold } from "react-icons/bs";
import { RxFontItalic } from "react-icons/rx";
import { PiCodeBlockBold } from "react-icons/pi";
import { PiLinkBold } from "react-icons/pi";
import { TbH1 } from "react-icons/tb";
import { TbH2 } from "react-icons/tb";

import styles from "./UserChatInput.module.css";
import { useRef, useState } from "react";

const UserChatInput = ({ onSubmitMsg, activeProfileId, onInputChange, inputValue }) => {
  // const [chatMessage, setChatMessage] = useState();
  const [selectedText, setSelectedText] = useState();
  const [showComponent, setShowComponent] = useState();
  const [showAiComponent, setShowAiComponent] = useState();

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [heading1, setHeading1] = useState(false);
  const [heading2, setHeading2] = useState(false);
  const inputRef = useRef();

  const handleTextSelection = () => {
    const input = inputRef.current;
    if(!input) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;
    
    
    if(start !== end) {
        const text = inputValue.substring(start, end);
        setSelectedText(text);
        setShowComponent(true);
      } else {
        setShowComponent(false);
    }
  };

  const handleAiOptionClick = () => {
    setShowAiComponent(prevState => !prevState);
  };
  

  const handleClickSubmit = () => {   
    onSubmitMsg(inputValue, activeProfileId);
    onInputChange("")
  };

  const handleClickEvent = (e) => {
    const clickedElement = e.target;
    console.log(clickedElement);
  };

  const handleTransformBold = () => {
    setBold(prevState => !prevState)
  };

  const handleTransformItalic = () => {
    setItalic(prevState => !prevState)
  };

  const handleTransformHeading1 = () => {
    setHeading1(prevState => !prevState)
  };
  const handleTransformHeading2 = () => {
    setHeading2(prevState => !prevState)
  };


  return (
    <div className={`${styles.userchat__input__container}`}>
      <div className={`${styles.userchat__input__wrapper}`}>
        <div className={`${styles.userchat__input}`}>
          <div className={`${styles.userchat__input__option}`}>
            <span className={`${styles.icon} ${styles.icon__1}`}>
              <BsChatLeftTextFill />
            </span>
            <span className={`${styles.icon} ${styles.text}`}>Chat</span>
            <span className={`${styles.icon} ${styles.icon__2}`}>
              <FaAngleDown />
            </span>
          </div>

          {
            showAiComponent && 
            <div className={`${styles.ai__options__container}`}>
              <p className={`${styles.ai__options}`}>Rephrase</p>
              <p className={`${styles.ai__options}`}>My Tone Of Voice</p>
              <p className={`${styles.ai__options}`}>More Friendly</p>
              <p className={`${styles.ai__options}`}>More Formal</p>
              <p className={`${styles.ai__options}`}>Fix Grammar & Spelling</p>
              <p className={`${styles.ai__options}`}>Translate..</p>
            </div>
          }
          {
            showComponent && 
              (
              <div className={`${styles.text__format__container}`} onClick={handleClickEvent}>
                  <div className={`${styles.options__group}`}>
                    <div onClick={handleAiOptionClick} title="Ai" className={`${styles.option} ${styles.option__ai}`}>
                        <FaIntercom />
                    </div>
                  </div>
                  <div className={`${styles.options__group}`}>
                    <div title="Bold" onClick={handleTransformBold} className={`${styles.option} ${styles.option__bold}`}>
                        <BsTypeBold />
                    </div>
                    <div title="Italic" onClick={handleTransformItalic} className={`${styles.option} ${styles.option__italic}`}>
                        <RxFontItalic />
                    </div>
                    <div title="Code: Currently Not Available" className={`${styles.option} ${styles.option__code}`}>
                        <FaCode />
                    </div>
                    <div title="Link: Currently Not Available" className={`${styles.option} ${styles.option__link}`}>
                        <PiLinkBold />
                    </div>
                  </div>
                  <div className={`${styles.options__group}`}>
                    <div title="Heading" className={`${styles.option} ${styles.option__h1}`} onClick={handleTransformHeading1}>
                        <TbH1 />
                    </div>
                    <div title="Bigger Heading" className={`${styles.option} ${styles.option__h2}`} onClick={handleTransformHeading2}>
                        <TbH2 />
                    </div>
                    <div  title="Code Whole: Currently Not Available" className={`${styles.option} ${styles.option__code__container}`}>
                        <PiCodeBlockBold />
                    </div>
                  </div>
              </div>
              )
          }
          <textarea
            name="userInput"
            onChange={(e) => onInputChange(e.target.value)}
            onSelect={handleTextSelection}
            value={inputValue}
            ref={inputRef}
            className={`${styles.userinput__box} ${bold && styles.text__bold} ${italic && styles.text__italic} ${heading1 && styles.text__h1} ${heading2 && styles.text__h2}`}
            rows="4"
            placeholder="Use 30K for shortcuts"
          ></textarea>
            

          <div className={`${styles.userinput__EmojisAndSendBtn}`}>
            <div className={`${styles.userinput__EmojisAndSendBtn__left}`}>
              <span className={`${styles.input__icon} ${styles.input__icon__1}`}>
                <SlEnergy />
              </span>
              <div className={`${styles.vertical__line}`}></div>
              <span className={`${styles.input__icon} ${styles.input__icon__2}`}>
                <MdBookmarks />
              </span>

              <span className={`${styles.input__icon} ${styles.input__icon__3}`}>
                <MdEmojiEmotions />
              </span>
            </div>
            <div className="userinput__EmojisAndSendBtn__right">
              <div 
                onClick={handleClickSubmit}
               className={`${styles.button__send__container}`}>
                <button 
                onClick={handleClickSubmit}
                // onClick={(e) => handleClickSubmit(e, true)}
                 type="submit" className={`${styles.btn__send}`}>
                  Send
                </button>
                <div className={`${styles.vertical__line}`}></div>
                <span className={`${styles.btn__send__icon}`}>
                    <FaAngleDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatInput;
