import React, { useEffect } from "react";
import "./FaqPart.css";

export const FaqPart = () => {
  useEffect(() => {
    const accItems = document.querySelectorAll(".accordion__item");

    accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

    function toggleAcc() {
      accItems.forEach((item) => {
        if (item !== this) {
          item.classList.remove("accordion__item--active");
        }
      });
      this.classList.toggle("accordion__item--active");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md: gap-4 justify-between pt-5 items-center">
        <div className="i-containar w-[20rem] md:w-[30rem] md:h-[35rem] h-[25rem]">
          <img src="./value.png" alt="" />
        </div>
        <div className="pt-10">
          <div className="accordion md:w-[42rem] w-[20rem]">
            <div className="flex flex-col px-7 pb-5 pt-3">
              <span className="text-yellow-500 font-semibold text-3xl pb-2 ">
                Our Values
              </span>
              <span className="text-blue-950 font-bold text-4xl ">
                Value We Give To You
              </span>
              <span className="py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                nesciunt aliquid itaque iste quia sed ex sequi quidem, vel fugit
                possimus hic maiores impedit.
              </span>
            </div>
            <div className="accordion__item">
              <button className="accordion__btn">
                <span className="accordion__caption">
                  <i className="far fa-lightbulb"></i>How do I figure out what
                  to learn?
                </span>
                <span className="accordion__icon">
                  <i className="fa fa-plus"></i>
                </span>
              </button>

              <div className="accordion__content">
                <p>
                  The most important thing is that you want to learn something
                  that interests you, because once you start learning, you'll be
                  with this topic for a while. Choosing something just because
                  it's popular or what others are doing isn't the way to go
                  because if you don't have a true interest in it, you'll lose
                  the motivation to learn! Spend some time seriously looking
                  into the different tech career paths before choosing one to go
                  down.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <button className="accordion__btn">
                <span className="accordion__caption">
                  <i className="far fa-lightbulb"></i>Which programming language
                  is the best to learn?
                </span>
                <span className="accordion__icon">
                  <i className="fa fa-plus"></i>
                </span>
              </button>

              <div className="accordion__content">
                <p>
                  I usually tell most people to start by learning HTML and CSS,
                  then move into learning JavaScript. The reason is that
                  JavaScript is used everywhere: frontend, backend, and even to
                  build mobile apps. It has many use cases, which is why I think
                  it's smart to learn.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <button className="accordion__btn">
                <span className="accordion__caption">
                  <i className="far fa-lightbulb"></i>Should I learn Python 2 or
                  Python 3?
                </span>
                <span className="accordion__icon">
                  <i className="fa fa-plus"></i>
                </span>
              </button>

              <div className="accordion__content">
                <p>
                  Now, in 2020, it’s a no-brainer: Python 3 is definitely the
                  way to go. There are still some situations where picking up
                  Python 2 might be advantageous, or you may just want to learn
                  a little of the history and the differences between Python 2
                  and 3 for curiosity’s sake, but job-wise, Python 3 is the
                  clear winner.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <button className="accordion__btn">
                <span className="accordion__caption">
                  <i className="far fa-lightbulb"></i>Should I learn skills in
                  several areas?
                </span>
                <span className="accordion__icon">
                  <i className="fa fa-plus"></i>
                </span>
              </button>

              <div className="accordion__content">
                <p>
                  Personally, I'd say choose a path and stick to it! Learning
                  too many things at once will slow you down. Here are a few
                  ideas of things you can choose to focus on, and a little bit
                  about each one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
