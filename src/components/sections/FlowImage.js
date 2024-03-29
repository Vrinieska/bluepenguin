import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const FlowImage = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  )

  // const sectionHeader = {
  //   title: "WHAT WE DO",
  //   paragraph: "Where Penguins turn your ideas into Apps",
  // }

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <div>
            <br></br>
          </div>
          <Image
            src={require("./../../assets/images/whatwedo.jpeg")}
            alt="Features tile icon 01"
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </section>
  )
}

FlowImage.propTypes = propTypes
FlowImage.defaultProps = defaultProps

export default FlowImage
