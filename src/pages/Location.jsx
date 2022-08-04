import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

function Location({ }) {
	let [id, setID] = useState(1);
	let [info, setInfo] = useState([]);
	let { name,type,dimension } = info;
	let [results, setResult] = useState([])
	let api = `https://rickandmortyapi.com/api/location/${id}`;

	useEffect(() => {
		(async function() {
			let data = await fetch(api).then((res) => res.json());
			setInfo(data);
      console.log(data)
			let a = await Promise.all(
				data.residents.map((x)=>{
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
				<h1 className="text-center"> Location :{ name === "" ? "unknown" : name }</h1>
				<h5 className="text-center">Dimension: { dimension === "" ? "unknown" : dimension }</h5>
			</div>
			<div className="row">
				<div className="col-3" >
					<h4 className=" text-center mb-4"> Pick Location </h4>
				<InputGroup setID={setID} name="location" total={121}/>
				 </div>
				
				<div className="col-8" >
					<div className="row">
					 
					<Cards page="/location/" results={results}/> 
						</div>
				</div>
			</div>
		</div>
	);
}

export default Location;
