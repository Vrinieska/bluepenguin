import React from "react"
import classNames from "classnames"

const FooterTerms = ({ className, ...props }) => {
  const classes = classNames("footer-social", className)

  return (
    <div {...props} className={classes}>
      <div
        style={{
          color: "#FFF",
          fontFamily: "Source Sans Pro",
          size: "400",
        }}
      >
        Information
      </div>
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/">
            <span
              style={{
                fontFamily: "Source Sans Pro",
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Terms & conditions <br></br> Privacy Policy
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterTerms
