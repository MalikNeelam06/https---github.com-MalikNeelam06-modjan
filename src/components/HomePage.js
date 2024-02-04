// HomePage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/thunks";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3>{item.title}</h3>
              <p>{`${item.body.slice(0, 50)}...`}</p>
              <p>Read More...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
