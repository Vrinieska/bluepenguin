import React from "react"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import KVideo from "../sections/video/KVideo.mp4"
// import ButtonGroup from "../elements/ButtonGroup"
// import Button from "../elements/Button"
// import Image from "../elements/Image"
// import Modal from "../elements/Modal"

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [videoModalActive, setVideomodalactive] = useState(false)

  // const openModal = (e) => {
  //   e.preventDefault()
  //   setVideomodalactive(true)
  // }

  // const closeModal = (e) => {
  //   e.preventDefault()
  //   setVideomodalactive(false)
  // }

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  return (
    <section className={outerClasses} {...props}>
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <div>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  zIndex: "-1",
                }}
              >
                <source src={KVideo} type="video/mp4" />
              </video>
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                <span
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: 70,
                    height: 54,
                  }}
                >
                  BLUE PENGUIN APPS
                </span>
              </h1>
              {/* className="container-xs" */}
              <div>
                <p
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontSize: 40,
                    height: 32,
                  }}
                  // className="m-0 mb-32 reveal-from-bottom"
                  // data-reveal-delay="400"
                >
                  Where Penguins turn your ideas into Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
