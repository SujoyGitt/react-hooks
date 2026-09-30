import React, { Component } from 'react'

export default class ClaseComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {count:0};
    console.log("1 - Initial Setup")
  }
  componentDidMount(): void {
    console.log("3 - Component Did mount")
    
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log(`4 - component did update `,prevState)
  }
  componentWillUnmount(): void {
    console.log("Component will ui disapperence after page change ")
  }
  render() {
    console.log("2 - ui render ")
    const {count} = this.state;
    return (
      <>
      <h2> Count : {count}</h2>
      <button onClick={()=>this.setState({count:count + 1})}>Increase Number</button>
      </>
    )
  }
}
