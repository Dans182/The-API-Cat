import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Demo = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		getCategories();
	  }, []);


	  const getCategoriesHats = async () => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/images/search?category_ids=2", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		  });
		  const dataCategoriesHats = await resp.json();
		} catch (e) {
		  alert("ERROR");
		}
	  };	  

	  
return(
	<div className="text-center mt-5">
		<p>
			<button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                getBreeds();
              }}
            >
              Breeds
            </button>
		</p>
		<p>
			<button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                getCategoriesHats();
              }}
            >
              Catogory - Hats
            </button>
		</p>

	</div>
)};
