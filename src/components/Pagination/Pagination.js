import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ info, pageNumber, setPageNumber }) {
	// let prev = () => {
	// 	if (pageNumber === 1) return;
	// 	setPageNumber((x) => x - 1);
	// };
	// let next = () => {
	// 	setPageNumber((x) => x + 1);
	// };
	return (
		<ReactPaginate
			className="pagination justify-content-center gap-2  "
			nextLabel="Next"
			previousLabel="Prev"
			nextClassName="btn btn-primary white"
			previousClassName="btn btn-primary white"
			pageClassName="page-item "
			pageLinkClassName="page-link"
			activeClassName="active"
			onPageChange={(d)=>{setPageNumber(d.selected + 1)}}
			pageCount={info?.pages}
		/>
	);
	// return (
	// 	<div className="container d-flex justify-content-center gap-5 my-5">
	// 		<button onClick={prev} className="btn btn-primary">prev</button>
	// 		<button onClick={next} className="btn btn-primary" >next</button>
	// 	</div>
	// );
}

export default Pagination;
