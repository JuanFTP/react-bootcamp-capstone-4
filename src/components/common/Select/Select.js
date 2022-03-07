const Select = ({ options, optionDefault, instruction }) => {
	return (
		<select name="category" id="category">
			<option value="">{instruction}</option>
			{options &&
				options.map((option) => {
					return (
						<option
							key={option.id}
							value={option.id}
							selected={
								optionDefault && optionDefault === option.id
									? true
									: false
							}
						>
							{option.name}
						</option>
					);
				})}
		</select>
	);
};

export default Select;
