import "./ProductPage.css";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const stylesList = {
	height: "24px",
	width: "96px",
	borderRadius: "12px",
	margin: "4px 4px 4px 0px",
};

const ProductPage = () => (
	<>
		<Header />

		<Container inner={true}>
			<div className="row">
				<div className="flex ai-top jc-space-between">
					<div className="gallery">
						<Skeleton style={{ minHeight: "538px" }} />
					</div>

					<div className="data">
						<Skeleton height={48} width={"50%"} />
						<Skeleton height={48} width={"25%"} />
						<br />
						<Skeleton height={24} width={"12%"} />
						<br />
						<Skeleton height={36} width={120} borderRadius={18} />
						<br />
						<Skeleton height={24} width={120} />
						<div>
							<Skeleton inline={true} style={stylesList} />
							<Skeleton inline={true} style={stylesList} />
							<Skeleton inline={true} style={stylesList} />
						</div>
						<br />
						<Skeleton height={144} />
						<br />
						<Skeleton height={24} width={120} />
						<div style={{ marginTop: "4px" }}>
							<Skeleton inline={true} height={48} width={48} />
							<Skeleton
								inline={true}
								height={48}
								width={120}
								style={{ margin: "0px 8px" }}
							/>
							<Skeleton inline={true} height={48} width={48} />
							<Skeleton
								inline={true}
								height={48}
								width={240}
								style={{ marginLeft: "16px" }}
							/>
						</div>
					</div>
				</div>
				<br />
				<div className="row">
					<Skeleton height={24} width={"25%"} />
					<Skeleton height={320} />
				</div>
			</div>
		</Container>

		<Footer />
	</>
);

export default ProductPage;
