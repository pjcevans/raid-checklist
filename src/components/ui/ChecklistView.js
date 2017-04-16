import { Component } from 'react'







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
              <div className="conitem" key={con}><p >{con}hi</p><input type="checkbox"></input></div>
            )
          })
        })
      }
    })
  	return (
  	    <div>
          {checklist}
  	    </div>
    )
  }
}

export default ChecklistView
