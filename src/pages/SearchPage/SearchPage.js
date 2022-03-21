import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";
import ListProducts from "./../../components/layout/ListProducts";
import ListPages from "./../../components/layout/ListPages/ListPages";
import { useParams } from "react-router-dom";

const SearchPage = () => {
	const { q } = useParams();

	if (q && q !== "") {
		console.log("Buscando", q);
	}

	const products = [];
	const pages = [];
	return (
		<>
			<Header />
			<Container inner={true}>
				<div className="row">
					<Skeleton width={"50%"} height={48} />
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
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default SearchPage;
