import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const getTitle = () => (
	<Skeleton height={18} style={{ width: "25%", marginBottom: "4px" }} />
);

const getIconArea = () => <Skeleton inline={true} height={48} width={48} />;

const getChipSm = () => (
	<Skeleton
		inline={true}
		style={{
			height: "24px",
			width: "96px",
			borderRadius: "12px",
			margin: "8px 8px 8px 0px",
		}}
	/>
);

const SkProductDetails = () => {
	return (
		<div className="row">
			<div className="product-view flex ai-top jc-space-between">
				<div className="gallery">
					<Skeleton style={{ minHeight: "100%" }} />
				</div>
				<div className="details">
					<div className="information">
						<Skeleton height={32} width={"50%"} />
						<Skeleton height={32} width={"25%"} />
						<Skeleton height={14} width={"12%"} />
					</div>

					<div className="category">
						{getTitle()}
						<Skeleton
							height={36}
							width={96}
							borderRadius={18}
							style={{ margin: "8px 8px 8px 0px" }}
						/>
					</div>

					<div className="slugs">
						{getTitle()}
						<div>
							{getChipSm()}
							{getChipSm()}
						</div>
					</div>

					<div className="description">
						{getTitle()}
						<Skeleton height={96} />
					</div>

					<div className="items">
						{getTitle()}
						<div className="controls">
							<div className="flex ai-center jc-start">
								{getIconArea()}
								<Skeleton
									inline={true}
									height={48}
									width={120}
									style={{ margin: "0px 8px" }}
								/>
								{getIconArea()}
								<Skeleton
									inline={true}
									height={48}
									width={160}
									style={{ marginLeft: "16px" }}
								/>
							</div>
						</div>
					</div>

					<div className="specs">
						{getTitle()}
						<Skeleton height={256} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkProductDetails;
