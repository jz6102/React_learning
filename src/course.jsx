

function Course(props) {
  function Buycourse(discount) {
    alert( props.name+" purchased on "+discount+"% discount successfully!");
  }
  return (
    <div className='card'>
        <img src={props.img} alt="react img" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button className="btn" onClick={() => Buycourse(20)}>Buy Now</button>
    </div>
  );
}

export default Course