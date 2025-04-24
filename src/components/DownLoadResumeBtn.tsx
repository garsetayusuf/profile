import React from "react";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full">
      <HackerBtn label="Resume" url={process.env.RESUME_URL as string} />
    </div>
  );
}

export default DownLoadResumeBtn;
