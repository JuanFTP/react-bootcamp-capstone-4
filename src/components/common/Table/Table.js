import PropTypes from "prop-types";
import React from "react";
import { arraySumator, getFormattedPrice } from "../../../utils/utils";
import "./Table.css";

export const tableVariants = {
	simple: "simple",
	resume: "resume",
};

const Table = ({ data, variant }) => {
	const simple = (data) => {
		return (
			<div className="table simple">
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

	const resume = (data) => {
		const getTotal = (listOfPrice) => {
			return getFormattedPrice(listOfPrice.reduce(arraySumator));
		};

		return (
			<div className="table resume">
				<table>
					<thead>
						<tr>
							{data.cols.map((col, idx) => (
								<th key={`${col}-${idx}`}>{col}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.rows.map((row) => (
							<tr key={row.id}>
								<td>{row.name}</td>
								<td>$ {getFormattedPrice(row.price)}</td>
								<td>{row.selected}</td>
								<td>$ {getFormattedPrice(row.price * row.selected)}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={3}>Total</td>
							<td>
								$ {getTotal(data.rows.map((row) => row.price * row.selected))}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	};

	return variant === tableVariants.simple ? simple(data) : resume(data);
};

Table.propTypes = {
	data: PropTypes.any.isRequired,
	variant: PropTypes.oneOf(Object.keys(tableVariants)).isRequired,
};

export default React.memo(Table);
