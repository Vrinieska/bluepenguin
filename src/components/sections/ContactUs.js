import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Input from "../elements/Input"
import Button from "../elements/Button"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const ContactUs = ({
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

  // const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Contact Us",
    paragraph: "Let's create a new project together",
  }

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <p style={{ color: "bold" }}>
            Fields marked with an asterisk(*) are required.
          </p>
          <div
            style={{
              fontFamily: "Source Sans Pro",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Name *
            <Input
              style={{ backgroundColor: "white", borderColor: "gray" }}
              type="text"
              onChange={(event) => this.onChange("name", event.target.value)}
              value={name}
            />
            Email / Phone Number *
            <Input
              style={{ backgroundColor: "white", borderColor: "gray" }}
              type="emailphone"
              onChange={(event) =>
                this.onChange("emailphone", event.target.value)
              }
              value={emailphone}
            />
            Message
            <Input
              style={{ backgroundColor: "white", borderColor: "gray" }}
              rows="5"
              onChange={(event) => this.onChange("message", event.target.value)}
              value={message}
            />
            <br></br>
            <Button
              style={{
                backgroundColor: "#1f6fff",
                color: "white",
                padding: "center",
                width: "20%",
                // margin: "center",
              }}
              onClick={clickPrimary}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactUs.propTypes = propTypes
ContactUs.defaultProps = defaultProps

export default ContactUs
