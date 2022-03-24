import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title, { titleLevels } from "../../components/common/Title";
import Container from "./../../components/common/Container";
import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import ListPages from "./../../components/layout/ListPages/ListPages";
import ListProducts from "./../../components/layout/ListProducts";
import { useSearchResults } from "./../../hooks/useSerchResults";

const SearchPage = () => {
	const { searchTerm } = useParams();

	const [page, setPage] = useState(1);
	const pageSize = 20;

	const { products, pagination } = useSearchResults(
		searchTerm,
		page,
		pageSize
	);

	const onClickPage = (numberPage) => {
		if (page !== numberPage) {
			setPage(numberPage);
		}
	};

	useEffect(() => {
		setPage(1);
	}, [searchTerm]);

	return (
		<>
			<Header />

			<Container inner={true}>
				<div className="row">
					<Title Level={titleLevels.h2}>
						{products && products.length > 0
							? "Results "
							: "No results "}
						for "{searchTerm}"
					</Title>

					{products && products.length > 0 && (
						<>
							<br />
							<ListProducts
								def={4}
								xl={3}
								md={2}
								sm={1}
								xsm={1}
								minmax={480}
								products={products}
								limit={12}
								offset={0}
							/>

							{pagination.length > 1 && (
								<ListPages
									pagination={pagination}
									onClickPage={onClickPage}
								/>
							)}
						</>
					)}
				</div>
			</Container>

			<Footer />
		</>
	);
};

export default SearchPage;
