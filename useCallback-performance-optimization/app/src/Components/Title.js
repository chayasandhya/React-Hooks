import React from "react";

function Title() {
  console.log("Title");

  return (
    <div>
      <h2>useCallbacK Hook</h2>
    </div>
  );
}

export default React.memo(Title);
