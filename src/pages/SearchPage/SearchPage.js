import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/common/ErrorBoundary/ErrorBoundary";
import Title, { titleLevels } from "../../components/common/Title";
import { APP_NAME } from "../../utils/constants";
import Container from "./../../components/common/Container";
import ListPages from "./../../components/layout/ListPages/ListPages";
import ListProducts from "./../../components/layout/ListProducts";
import { useSearchResults } from "./../../hooks/useSerchResults";

const SearchPage = () => {
	const { searchTerm } = useParams();

	const [page, setPage] = useState(1);
	const pageSize = 20;

	const { products, pagination } = useSearchResults(searchTerm, page, pageSize);

	const onClickPage = (numberPage) => {
		if (page !== numberPage) {
			setPage(numberPage);
		}
	};

	useEffect(() => {
		document.title = `${APP_NAME} | Results for "${searchTerm}"`;
		setPage(1);

		return () => {
			document.title = APP_NAME;
		};
	}, [searchTerm]);

	return (
		<Container inner={true}>
			<Title Level={titleLevels.h2}>
				{products && products.length > 0 ? "Results " : "No results "}
				for "{searchTerm}"
			</Title>

			{products && products.length > 0 && (
				<>
					<br />
					<ErrorBoundary>
						<ListProducts
							def={4}
							xl={3}
							md={2}
							sm={1}
							xsm={1}
							minmax={480}
							products={products}
						/>
					</ErrorBoundary>

					{pagination.length > 1 && (
						<ListPages pagination={pagination} onClickPage={onClickPage} />
					)}
				</>
			)}
		</Container>
	);
};

export default SearchPage;
