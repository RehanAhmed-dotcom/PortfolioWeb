import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { item } = location.state;
  return (
    <div>
      Details{id}
      {item.name}
    </div>
  );
};

export default Detail;
