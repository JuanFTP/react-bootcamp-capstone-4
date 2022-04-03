import PropTypes from "prop-types";
import React from "react";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
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
	price,
	selected,
	stock,
	onChangeItemsSelected,
	onRemoveItem,
}) => {
	return (
		<div className="item">
			<div className="flex ai-center">
				<div className="info flex ai-center">
					<div className="miniature">
						<Link to={`${PATHS.product}/${id}`}>
							<ImageBackground media={image} h="160px" />
						</Link>
					</div>

					<div className="data">
						<Link to={`${PATHS.product}/${id}`}>
							<Title Level={titleLevels.h3}>{name}</Title>
						</Link>
						<Title Level={titleLevels.h4}>{`${stock} items available`}</Title>
						<Title Level={titleLevels.h4}>{`$ ${getFormattedPrice(
							price
						)} each`}</Title>
						<div className="controls">
							<div className="flex ai-center jc-start">
								<IconArea
									onClicketItem={onChangeItemsSelected}
									value={{ type: false, id }}
								>
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

								<IconArea
									onClicketItem={onChangeItemsSelected}
									value={{ type: true, id }}
								>
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
					<Title Level={titleLevels.h3}>
						$ {getFormattedPrice(price * selected)}
					</Title>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	stock: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	onChangeSelectedItems: PropTypes.func,
	onRemoveItem: PropTypes.func,
};

export default React.memo(ProductItem);
