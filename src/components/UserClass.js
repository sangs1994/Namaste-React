import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "13 Bramley Grove",
      count1: 0,
      count2: 1,
      userInfo: { login: "Sangeetha", id: "" },
    };
    console.log("contructor MEthod");
  }

  async componentDidMount() {
    console.log("Component Did Mount MEthod");
    const data = await fetch("https://api.github.com/users/sangs1994");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    console.log("Render MEthod");
    const { login, id } = this.state.userInfo;
    const { email } = this.props;
    return (
      <div>
        <h2>{login}</h2>
        <h3>{id}</h3>
        <h4>{email}</h4>
        <h4>{this.state.address}</h4>
        <h4>Count1 :{this.state.count1}</h4>
        <h4>Count2 :{this.state.count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 5,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
