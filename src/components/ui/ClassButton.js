const ClassButton = (props) =>
  <div>
    {
      (props.item.type === props.selectedClass)
        ?
        <div className={"classbutton" + " " + "selected"}>
          <div className="classbuttonimage" style={{backgroundImage: `url(${props.item.icon})`}}></div>
          <p>{props.item.name}</p>
        </div>
        :
        <div className="classbutton"
             onClick={() => props.changeClass(props.item.type)}>
          <div className="classbuttonimage" style={{backgroundImage: `url(${props.item.icon})`}}></div>
          <p>{props.item.name}</p>
        </div>
    }
  </div>

export default ClassButton
