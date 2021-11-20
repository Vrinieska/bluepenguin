import React from "react"
import classNames from "classnames"

const FooterApp = ({ className, ...props }) => {
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
        Download the app
      </div>
      <ul
        className="list-reset"
        style={{
          fontFamily: "Source Sans Pro",
          fontWeight: "400",
          fontSize: 15,
        }}
      >
        <li>
          <a href="https://twitter.com/">
            <span>Apple</span>
          </a>
        </li>
        <li>
          <a href="https://google.com/">
            <span>Google</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterApp
