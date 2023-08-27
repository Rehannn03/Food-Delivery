import { useState, useEffect } from "react";
import Card from "../components/Card";

const DisplayPage = () => {
  const [foodItem, setfoodItem] = useState([]);
  const [foodCat, setfoodCat] = useState([]);
  const [Search, setSearch] = useState('');

  const fetchData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      <div>
        <div  >
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={Search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            
          </form>
        </div>
      </div>
        <div className="container">
      {foodCat !== []
        ? foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== []
                  ? foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(Search.toLocaleLowerCase())) )
                      .map((Items) => {
                        return (
                          <div
                            key={Items._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={Items}
                              option={Items.options[0]}
                              
                            ></Card>
                          </div>
                        );
                      })
                  : "No Data availabe"}
              </div>
            );
          })
        : "No data Found"}
        </div>
    </div>
  );
};

export default DisplayPage;
