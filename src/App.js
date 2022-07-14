import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {

	let [pageNumber, setPageNumber] = useState(1);
	let [search, setSearch] = useState("smith") 
	let [fetchedData, setFetchedData] = useState([]);
	const { info, results } = fetchedData; 

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
	useEffect(() => {
		(async function() {
			let data = await fetch(api).then((res) => res.json());
			setFetchedData(data); 
		})();
	}, [api]);
	return (
		<div>
			<div className=" bg-folio"> </div>
			<div className="abso">
				<h1 className="text-center code-1 py-3 font-weight-bold">
					Welcome to <span className="text-primary">WiKiFolio</span>
				</h1>
			</div>
			<div className="overlay"></div>
			<div className="container">
				<div className="row">

					<div className="col-md-3">
						<Filter />
					</div>
					<div className="col-md-8">
						<div className="container">
						<Search setPageNumber={setPageNumber} setSearch={setSearch} />
							<div className="row"> 
								<Cards results={results} />
							</div> 
						</div>

					</div>
				</div>
			</div> 
			<Pagination  pageNumber={pageNumber} setPageNumber={setPageNumber}/>
		</div>
	);
}

export default App;
