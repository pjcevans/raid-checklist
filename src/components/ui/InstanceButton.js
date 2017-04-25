const InstanceButton = (props) =>
  <div onClick={() => props.updateInstances(props.instance)}
       className={`${props.buttonClass} classbutton`}>
    <div className="classbuttonimage"
         style={{backgroundImage: `url(${props.instances[props.instance].url})`}}></div>
    <p>{props.instance}</p>
  </div>

export default InstanceButton;
