import React from "react";
import style from "./Search.module.scss"

export default function Search({setSearch, setPageNumber}) {
	return (
	 
			<form action="" method="" >
				<input  onChange={e=>{
					setPageNumber(1);
					setSearch(e.target.value)
				}}  aria-label="search" id="search" name="search" className={style.input}/>
				<button onClick={(e)=>{e.preventDefault()}}
					className={style.search} disabled > Search </button>
			</form>
		  
	);
}
