import { useState } from "react";

import css from "./CourseFloatingBuyCard.module.css";

import Button1 from "../../../utils/Buttons/Button1/Button1";
import InputUtil from "../../../utils/FormUtils/InputUtil/InputUtil";

import alarmIcon from "/icons/alarm.png";
import playIcon from "/icons/play.png";
import heartIcon from "/icons/heart.png";

const CourseFloatingBuyCard = (props) => {
  const {
    img = "",
    ttl = "xxxx",
    desc = "xxxx",
    price = 0,
    discPrice = 0,
    disc = 0,
    tmLeft = 0,
    rating = 0,
    rats = 0,
    enrolled = 0,
    authors = ["xxx", "yyy"],
    lastUpdated = new Date(),
    lang = "English",
    subTtl = "English",
  } = props?.data;

  const { scrolled, setCoupon, applyCoupon, setApplyCoupon, setShareModal } =
    props;

  const styleGuide = {
    display: "none",
  };

  const outStyleGuide = {
    position: "fixed",
    top: 0,
    right: "12%",
  };

  return (
    <div className={css.outerDiv} style={scrolled ? outStyleGuide : {}}>
      <div className={css.innRightDiv} style={scrolled ? styleGuide : {}}>
        <div className={css.imgBox}>
          <img src={img} alt="course thumbnail" className={css.crsThumb} />
        </div>
        <div className={css.maskDiv}></div>
        <div className={css.imgMask}>
          <div className={css.imgODiv}>
            <img src={playIcon} className={css.imgIcon} />
          </div>
          <div className={css.maskTxt}>Preview the course</div>
        </div>
      </div>
      <hr />
      <div className={css.footerSec}>
        <div className={css.fooTtl}>Training 5 or more people?</div>
        <div className={css.fooDesc}>
          Get your team access to 17,000+ top KNERD courses anytime, anywhere.
        </div>
        <Button1
          txt="Try KNERD Business"
          extraCss={{ width: "100%", padding: "0.7rem", margin: 0 }}
        />
      </div>
    </div>
  );
};

export default CourseFloatingBuyCard;
