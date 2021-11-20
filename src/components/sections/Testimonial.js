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

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Our Works",
    paragraph:
      "Listed below are items that we made for our customers or our business.",
  }

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "rgba(89, 168, 192, 0.84)" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div>
                {/* <div className="tiles-item-inner"> */}
                <div
                  className="testimonial-item-footer text-xs mt-32 mb-0"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  <span>MOBILE APPS</span>
                  <span> / </span>
                  <span>
                    <a
                      href="https://www.wondersandworries.org/mobileapp/ 
                    "
                      target="_blank"
                      style={{ color: "#000" }}
                    >
                      WONDERS & WORRIES
                    </a>
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "400",
                    color: "#FFF",
                    textAlign: "justify",
                  }}
                >
                  <p className="text-sm mb-0">
                    "A mobile app that will allow the user to share videos,
                    pictures and messages with the organization and create
                    specific user content for each user."
                  </p>
                  <Image
                    src={require("./../../assets/images/ww.jpeg")}
                    style={{
                      marginLeft: "center",
                      paddingTop: 15,
                      width: 180,
                      height: 180,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div>
                {/* <div className="tiles-item-inner"> */}
                <div
                  className="testimonial-item-footer text-xs mt-32 mb-0"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  <span>WEBSITE UPDATE</span>
                  <span> / </span>
                  <span>
                    <a
                      href="https://marathonkids.org/"
                      target="_blank"
                      style={{ color: "#000" }}
                    >
                      MARATHON KIDS
                    </a>
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "400",
                    color: "#FFF",
                    textAlign: "justify",
                  }}
                >
                  <p className="text-sm mb-0">
                    "Help kids journey to complete up to four marathons, or
                    104.8 miles, over the course of the running season and the
                    tools they and their teachers need to achieve these goals."
                  </p>
                  <Image
                    src={require("./../../assets/images/marathon.jpeg")}
                    style={{
                      marginLeft: "center",
                      paddingTop: 15,
                      width: 180,
                      height: 180,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div>
                {/* <div className="tiles-item-inner"> */}
                <div
                  className="testimonial-item-footer text-xs mt-32 mb-0"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  <span>IOS APP</span>
                  <span> / </span>
                  <span>
                    <a
                      href="https://apps.apple.com/us/app/cadence-find-rhythm-in-life/id1332115540 
                    "
                      target="_blank"
                      style={{ color: "#000" }}
                    >
                      CADENCE
                    </a>
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "400",
                    color: "#FFF",
                    textAlign: "justify",
                  }}
                >
                  <p className="text-sm mb-0">
                    "An app that will help you track and remind you to complete
                    your daily, weekly, or monthly goals."
                    <br></br>
                  </p>
                  <div
                    style={{
                      alignItems: "center",
                      paddingTop: 35,
                    }}
                  >
                    <Image
                      style={{
                        width: 180,
                        height: 180,
                      }}
                      src={require("./../../assets/images/cadence.jpeg")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div>
                {/* <div className="tiles-item-inner"> */}
                <div
                  className="testimonial-item-footer text-xs mt-32 mb-0"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  <span>MOBILE APPS</span>
                  <span> / </span>
                  <span>
                    <a
                      href="https://specialday.app 
                    "
                      target="_blank"
                      style={{ color: "#000" }}
                    >
                      SPECIAL DAY
                    </a>
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "400",
                    color: "#FFF",
                    textAlign: "justify",
                  }}
                >
                  <p className="text-sm mb-0">
                    "An event planning app for any virtual or physical event."
                  </p>
                  <Image
                    src={require("./../../assets/images/special.jpeg")}
                    style={{
                      marginLeft: "center",
                      paddingTop: 15,
                      width: 180,
                      height: 180,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
