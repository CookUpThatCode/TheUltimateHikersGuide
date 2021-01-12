import React, { Component } from 'react';

import './testcomponent.css';

class TestComponent extends Component {
   state = {
      reset: false,
      viewerClass: "viewer"
   }

   // buttonHandler = () => {
   //    this.setState({reset:false})
   // }
   buttonHandler = () => {
      this.setState((prevState, prevProps) => {
         return {
            reset: !prevState.reset
         }
      })
      this.setState({viewerClass: "viewer green"})
   }

   render() {
      return (
         <div>
            {this.state.reset
            ?  <div className="blackBox"><div className="viewer green"></div></div> 
            :  <div className="blackBox"><div className="viewer"></div></div>
            }
            {/* <div className="blackBox"><div className={this.state.viewerClass}></div></div> */}
            <div className="button" onClick={this.buttonHandler}></div>
            {/* {this.state.reset && <div className="blackBox"><div className={this.state.viewerClass}></div></div>} */}
         </div>
      )
   }
}


export default TestComponent;