import React from 'react';

const TitleMessage= () => {
  return (
<MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Vibhor Singh</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Coach", "Learner"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
}

export default TitleMessage;
