const card = () => {
  return (
    <div>
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&ga=GA1.2.1453477194.1692089197&semt=sph" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
              <option value="half">Half</option>
              <option value="half">Full</option>
            </select>
            <div className="d-inline fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
