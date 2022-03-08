const Select = ({ options, optionDefault, instruction }) => {
	return (
		<select name="category" id="category" defaultValue={optionDefault}>
			<option value="">{instruction}</option>
			{options &&
				options.map((option) => {
					return (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					);
				})}
		</select>
	);
};

export default Select;
