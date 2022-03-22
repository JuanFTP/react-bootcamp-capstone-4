import { useParams } from "react-router-dom";
import Title, { titleLevels } from "../../components/common/Title";
import Container from "./../../components/common/Container";
import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import ListPages from "./../../components/layout/ListPages/ListPages";
import ListProducts from "./../../components/layout/ListProducts";
import { useSearchResults } from "./../../hooks/useSerchResults";

const SearchPage = () => {
	const { q } = useParams();
	const { products } = useSearchResults(q);
	const pages = [];

	return (
		<>
			<Header />

			<Container inner={true}>
				<div className="row">
					<Title Level={titleLevels.h2}>
						{products && products.length > 0
							? "Results "
							: "No results "}
						for "{q}"
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

							<ListPages pages={pages} />
						</>
					)}
				</div>
			</Container>

			<Footer />
		</>
	);
};

export default SearchPage;
