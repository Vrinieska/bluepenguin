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

const Customize = ({
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
    title: 'Apps created for Any kind of device',
    paragraph: 'Listed below are items that we made for our customers or our business.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{backgroundColor:'#FFF'}}
    >
       <div className="container">
         <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" /> 
            <div className={tilesClasses}>






          </div>
        </div>
      </div> 
      
    </section>
  );
}

Customize.propTypes = propTypes;
Customize.defaultProps = defaultProps;

export default Customize;