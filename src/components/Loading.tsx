import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col bg-slate-300  absolute w-full h-full z-10 items-center justify-center">
      <div
        className="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-solid border-blue-500 border-t-transparent shadow-md"
      ></div>
    </div>
  );
};

export default Loading;
