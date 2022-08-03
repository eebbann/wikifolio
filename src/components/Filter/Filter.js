import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({ setStatus, setGender, setPageNumber, setSpecies }) => {
	function click() {
		setStatus(" ");
		setGender(" ");
		setPageNumber(1);
		setSpecies(" ");
		window.location.reload(false)
	}
	return (
		<div className="col-12 pt-3">
			<div className="text-center fw-bold fs-4 mb-2">Filter</div>
			<div
				onClick={click}
				className="text-center text-primary text-decoration-underline mb-4"
			>
				Clear Filters
			</div>
			<div className="accordion" id="accordionExample">
				{/* accordions */}
				<Gender setPageNumber={setPageNumber} setGender={setGender} />
				<Status setStatus={setStatus} setPageNumber={setPageNumber} />
				<Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
			</div>
		</div>
	);
};

export default Filter;
