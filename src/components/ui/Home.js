import myData from '../../testdata/checklists.json';
import { Component } from 'react'
import ReactDOM from 'react-dom'
import ClassSelector from './ClassSelector'
import ChecklistView from './ChecklistView'
import InstanceSelector from './InstanceSelector'




class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
        data: myData,
        selectedClass: "mage",
        selectedInstances: ["naxx"],
      }
  }

  changeClass(newClass) {
    this.setState({
      selectedClass: newClass,
    });
  }

  updateInstances(instance) {
    console.log("function receiving instance: " + instance)
    if (instance === "all") {
      this.setState({
        selectedInstances: ["naxx", "aq40", "tryhard"],
      });
    } else {
      if (this.state.selectedInstances.indexOf(instance) == -1) {
        let newInstances = this.state.selectedInstances.concat(instance);
        this.setState({
          selectedInstances: newInstances,
        });
      } else {
        let newInstances = this.state.selectedInstances
        newInstances.splice(newInstances.indexOf(instance), 1)
        this.setState({
          selectedInstances: newInstances,
        });
      }
    }
  }

  resetInstances() {
    this.setState({
      selectedInstances: [],
    });
  }

  render() {
	return (
	    <div id="page">
	    	<div id="title-icon">
	    	  Vanilla WoW Pre-Flight Checklist
	    	</div>

        <div className="metacontentblock">
          <ClassSelector className="class-selector-component"
                         data={this.state.data}
                         selectedClass={this.state.selectedClass}
                         changeClass={this.changeClass.bind(this)} />
          <InstanceSelector selectedInstances={this.state.selectedInstances}
                            data={this.state.data}
                            className="instance-selector-component"
                            updateInstances={this.updateInstances.bind(this)} />
          <ChecklistView data={this.state.data}
                         selectedClass={this.state.selectedClass}
                         className="checklist-view-component"
                         selectedInstances={this.state.selectedInstances} />
        </div>




	    </div>
    )
  }
}

export default Home
