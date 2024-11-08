import React from "react";

function Shimmer({ count }) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(<div className="shimmer-card"></div>);
  }
  return <div className="shimmer-container">{rows}</div>;
}

export default Shimmer;
