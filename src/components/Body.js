import RestCard from "./RestCard";
import swiggy_data from "../utils/swiggy_data";

const Body = () => {
  const resList = swiggy_data;
  console.log(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestCard key={res.id} resData={res}></RestCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
