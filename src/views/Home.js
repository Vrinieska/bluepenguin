import React from "react"
import Hero from "../components/sections/Hero"
import FlowImage from "../components/sections/FlowImage"
// import FeaturesTiles from "../components/sections/FeaturesTiles"
// import FeaturesSplit from "../components/sections/FeaturesSplit"
import Testimonial from "../components/sections/Testimonial"
import Customize from "../components/sections/Customize"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"

class Home extends React.Component {
  state = {
    name: "",
    emailphone: "",
    message: "",
  }

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(phone).toLowerCase())
  }

  clickPrimary = () => {
    const { name, emailphone, message } = this.state
    const errorMessage = "Verify all fields are filled"
    const errorMessageEmailPhone = "Please enter a valid email or phone."
    // check if all forms are filled
    if (name.length === 0 || emailphone.length === 0 || message.length === 0) {
      alert(errorMessage)
      return false
    }
    // check if emailphone is one or the other
    if (!this.validateEmail(emailphone) && !this.validatePhone(emailphone)) {
      alert(errorMessageEmailPhone)
      return false
    }
    fetch("https://blue-penguin-d1105.firebaseio.com/contactus.json", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.name && response.name.length > 0) {
          alert(
            "Thank you for contacting us, we will contact you within the next 48 hours."
          )
          this.setState({
            name: "",
            emailphone: "",
            message: "",
          })
        } else if (response.error === "Permission denied") {
          alert(errorMessage)
        } else {
          alert("Something went wrong. please refresh and try again")
        }
      })
  }

  onChange = (field, value) => {
    if (field === "name") {
      this.setState({
        name: value,
      })
    } else if (field === "emailphone") {
      this.setState({
        emailphone: value,
      })
    } else if (field === "message") {
      this.setState({
        message: value,
      })
    } else {
      this.state[field] = value
    }
  }

  render() {
    return (
      <>
        <Hero className="illustration-section-01" />
        <FlowImage topDivider />
        <Testimonial topDivider />
        <Customize topDivider />
        <div className="container" topDivider>
          <div className="center-content">
            <h1
              style={{
                color: "white",
                fontFamily: "Source Sans Pro",
                fontWeight: "bold",
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                color: "bold",
                fontFamily: "Source Sans Pro",
                fontWeight: "bold",
              }}
            >
              Fields marked with an asterisk(*) are required.
            </p>
            <div
              style={{
                fontFamily: "Source Sans Pro",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <span style={{ color: "white" }}> Name *</span>
              <Input
                style={{ backgroundColor: "white", borderColor: "gray" }}
                type="text"
                onChange={(event) => this.onChange("name", event.target.value)}
                value={this.state.name}
              />{" "}
              <span style={{ color: "white" }}> Email / Phone Number *</span>
              <Input
                type="emailphone"
                style={{ backgroundColor: "white", borderColor: "gray" }}
                onChange={(event) =>
                  this.onChange("emailphone", event.target.value)
                }
                value={this.state.emailphone}
              />
              <span style={{ color: "white" }}> Message *</span>
              <Input
                style={{ backgroundColor: "white", borderColor: "gray" }}
                rows="5"
                onChange={(event) =>
                  this.onChange("message", event.target.value)
                }
                value={this.state.message}
              />
              <br></br>
              <Button
                style={{
                  backgroundColor: "#1f6fff",
                  color: "white",
                  padding: "center",
                  width: "25%",
                }}
                onClick={this.clickPrimary}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="footer-padding" /> */}
      </>
    )
  }
}

export default Home
