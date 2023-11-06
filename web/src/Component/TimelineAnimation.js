import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Milestone } from "../Pages";

import "../Styles/styles.css"


const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1(
        <div class="left-align">
           <center><Typography variant="h6" sx={{ fontWeight:'bold' }}>Project Proposal</Typography></center>
           <Typography>A project proposal is a document that outlines the scope, objectives, and initial plan for a project. It provides a clear description of what the project aims to achieve, its significance, and the approach to be taken.The proposal often includes information about the problem statement, proposed solutions, budget estimates, and a timeline. It serves as a foundation for gaining approval and support for the project.</Typography>
           <center><Typography sx={{ mt:3, fontWeight:'bold' }}>Marks Allocated: 6%</Typography></center>
        </div>
    );
     callback();
  };

  const someCallback2 = () => {
    setMessage2(
        <div class="left-align">
           <center><Typography variant="h6" sx={{ fontWeight:'bold' }}>Progress Presentation I</Typography></center>
           <Typography>The first progress presentation is an intermediate milestone in a project's lifecycle. It's an opportunity for the project team or researcher to update stakeholders on the project's status. During this presentation, participants typically review the work completed up to that point, discuss any challenges or changes to the project plan, and seek feedback and guidance. It's a way to ensure the project is on the right track.</Typography>
           <center><Typography sx={{ mt:3, fontWeight:'bold' }}>Marks Allocated: 15%</Typography></center>
        </div>
    );
  };

  const someCallback3 = () => {
    setMessage3(
        <div class="left-align">
           <center><Typography variant="h6" sx={{ fontWeight:'bold' }}>Progress Presentation II </Typography></center>
           <Typography>The second progress presentation, like the first, serves as an intermediate update on the project's advancement. It usually occurs at a later stage of the project.In this presentation, participants delve deeper into the work completed since the first presentation, share results, discuss any revisions or enhancements, and prepare for the final assessment. It allows stakeholders to provide input and helps refine the project further.</Typography>
           <center><Typography sx={{ mt:3, fontWeight:'bold' }}>Marks Allocated: 18%</Typography></center>
        </div>
    );
  };

  const someCallback4 = () => {
    setMessage4(
        <div class="left-align">
           <center><Typography variant="h6" sx={{ fontWeight:'bold' }}>Final Assessment </Typography></center>
           <Typography>The final assessment marks the conclusion of the project. It involves a comprehensive review of the entire project, including the goals achieved, outcomes, methodologies used, and any lessons learned. This stage may include the submission of a final report or documentation. It's essential for evaluating the success of the project, ensuring that objectives have been met, and documenting the entire project's journey.</Typography>
           <center><Typography sx={{ mt:3, fontWeight:'bold' }}>Marks Allocated: 10%</Typography></center>
        </div>
    );
  };

  const someCallback5 = () => {
    setMessage5(
        <div class="left-align">
           <center><Typography variant="h6" sx={{ fontWeight:'bold' }}>Viva </Typography></center>
           <Typography>The second progress presentation, like the first, serves as an intermediate update on the project's advancement. It usually occurs at a later stage of the project.In this presentation, participants delve deeper into the work completed since the first presentation, share results, discuss any revisions or enhancements, and prepare for the final assessment. It allows stakeholders to provide input and helps refine the project further.</Typography>
           <center><Typography sx={{ mt:3, fontWeight:'bold' }}>Marks Allocated: 10%</Typography></center>
        </div>
    );
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          March 27,2023
        </div>
        <div className="message2">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          May 22,2023
        </div>
        <div className="message1">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          September 04,2023
        </div>
        <div className="message3">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          November 01,2023
        </div>
        <div className="message4">{message4}</div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
         November 01,2023
        </div>
        <div className="message5">{message5}</div>
      </div>
    </div>
  );
};

export const TimelineAnimation = () => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };


  return (
    <div className="App">
      <div className="stub1">Research Milestones</div>
      <Milestone
        initialColor="#e5e5e5"
        fillColor="black"
        // hasReverse
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}

export default TimelineAnimation;