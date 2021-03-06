
const ChecklistItem = (props) =>
  <div className="conitem" key={props.con.name}>
    <div className="classbuttonimage"
         style={{backgroundImage: `url(${props.con.url})`}}></div>
    <p className="checklist-text">{props.con.name}</p>
    <input type="checkbox"></input>
  </div>

export default ChecklistItem;
