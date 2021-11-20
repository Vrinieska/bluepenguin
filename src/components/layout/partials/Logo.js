import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import Image from "../../elements/Image"

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className)

  return (
    <div {...props} className={classes}>
      <div
        className="m-0"
        style={{
          color: "#FFF",
          fontFamily: "Source Sans Pro",
          fontWeight: "400",
          size: 14,
        }}
      >
        <Link to="/">
          <Image
            src={require("./../../../assets/images/logo.png")}
            alt="Open"
            width={80}
            height={60}
          />
        </Link>
        {/* Blue Penguin apps */}
      </div>
    </div>
  )
}

export default Logo
