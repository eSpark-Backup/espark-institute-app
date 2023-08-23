import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CourseTypeOne from '../../components/course/CourseTypeOne';
import CourseData from '../../data/course/CourseData.json';

const CourseOne = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (

        <div className="home-one-cat edu-service-area service-wrapper-1 edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes="text-center"
                            slogan="Courses"
                            title="Featured Courses​"
                        />
                    </div>
                </div>
            </div>
            <div className="edu-course-area  bg-image">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CourseTypeOne data={item} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
        </div>
        
    )
}

export default CourseOne;