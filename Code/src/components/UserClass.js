import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "dummy" 
    };
    console.log("constructor");
  }

  componentDidMount(){
    this.setState({
      userName: "vasnth"
    })
  }

  componentDidUpdate(){
    console.log("componentDidMount");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    const { name } = this.props;
    const { userName } = this.state;
    console.log("render");
    
    return (
      <div className="user-container">
        <h1>{name}</h1>
        <h1>Name: {userName}</h1>
        <h2>Contact: vasanthtj8@gmail.com</h2>
      </div>
    );
  }
}
export default UserClass;
