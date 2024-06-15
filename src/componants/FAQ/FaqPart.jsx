import React from "react";
import "./FaqPart.css";

export const FaqPart = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex gap-4 justify-between pt-5 ">
        <div className="i-containar">
          <img src="./value.png" alt="" />
        </div>
        <div className="pt-10">
          <div class="accordion">
            <h2 class="accordion__heading">
              Programming Frequently Asked Questions
            </h2>
            <div class="accordion__item">
              <button class="accordion__btn">
                <span class="accordion__caption">
                  <i class="far fa-lightbulb"></i>How do I figure out what to
                  learn?
                </span>
                <span class="accordion__icon">
                  <i class="fa fa-plus"></i>
                </span>
              </button>

              <div class="accordion__content">
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

            <div class="accordion__item">
              <button class="accordion__btn">
                <span class="accordion__caption">
                  <i class="far fa-lightbulb"></i>Which programming language is
                  the best to learn?
                </span>
                <span class="accordion__icon">
                  <i class="fa fa-plus"></i>
                </span>
              </button>

              <div class="accordion__content">
                <p>
                  I usually tell most people to start by learning HTML and CSS,
                  then move into learning JavaScript. The reason is that
                  JavaScript is used everywhere: frontend, backend, and even to
                  build mobile apps. It has many use cases, which is why I think
                  it's smart to learn.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
