import React from 'react';

const Banner = () => {
  return (
    <section className="banner py-5">
      <div className="container px-lg-5">
        <div className=" p-lg-5 bg-light rounded-3 text-center">
          <div className="p-lg-5 p-4">
            <h1 className="display-5 fw-bold ">A warm welcome!</h1>
            <p className=" fs-4">
              Bootstrap utility classes are used to create this jumbotron since the old component has been removed from
              the framework. Why create custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary py-2 px-3 fs-4">Call to action</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
