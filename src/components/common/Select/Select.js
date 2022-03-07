const Select = ({ options, optionDefault, instruction }) => {
	return (
		<select name="category" id="category">
			<option value="">{instruction}</option>
			{options &&
				options.map((option) => {
					return optionDefault && optionDefault === option.id ? (
						<option
							key={option.id}
							value={option.id}
							selected={true}
						>
							{option.value}
						</option>
					) : (
						<option key={option.id} value={option.id}>
							{option.value}
						</option>
					);
				})}
		</select>
	);
};

export default Select;
