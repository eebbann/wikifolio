import React from "react";

function Pagination({ pageNumber, setPageNumber }) {
	let prev = () => {
		if (pageNumber === 1) return;
		setPageNumber((x) => x - 1);
	};
	let next = () => {
		setPageNumber((x) => x + 1);
	};

	return (
		<div className="container d-flex justify-content-center gap-5 my-5">
			<button onClick={prev} className="btn btn-primary">prev</button>
			<button onClick={next} className="btn btn-primary" >next</button>
		</div>
	);
}

export default Pagination;
