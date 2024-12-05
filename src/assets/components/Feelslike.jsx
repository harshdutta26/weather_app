import React from "react";

function Feelslike() {
  return (
    <svg
      xmlns="https//www.w3.org/2000/svg"
      width="16" // Set width to 16
      height="16" // Set height to 16
      viewBox="0 0 32 32" // Keep the original viewBox for scaling
      className="h-4 w-4 text-blue-500" // Tailwind classes for styling
    >
      <path d="M26 30h-4a2.006 2.006 0 01-2-2v-7a2.006 2.006 0 01-2-2v-6a2.946 2.946 0 013-3h6a2.946 2.946 0 013 3v6a2.006 2.006 0 01-2 2v7a2.006 2.006 0 01-2 2zm-5-18a.945.945 0 00-1 1v6h2v9h4v-9h2v-6a.945.945 0 00-1-1zM24 9a4 4 0 114-4 4.012 4.012 0 01-4 4zm0-6a2 2 0 102 2 2.006 2.006 0 00-2-2zM10 20.184V12H8v8.184a3 3 0 102 0z"></path>
      <path d="M9 30a6.993 6.993 0 01-5-11.89V7a5 5 0 0110 0v11.11A6.993 6.993 0 009 30zM9 4a3.003 3.003 0 00-3 3v11.983l-.332.299a5 5 0 106.664 0L12 18.983V7a3.003 3.003 0 00-3-3z"></path>
      <path fill="none" d="M0 0h32v32H0z"></path>
    </svg>
  );
}

export default Feelslike;
