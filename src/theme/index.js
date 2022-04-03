import { createGlobalStyle } from "styled-components";

const commonTheme = {
	fontFamily: "sans-serif",
	fontSize: "16px",
	userSelect: "none",
};

const lightTheme = {
	...commonTheme,
	color: {
		default: {
			hex: "#666666",
			rgb: "102, 102, 102",
		},
		dark: {
			hex: "#121212",
			rgb: "18, 18, 18",
		},
		light: {
			hex: "#F4F4F4",
			rgb: "244, 244, 244",
		},
		white: {
			hex: "#FFFFFF",
			rgb: "255, 255, 255",
		},
	},
	shadowColor: "rgba(0, 0, 0, 0.24)",
};

const darkTheme = {
	...commonTheme,
	color: {
		default: {
			hex: "#F4F4F4",
			rgb: "244, 244, 244",
		},
		dark: {
			hex: "#FAFAFA",
			rgb: "250, 250, 250",
		},
		light: {
			hex: "#212D40",
			rgb: "33, 45, 64",
		},
		white: {
			hex: "#11151C",
			rgb: "17, 21, 28",
		},
	},
	shadowColor: "rgba(0, 0, 0, 0.48)",
};

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	:root {
		--default: ${(props) => props.theme.color.default.hex};
		--default-24: ${(props) => `rgba(${props.theme.color.default.rgb}, 0.24)`};
		--default-48: ${(props) => `rgba(${props.theme.color.default.rgb}, 0.48)`};
		--default-72: ${(props) => `rgba(${props.theme.color.default.rgb}, 0.72)`};
		--dark: ${(props) => props.theme.color.dark.hex};
		--light: ${(props) => props.theme.color.light.hex};
		--light-72: ${(props) => `rgba(${props.theme.color.light.rgb}, 0.72)`};
		--white: ${(props) => props.theme.color.white.hex};
		--shadow: 0px 0px 8px 0px ${(props) => props.theme.shadowColor};
		--horizontal-spacing: 96px;
		--vertical-spacing: 24px;
		--transition: all ease 500ms;
	}

	body {
		font-family: ${(props) => props.theme.fontFamily};
		font-size: ${(props) => props.theme.fontSize};
		user-select: ${(props) => props.theme.userSelect};
		transition: var(--transition);
	}


	a {
		text-decoration: none;
	}

	p {
		font-size: 1rem;
		line-height: 1.24rem;
		color: var(--default);
	}

	body {
		background-color: var(--white);
	}

	img {
		display: block;
		width: 100%;
	}

	::-webkit-scrollbar {
		width: 8px;
		background-color: var(--light);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: var(--default);
	}

	.row {
		padding-top: 48px;
	}

	.row .row {
		padding-top: 0px;
	}

	.flex {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.flex.ai-top {
		align-items: top;
	}

	.flex.ai-center {
		align-items: center;
	}

	.flex.jc-space-between {
		justify-content: space-between;
	}

	.flex.jc-start {
		justify-content: start;
	}

	.flex.jc-center {
		justify-content: center;
	}

	.flex.jc-end {
		justify-content: end;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	.sku {
		font-size: 0.75rem;
		font-weight: 300;
		color: var(--default);
	}

	@media (max-width: 1400px) {
		:root {
			--horizontal-spacing: 24px;
			--vertical-spacing: 32px;
		}

		.card.category .data {
			padding: 12px 0px;
		}
	}

	@media (max-width: 992px) {
		.row {
			padding-top: 24px;
		}
	}

	@media (max-width: 768px) {
		:root {
			--horizontal-spacing: 24px;
			--vertical-spacing: 24px;
		}
	}
`;

export { GlobalStyles, lightTheme, darkTheme };
