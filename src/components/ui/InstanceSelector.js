import { Component } from 'react'
import InstanceButton from './InstanceButton'

class InstanceSelector extends Component {

  constructor(props) {
      super(props)
  }
// if

  render() {
    // console.log(this.props.selectedInstances)
    // console.log(this.props.data.instances)
    var buttonClass = "";

    var instanceButtons = [];
    for (let button in this.props.data.instances) {
      buttonClass = "";
      this.props.selectedInstances.map((instance) => {

        if (instance === button) {
          buttonClass = "selected";
        }

      });
      instanceButtons.push(<InstanceButton instance={button}
                                           key={button}
                                           buttonClass={buttonClass}
                                           instances={this.props.data.instances}
                                           updateInstances={this.props.updateInstances} />)


    };
  	return (
      <div className="classselector">
        {instanceButtons}
      </div>
    )
  }
}

export default InstanceSelector
