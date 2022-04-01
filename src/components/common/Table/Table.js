import React from "react";
import "./Table.css";

const Table = ({ data }) => {
	return (
		<div className="table">
			<table>
				<tbody>
					{data.map((item) => {
						return (
							<tr key={item.name.replace(" ", "-")}>
								<td>
									<strong>{item.name}</strong>
								</td>
								<td>{item.value}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default React.memo(Table);
