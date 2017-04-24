import ClassButton from './ClassButton'


const ClassSelector = (props) =>
  <div className="classselector">
    {
      props.data.classes.map((item, id) =>
        <ClassButton key={id}
                     item={item}
                     selectedClass={props.selectedClass}
                     changeClass={props.changeClass} />
      )
    }
  </div>

export default ClassSelector
