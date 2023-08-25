const Footer = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade" >
        <div className="carousel-inner" id="carousel" >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form class="form-inline d-flex  ">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-danger my-2 my-sm-0 text-white bg-danger"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div
            className="carousel-item active"
            style={{ filter: "brightness(30%)" }}
          >
            <img
              src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.2.1453477194.1692089197&semt=sph"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ filter: "brightness(30%)" }}>
            <img
              src="https://generatorfun.com/code/uploads/Random-Food-image-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ filter: "brightness(30%)" }}>
            <img
              src="https://generatorfun.com/code/uploads/Random-Food-image-12.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
