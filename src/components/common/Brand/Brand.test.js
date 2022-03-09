import { render } from "@testing-library/react";
import Brand from "./Brand";
import { APP_NAME } from "./../../../utils/constants";

test("Brand App Title Test", async () => {
	const { findAllByRole } = render(<Brand />);

	const brandComponentText = await findAllByRole("heading");
	expect(brandComponentText[0]).toHaveTextContent(APP_NAME);
});
