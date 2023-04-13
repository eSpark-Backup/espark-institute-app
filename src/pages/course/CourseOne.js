import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeOne from '../../components/course/CourseTypeOne';
import CourseData from '../../data/course/CourseData.json';

const CourseOne = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="Our Courses" />
            <Layout>
                <BreadcrumbOne 
                    title="Our Courses"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Our Courses"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
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
            </Layout>
        </>
    )
}

export default CourseOne;