import { createGlobalStyle } from "styled-components";

const commonTheme = {
	fontFamily: "sans-serif",
	fontSize: "16px",
	userSelect: "none",
};

const lightTheme = {
	...commonTheme,
	defaultColor: "#666666",
	defaultColor24: "rgba(102, 102, 102, 0.24)",
	defaultColor48: "rgba(102, 102, 102, 0.48)",
	defaultColor72: "rgba(102, 102, 102, 0.72)",
	darkColor: "#121212",
	darkColor24: "rgba(18, 18, 18, 0.24)",
	darkColor48: "rgba(18, 18, 18, 0.48)",
	darkColor72: "rgba(18, 18, 18, 0.72)",
	lightColor: "#F4F4F4",
	lightColor24: "rgba(244, 244, 244, 0.24)",
	lightColor48: "rgba(244, 244, 244, 0.48)",
	lightColor72: "rgba(244, 244, 244, 0.72)",
	blackColor: "#000000",
	blackColor24: "rgba(0, 0, 0, 0.24)",
	blackColor48: "rgba(0, 0, 0, 0.48)",
	blackColor72: "rgba(0, 0, 0, 0.72)",
	whiteColor: "#FFFFFF",
	whiteColor24: "rgba(255, 255, 255, 0.24)",
	whiteColor48: "rgba(255, 255, 255, 0.48)",
	whiteColor72: "rgba(255, 255, 255, 0.72)",
	shadowColor: "rgba(0, 0, 0, 0.24)",
};

const darkTheme = {
	...commonTheme,
	defaultColor: "#F4F4F4",
	defaultColor24: "rgba(244, 244, 244, 0.24)",
	defaultColor48: "rgba(244, 244, 244, 0.48)",
	defaultColor72: "rgba(244, 244, 244, 0.72)",
	darkColor: "#FAFAFA",
	darkColor24: "rgba(250, 250, 250, 0.24)",
	darkColor48: "rgba(250, 250, 250, 0.48)",
	darkColor72: "rgba(250, 250, 250, 0.72)",
	lightColor: "#212D40",
	lightColor24: "rgb(33, 45, 64, 0.24)",
	lightColor48: "rgb(33, 45, 64, 0.48)",
	lightColor72: "rgb(33, 45, 64, 0.72)",
	blackColor: "#FFFFFF",
	blackColor24: "rgba(255, 255, 255, 0.24)",
	blackColor48: "rgba(255, 255, 255, 0.48)",
	blackColor72: "rgba(255, 255, 255, 0724)",
	whiteColor: "#11151C",
	whiteColor24: "rgb(17, 21, 28, 0.24)",
	whiteColor48: "rgb(17, 21, 28, 0.48)",
	whiteColor72: "rgb(17, 21, 28, 0.72)",
	shadowColor: "rgba(0, 0, 0, 0.48)",
};

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	:root {
		--default: ${(props) => props.theme.defaultColor};
		--default-24: ${(props) => props.theme.defaultColor24};
		--default-48: ${(props) => props.theme.defaultColor48};
		--default-72: ${(props) => props.theme.defaultColor72};
		--dark: ${(props) => props.theme.darkColor};
		--dark-24: ${(props) => props.theme.darkColor24};
		--dark-48: ${(props) => props.theme.darkColor48};
		--dark-72: ${(props) => props.theme.darkColor72};
		--light: ${(props) => props.theme.lightColor};
		--light-24: ${(props) => props.theme.lightColor24};
		--light-48: ${(props) => props.theme.lightColor48};
		--light-72: ${(props) => props.theme.lightColor72};
		--black: ${(props) => props.theme.blackColor};
		--black-24: ${(props) => props.theme.blackColor24};
		--black-48: ${(props) => props.theme.blackColor48};
		--black-72: ${(props) => props.theme.blackColor72};
		--white: ${(props) => props.theme.whiteColor};
		--white-24: ${(props) => props.theme.whiteColor24};
		--white-48: ${(props) => props.theme.whiteColor48};
		--white-72: ${(props) => props.theme.whiteColor72};
		--shadow: 0px 0px 8px 0px ${(props) => props.theme.shadowColor};
		--horizontal-spacing: 96px;
		--vertical-spacing: 24px;
		--transition: all ease 500ms;
	}

	body {
		font-family: ${(props) => props.theme.fontFamily};
		font-size: ${(props) => props.theme.fontSize};
		user-select: ${(props) => props.theme.userSelect};
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
`;

export { GlobalStyles, lightTheme, darkTheme };
