import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Logo from "./partials/Logo"
// import FooterNav from "./partials/FooterNav"
import FooterSocial from "./partials/FooterSocial"
import FooterApp from "./partials/FooterApp"
import FooterTerms from "./partials/FooterTerms"

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
}

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  )

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between">
            <div
              style={{
                alignContent: "center",
                color: "#FFF",
                fontFamily: "Source Sans Pro",
                fontWeight: "400",
              }}
            >
              <Logo></Logo>
              <span>Blue Penguin apps</span>
            </div>
            <FooterSocial  />
            <FooterApp />
            <FooterTerms />
          </div>

          {/* <div className="footer-bottom space-between  invert-order-desktop"> */}
          {/* <FooterNav /> */}
          {/* <div className="footer-copyright">Blue Penguin apps</div> */}
          {/* <div style={{ fontFamily: "Source Sans Pro", fontWeight: "700" }}>
              Blue Penguin apps
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
