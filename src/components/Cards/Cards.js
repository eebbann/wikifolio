import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";
const Cards = ({ results, page }) => {
	let display;
	if (results) {
		display = results.map((result) => {
			let { id, name, image, location, status } = result;
			return (
				<Link
					to={`${page}${id}`}
					key={id}
					style={{textDecoration:"none", color:"black"}}
					className="col-4 position-relative mb-2"
				>
					<div className={styles.card}>
						<img src={image} className={`${styles.img} img-fluid`} alt="..." />
						<div style={{ padding: "10px" }} className="content">
							<div className=" fs-4 mb-2 fw-bold">{name}</div>
							<div className="">
								<div className="fs-6 fw-bold">Last location</div>
								<div className="fs-6 ">
									{location.name.length > 20
										? location.name.substring(0, 20) + "..."
										: location.name}
								</div>
							</div>
						</div>
					</div>
					{(() => {
						if (status === "Dead") {
							return (
								<div
									className={`position-absolute bg-danger p-1 ${styles.badge}`}
								>
									{" "}
									{status}{" "}
								</div>
							);
						} else if (status === "Alive") {
							return (
								<div
									className={`position-absolute bg-success p-1 ${styles.badge}`}
								>
									{" "}
									{status}{" "}
								</div>
							);
						} else {
							<div
								className={`position-absolute bg-warning p-1 ${styles.badge}`}
							>
								{" "}
								{status}{" "}
							</div>;
						}
					})()}
				</Link>
			);
		});
	} else {
		display = "No results found";
	}
	return <>{display}</>;
};

export default Cards;
