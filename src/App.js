import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/NavBar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Character from "./pages/Character";

function App(){
  return(
		
		<BrowserRouter>
		<div className="App">
			<Navbar />
			</div>
		<Routes> 
			<Route path="/"  element={<Home/>  }/>
			<Route path="location"  element={<Location/>  }/>
			<Route path="episodes"  element={<Episodes />  }/>
			<Route path="character"  element={<Character />  }/>

		</Routes>
		</BrowserRouter>
	)
}

export const Home = ()=>{
	let [pageNumber, setPageNumber] = useState(1);
	let [search, setSearch] = useState(" ");
	let [status, setStatus] = useState(" ");
	let [gender, setGender] = useState(" ");
	let [species, setSpecies] = useState(" ")
	let [fetchedData, setFetchedData] = useState([]);
	const { info, results } = fetchedData;

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
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
						<Filter
							setStatus={setStatus}
							setPageNumber={setPageNumber}
							setGender={setGender}
							setSpecies={setSpecies}
						/>
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
			<Pagination
				info={info}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
			/>
		</div>
	);
}

export default App;
