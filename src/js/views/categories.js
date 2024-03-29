import React from "react";
import { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/categories.css";

export const Categories = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCategories();
  }, []);

  return (
    <Fragment>
      <div className="breed categories-div">
        {store.categories.map((e) => {
          return (
            <div className="categories-box" key={e.id}>
              <div>
                <img
                  className="cat-imagen-header"
                  src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                ></img>
              </div>
              <div className="box-button">
                <Link to={"categories/" + e.id}>
                  <button className="breed-button" type="button">
                    {e.name.charAt(0).toUpperCase()}
                    {e.name.slice(1).toLowerCase()}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
