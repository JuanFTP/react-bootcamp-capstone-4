import PropTypes from "prop-types";
import React from "react";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { getFormattedPrice } from "./../../../utils/utils";
import Button, { buttonVariants } from "./../../common/Button";
import IconArea from "./../../common/IconArea";
import ImageBackground from "./../../common/ImageBackground";
import Input, { inputTypes } from "./../../common/Input";
import Title, { titleLevels } from "./../../common/Title";
import FormControl from "./../../layout/FormControl";
import "./ProductItem.css";

const ProductItem = ({
	id,
	image,
	name,
	stock,
	selected,
	price,
	onChangeItemsSelected,
	onRemoveItem,
}) => {
	return (
		<div className="item">
			<div className="flex ai-center">
				<div className="info flex ai-center">
					<div className="miniature">
						<ImageBackground media={image} />
					</div>

					<div className="data">
						<Title Level={titleLevels.h3}>{name}</Title>
						<div className="controls">
							<div className="flex ai-center jc-start">
								<IconArea onClicketItem={onChangeItemsSelected} value={false}>
									<MdOutlineRemove />
								</IconArea>

								<FormControl width="96px">
									<Input
										variant={inputTypes.number}
										value={selected}
										placeholder={"0"}
										isReadOnly={true}
									/>
								</FormControl>

								<IconArea onClicketItem={onChangeItemsSelected} value={true}>
									<MdAdd />
								</IconArea>

								<Button
									variant={buttonVariants.outline}
									onClickItem={onRemoveItem}
									value={id}
								>
									REMOVE
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="resume">
					<Title Level={titleLevels.h3}>$ {getFormattedPrice(price)}</Title>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	stock: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	onChangeSelectedItems: PropTypes.func.isRequired,
	onRemoveItem: PropTypes.func.isRequired,
};

export default React.memo(ProductItem);
