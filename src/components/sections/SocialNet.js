import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const SocialNet = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Follow us',
    // paragraph: 'Try them to take a look to our work'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      

    >
       <div className="container">
         <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" /> 
           <div style={{color: 'white'}}>
             <h1>Follow Us</h1>
            {/* <div className={tilesClasses}> */}

            


          </div>
        </div>
      </div> 
      
    </section>
  );
}

SocialNet.propTypes = propTypes;
SocialNet.defaultProps = defaultProps;

export default SocialNet;