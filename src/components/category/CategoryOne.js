import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const items = [
    {
        title: 'Programming Fundamentals using Microsoft .NET & C#',
        info: 'Learn Programming with Microsoft .Net C#',
        CourseDuration: '8 Weeks',
        image: 'course-01.jpg',
        link: '/course-details/1'
    },
    {
        title: 'UI/UX & Graphic Designing',
        info: 'Gain comprehensive knowledge of graphic designing and UI/UX design.',
        CourseDuration: '8 Weeks',
        image: 'course-02.jpg',
        link: '/course-details/2'
    },
    {
        title: 'Advertising with Meta',
        info: 'This course will establish you as an expert in Meta Ads Manager.​',
        CourseDuration: '8 Weeks',
        image: 'course-04.jpg',
        link: '/course-details/4'
    },
];

const CategoryOne = ({ wrapperClass, styleClass, buttonStatus }) => {
    return (
        <>
            <div className={`row ${wrapperClass || 'g-5 mt--25'}`}>
                {items.map((data, i) => (
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className={`col-lg-4 col-md-6 col-sm-6 col-12 ${styleClass ? styleClass : ''}`}
                        animateOnce={true}
                        key={i}
                    >
                        <div className="service-card service-card-1 radius-small">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href={data.link}>
                                        <img src={`${process.env.PUBLIC_URL}./images/course/course-01/${data.image}`} alt="Category Thumb" />
                                    </a>
                                </div>
                                <div className="content">
                                    <span className="course-total">{data.numberOfCourses}</span>
                                    <h6 className="title"><a href={data.link}>{data.title}</a></h6>
                                    <p className="description">{data.info}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
            {buttonStatus !== 'disable' &&
                <div className="row text-center mt--60">
                    <div className="col-lg-12">
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            className="load-more-btn"
                            animateOnce={true}
                        >
                            <Link className="edu-btn" to="/courses">All Courses​<i
                                className="icon-arrow-right-line-right"></i></Link>
                        </ScrollAnimation>
                    </div>
                </div>
            }

        </>
    )
}

export default CategoryOne;