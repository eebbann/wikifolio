import React from "react";
import FilterBtn from "../FilterBtn";

function Species({setSpecies,setPageNumber}) {
	let species = [
		"Human",
		"Alien",
		"Humanoid",
		"poopybutthole",
		"Mythological",
		"Unknown", 
		"Animal",
		"Disease",
		"Robot",
		"Cronenberg",
		"Planet",
	];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingOne">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
					aria-expanded="false"
					aria-controls="collapseThree"
				>
					Species
				</button>
			</h2>
			<div
				id="collapseThree"
				className="accordion-collapse collapse"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex flex-wrap gap-3">
					 {species.map((items,index)=>(
						<FilterBtn task={setSpecies} setPageNumber={setPageNumber} key={index} name="species" items={items} index={index} />
					 ))}
				</div>
			</div>
		</div>
	);
}

export default Species;
