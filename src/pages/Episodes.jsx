import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

function Episodes({ }) {
	let [id, setID] = useState(2);
	let [info, setInfo] = useState([]);
	let { air_date, name } = info;
	let [results, setResult] = useState([])
	let api = `https://rickandmortyapi.com/api/episode/${id}`;

	useEffect(() => {
		(async function() {
			let data = await fetch(api).then((res) => res.json());
			setInfo(data);

			let a = await Promise.all(
				data.characters.map((x)=>{
					return fetch(x).then((res)=> res.json()) 
					
				})
				
			)
			console.log(data)
			setResult(a)
		})();

	}, [api]);

	return (
		<div className="container">
			<div className="row mb-4">
				<h1 className="text-center"> Episode :{ name === "" ? "unknown" : name }</h1>
				<h5 className="text-center">Air Date { air_date === "" ? "unknown" : air_date }</h5>
			</div>
			<div className="row">
				<div className="col-3" >
					<h4 className=" text-center mb-4"> Pick Episodes </h4>
				<InputGroup />
				 </div>
				
				<div className="col-8" >
					<div className="row">
					 
						<Cards results={results}/> 
						</div>
				</div>
			</div>
		</div>
	);
}

export default Episodes;
