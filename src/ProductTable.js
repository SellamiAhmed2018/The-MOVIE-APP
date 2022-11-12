import React from "react";
import style from "./style.css";
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";

const ProductTable = ({products}) => {
	return(
		<React.Fragment>
			<table className="table">
				<thead className="thead-dark">
					<tr>
					{Object.keys(products[0]).map(element => <th>{element}</th>)}			
					</tr>
				</thead>
				<tbody>
					{products.map(object =>
						<tr className="rows">{Object.keys(object).map(element => <td>{object[element]}</td>)}</tr>
					)}
				</tbody>
			</table>
		</React.Fragment>
	);
}

ProductTable.propTypes = {
	category: PropTypes.string,
	price: PropTypes.number,
	name: PropTypes.string
}

export default ProductTable;
