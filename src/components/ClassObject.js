import React, { Component } from "react";

class ClassObject extends Component {
  state = {
    user: [{ firstName: "", lastName: "" }],
  };

  firstNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    this.setState({ ...this.state.user, firstName: e.target.value }); // اگر استیت مون یک آبجکت بود، باید موقع اپدیت اینجوری اول کلشو باز کنیم
  };

  lastNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    this.setState({ ...this.state.user, lastName: e.target.value });
  };

  render() {
    return (
      <div className="mt-4 rounded p-4">
        <form>
          <input
            type="text"
            value={this.user.firstName}
            onChange={this.firstNameHandler}
            className="mb-4 mr-2 p-2"
          />
          <input
            type="text"
            value={this.user.lastName}
            onChange={this.lastNameHandler}
            className="mb-4 p-2"
          />
          <h2>My first name is - {this.user.firstName}</h2>
          <h2>My last name is - {this.user.lastName}</h2>
        </form>
      </div>
    );
  }
}

export default ClassObject;
