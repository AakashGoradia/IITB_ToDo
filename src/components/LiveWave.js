import React from "react";
import styles from './LiveWave.css'

const LiveWave = (props) => {
  return (
    <div className="relative py-3 bg-none">
      <div className="ocean overflow-x-hidden">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <p className={`text-white z-10 text-5xl py-3 font-bold ${props.position} absolute top-24`}> {props.title} </p>
      <div className="ocean2 overflow-x-hidden" style={{ transform: "rotate(180deg)" }}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default LiveWave;