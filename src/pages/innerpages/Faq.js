import React, { useState, useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
 
const onlineEducation = {
    leftColumn: [
        {
            id: 1,
            title: 'What is eSpark Institute?',
            body: 'eSpark Institute is a cutting-edge educational platform dedicated to providing high-quality courses and resources in the fields of technology, data science, artificial intelligence, and more. Our mission is to empower learners with the skills they need to thrive in todays rapidly evolving digital landscape.'
        },
        {
            id: 2,
            title: 'What types of courses does eSpark Institute offer?',
            body: 'We offer a diverse range of courses, including but not limited to programming languages, machine learning, web development, cloud computing, and digital marketing. Our courses cater to all skill levels, from beginners to advanced learners.'
        },
        {
            id: 3,
            title: 'Are the courses taught by industry professionals?',
            body: 'Yes, our courses are developed and taught by experienced industry professionals who have a deep understanding of the subject matter. This ensures that our learners receive practical insights and real-world knowledge.'
        },
        {
            id: 4,
            title: 'Can I access the courses from anywhere?',
            body: 'Absolutely! All our courses are available online, allowing you to learn at your own pace and from the comfort of your preferred location.'
        }
    ],
    rightColumn: [
        {
            id: 1,
            title: 'How do I enroll in a course?',
            body: 'Enrolling in a course is simple. Just browse our course catalog, select the course you are interested in, and follow the enrolment instructions. If you have any issues, our support team is here to assist you.'
        },
        {
            id: 2,
            title: 'Can I interact with instructors and other learners?',
            body: 'Yes, our platform provides various ways to interact with instructors and fellow learners. From discussion forums to live Q&A sessions, you will have the opportunity to engage in meaningful discussions and collaborative learning experiences.'
        },
        {
            id: 3,
            title: 'Do you provide certificates upon course completion?',
            body: 'Absolutely. Once you successfully complete a course, you will receive a certificate of completion. This certificate can be a valuable addition to your professional portfolio.'
        },
        {
            id: 4,
            title: 'How do I contact your support if I have more questions?',
            body: 'If you have any further questions or need assistance, please don not hesitate to reach out to our support team. We are here to help you on your learning journey.'
        }
    ]
}
        
const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext( AccordionContext );
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={ decoratedOnClick } aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{ children }</button>
}

const Faq = ( { wrapperClass } ) => {
    const [selectedItem, setSelectedItem] = useState( 'online-education' );
    const [activeId1, setActiveId1] = useState( '0' );
    const [activeId2, setActiveId2] = useState( '0' );
    const [activeId3, setActiveId3] = useState( '0' );
    const [activeId4, setActiveId4] = useState( '0' );
    const [activeId5, setActiveId5] = useState( '0' );
    const [activeId6, setActiveId6] = useState( '0' );

    function toggleActive1( id ) {
        if (activeId1 === id) {
            setActiveId1(null);
        } else {
            setActiveId1(id);
        }
    }
    function toggleActive2( id ) {
        if (activeId2 === id) {
            setActiveId2(null);
        } else {
            setActiveId2(id);
        }
    }
    function toggleActive3( id ) {
        if (activeId3 === id) {
            setActiveId3(null);
        } else {
            setActiveId3(id);
        }
    }
    function toggleActive4( id ) {
        if (activeId4 === id) {
            setActiveId4(null);
        } else {
            setActiveId4(id);
        }
    }
    function toggleActive5( id ) {
        if (activeId5 === id) {
            setActiveId5(null);
        } else {
            setActiveId5(id);
        }
    }
    function toggleActive6( id ) {
        if (activeId6 === id) {
            setActiveId6(null);
        } else {
            setActiveId6(id);
        }
    }

    return (
        <>
            <SEO title="Frequently Asked Questions" />
            
                <BreadcrumbOne 
                    title="Frequently Asked Questions"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="FAQ"
                />
                <div className={ `edu-accordion-area accordion-shape-1 edu-section-gap bg-color-white ${ wrapperClass ? wrapperClass : '' } ` }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">FaQ Questions</span>
                                    <h3 className="title">Welcome to eSpark Institute <br/>FAQ's!</h3>
                                </div>
                            </div>
                        </div>
                        { selectedItem === 'online-education' && 
                            <div className="row g-5 align-items-center mt--20">
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                onlineEducation.leftColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive1(i.toString())} bsPrefix={`edu-accordion-item ${activeId1 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                onlineEducation.rightColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive2(i.toString())} bsPrefix={`edu-accordion-item ${activeId2 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        }<br/>
                        <br/>
                        <h6 className="title" style={{fontSize:"18px"}}>Remember, at eSpark Institute, we're committed to your success. Join us today and embark on a journey of knowledge and skill enhancement!</h6>

                    </div>
                </div>
            
        </>
    )
}

export default Faq;