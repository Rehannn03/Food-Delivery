const Card = (props) => {

  let options=props.option
  let price=Object.keys(options)

  return (
    <div>
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgSrc} style={{objectFit:'fill',height:"200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">Content</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-secondary rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-secondary rounded">
              {price.map((data)=>{return(
                <option key={data} value={data}>{data}</option>)
              })}
            </select>
            <div className="d-inline fs-6">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
