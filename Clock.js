import React from 'react';
import 'bulma/css/bulma.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), interval: 0};
    }
  
    componentWillMount(){
        console.log("Component will mount!");
    }

    componentDidMount() {
        console.log("Component did mount!");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("Component will unmount!");
        clearInterval(this.timerID);
    }
    
    tick() {
        console.log("Component is updating!");
        console.log(this.props.data.starttime)
        this.setState((state, props) => ({
            date: new Date(), interval: (state.date.getTime() - props.data.starttime.getTime())/1000
        })
        )
    }
  
    render() {
      return (
        <div>
            {console.log("Component is rendering!")}
            {/* {console.log(this.state.data)} */}
            <h1 className="title">Hello, {this.props.data.name}!</h1>
            <h2 className="subtitle">It is {this.state.date.toLocaleTimeString()}.</h2>
            <h3 className="title is-3">Time lapse {this.state.interval}.</h3>
            
        </div>
      );
    }
  }

  export default Clock;



// ------------------------------

ReactDOM.render(
  <React.StrictMode>
    <div className="box has-text-centered">
      <Clock data={{name:"Master", starttime: new Date()}}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// use this code to unmount the component
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("root"));
// },10000);
