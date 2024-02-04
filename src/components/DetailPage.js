// DetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.data);
  const item = data.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Page</h1>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <p>User ID: {item.userId}</p>
    </div>
  );
};

export default DetailPage;
