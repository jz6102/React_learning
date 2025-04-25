

function Course(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="react img" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
    </div>
  );
}

export default Course