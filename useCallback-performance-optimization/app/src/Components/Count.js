import React from "react";

function Count({ text, count }) {
  {
    console.log(`rendering ${text}`);
  }
  return (
    <div>
      <div>
        {text}-{count}
      </div>
    </div>
  );
}

export default React.memo(Count);
