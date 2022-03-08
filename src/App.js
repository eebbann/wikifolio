 import "bootstrap/dist/css/bootstrap.min.css";
 import  "bootstrap/dist/js/bootstrap"
import { useState, useEffect} from "react";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";

function App() {
	let [pageNumber, setPageNumber] = useState(1);
	let [fetchedData, setFetchedData] = useState([]);
	const {info,results} = fetchedData
	console.log(results);
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
	useEffect(()=>{
		(async function(){
		 let data =	await fetch(api)
				.then(res => res.json())
			 setFetchedData(data);
		}())
	},[api])
  return (
    <div className="App">
       <h2 className="text-center ubuntu my-4 text-b">Welcome to <span className="text-primary">WiKiFolio</span></h2>
			<div className="container">	
			 <div className="row">
				 <div className="col-md-3"> 
				 <Filter /> 
				  </div> 
				 <div className="col-md-8"> 
				  <div className="container">
						<div className="row">
							<Cards results = {results}/>
							  
						</div>
					</div>
			  </div>
		   </div>
		</div>
		</div>
  );
}

export default App;
