import { Component } from 'react'
import ChecklistItem from './ChecklistItem'



class ChecklistView extends Component {

  constructor(props) {
      super(props)
  }


  render() {
    var checklist = [];
    this.props.data.classes.forEach((role) => {

      if (this.props.selectedClass === role.type) {

        this.props.selectedInstances.forEach((instance) => {
          role[instance].forEach((con) => {
            checklist.push(
              <ChecklistItem con={con}
                             key={con.name}/>
            )
          })
        })
      }
    })
  	return (
  	    <div className="checklist-display">
          {checklist}
  	    </div>
    )
  }
}

export default ChecklistView
