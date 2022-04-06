import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import "./ListProductItems.css";

const ListProductItems = ({
	listProductItems,
	onChangeItemsSelected,
	onRemoveItem,
}) => (
	<div className="items">
		{listProductItems.map((product) => (
			<ProductItem
				key={product.id}
				{...product}
				onChangeItemsSelected={onChangeItemsSelected}
				onRemoveItem={onRemoveItem}
			/>
		))}
	</div>
);

ListProductItems.propTypes = {
	listProductItems: PropTypes.array.isRequired,
	onChangeItemsSelected: PropTypes.func.isRequired,
	onRemoveItem: PropTypes.func.isRequired,
};

export default ListProductItems;
