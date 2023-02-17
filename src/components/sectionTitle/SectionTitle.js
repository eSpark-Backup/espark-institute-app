import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionTitle = ( { slogan, title, titles, classes } ) => {
    return (
        <div className={`section-title ${ classes ? classes: '' }`}>
            <ScrollAnimation 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <span className="pre-title" dangerouslySetInnerHTML={{__html: slogan}}></span>
            </ScrollAnimation>
            
            <ScrollAnimation 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <h3 className="title" style={{color : "gray"}} dangerouslySetInnerHTML={{__html: title}}></h3>
                <h3 className="titles" style={{color : "white"}} dangerouslySetInnerHTML={{__html: titles}}></h3>
            </ScrollAnimation>
        </div>
    )
}
export default SectionTitle;