import { useState } from "react";

import Layout1 from "../../Layout1/Layout1";
import VerticalCategoryMenuBar from "../../../components/LayoutComponents/VerticalCategoryMenuBar/VerticalCategoryMenuBar";
import CategoryTabsBox from "../../../components/HomePageComponents/CategoryTabsBox/CategoryTabsBox";
import FeaturedTopics from "../../../components/HomePageComponents/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../../components/HomePageComponents/TrustedByBest/TrustedByBest";
import HomeShowcaseCard from "../../../components/Cards/HomeShowcaseCard/HomeShowcaseCard";
import CourseCarouselComp from "../../../components/CarouselComponents/CourseCarouselComp/CourseCarouselComp";
import BannerComp from "../../../components/HomePageComponents/BannerComp/BannerComp";
import TabbedCourseCarouselComp from "../../../components/CarouselComponents/TabbedCourseCarouselComp/TabbedCourseCarouselComp";

import {
  coursesData,
  coursesData2,
  coursesData3,
  coursesData4,
  coursesData5,
  coursesData6,
  coursesData7,
  coursesData8,
  coursesData9,
  det,
  det2,
  det3,
  bannerData,
  categoriesData,
} from "../../../fakedata/fakedata";

import css from "./LoggedInUserHomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LoggedInUserHomePage = () => {
  const [CourseData, setPlaylistId] = useState(coursesData2);
  let CourseData2=coursesData8;
  function onCatSelect(id) {
    switch(id){
      case 1: 
        setPlaylistId(coursesData2);
        CourseData2=coursesData;
        break;
      case 2:
        setPlaylistId(coursesData5);
        CourseData2=coursesData4;
      break;
      case 3:
        setPlaylistId(coursesData5);
        CourseData2=coursesData6;
      break;
      case 4:
        setPlaylistId(coursesData3);
        CourseData2=coursesData;
      break;
      case 5:
        setPlaylistId(coursesData7);
        CourseData2=coursesData8;
      break;
      case 6:
        setPlaylistId(coursesData7);
        CourseData2=coursesData6;
      break;
      case 7:
        setPlaylistId(coursesData2);
        CourseData2=coursesData8;
      break;
      case 8:
        setPlaylistId(coursesData4);
        CourseData2=coursesData3;
      break;
      case 9:
        setPlaylistId(coursesData);
        CourseData2=coursesData2;
      break;
      default: 
      useState(coursesData);
      CourseData2=coursesData8;
    }
  }
  // const [categoryBoxData, setCategoryBoxData] = useState([
  //   {
  //     id: 1,
  //     tab: "Python",
  //     ttl: "Expand your career opportunities with Python",
  //     btnLink: "/topic/python",
  //     desc: "Take one of KNERD’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to Take one of KNERD’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
  //     btnTxt: "Python",
  //     active: true,
  //     courses: [],
  //   },
  //   {
  //     id: 2,
  //     tab: "Excel",
  //     ttl: "Analyze and visualize data with Excel",
  //     btnLink: "/topic/excel",
  //     desc: "Take a Microsoft Excel course from KNERD, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to",
  //     btnTxt: "Excel",
  //     active: false,
  //     courses: [],
  //   },
  // ]);

  // let clickHandler = (id) => {
  //   setCategoryBoxData((prevData) =>
  //     prevData?.map((item) => {
  //       if (item?.id === id) {
  //         item.active = true;
  //         return item;
  //       }
  //       item.active = false;
  //       return item;
  //     })
  //   );
  // };
  return (
    <>
      <Layout1>
        <VerticalCategoryMenuBar onClick={(cat) => onCatSelect(cat)}/>
        <div className={css.ma}>
          <div className={css.banner}>
            <BannerComp bannerData={bannerData[2]} />
          </div>
          <div className={css.m1}>
            <h1 className={css.colTtl}>What to learn next</h1>
            <CourseCarouselComp
              ttl="Students are viewing"
              link="/"
              linkTxt="Txt for link"
              coursesData={CourseData}
              ID="first"
            />
          </div>
          <div className={css.m1}>
            <h1 className={css.colTtl}>Featured courses in</h1>
            <CourseCarouselComp
              ttl="Featured courses in"
              link="/"
              linkTxt="Txt for link"
              coursesData={CourseData2}
              ID="second"
            />
          </div>
          <div className={css.m1}>
            <h1 className={css.colTtl}>What Others are learning</h1>
            <CourseCarouselComp
              ttl="Featured courses in"
              link="/"
              linkTxt="Txt for link"
              coursesData={coursesData9}
              ID="third"
            />
          </div>
          {/* <div className={css.m1}>
            <TabbedCourseCarouselComp
              ttl="Featured courses in"
              link="/"
              linkTxt=" React JS"
              coursesData={coursesData3}
            />
          </div> */}
          {/* <div className={css.m1}>
            <CourseCarouselComp
              ttl="New and noteworthy in Web Development"
              link="/"
              linkTxt="Web Development"
              coursesData={coursesData3}
            />
          </div> */}
        </div>
      </Layout1>
    </>
  );
};

export default LoggedInUserHomePage;
