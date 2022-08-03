import React from "react";

function FilterBtn({name,items,index,task,setPageNumber}) {
	return (
		
		<div>
			<style jsx>
       {`
			  .c:checked + label{
					background-color: #0b5ed7;
					color:white;
					
				}
				input[type="radio"]{
					display : none;
				}
				
			 `}

      </style>
			<div className="form-check">
				<input
				  onClick={()=>{
						setPageNumber(1);
						task(items)
					}}
					className="form-check-input c"
					type="radio"
					name= {name}
					id={`${name}-${index}`}
				/>
				<label className="btn btn-outline-primary" for={`${name}-${index}`}>
					{items}</label>
			</div>
			 
		</div>
	);
}

export default FilterBtn;
