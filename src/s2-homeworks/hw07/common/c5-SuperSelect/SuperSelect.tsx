import React, {
	ChangeEvent,
	DetailedHTMLProps,
	SelectHTMLAttributes,
} from "react";
import { Option } from "../../HW7";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: Option[];
	onChangeOption?: (option: Option) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
	value,
	options,
	className,
	onChange,
	onChangeOption,
	...restProps
}) => {
	const mappedOptions: any[] = options
		? options.map((o) => (
				<option
					id={"hw7-option-" + o.id}
					className={s.option}
					key={o.id}
					value={o.id}
				>
					{o.value}
				</option>
		  ))
		: []; // map options with key

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		// делают студенты
		const newOption = options?.find((o) => o.id === +e.currentTarget.value);
		if (newOption) {
			onChangeOption?.(newOption);
		}
	};

	const finalSelectClassName = s.select + (className ? " " + className : "");

	return (
		<select
			className={finalSelectClassName}
			onChange={onChangeCallback}
			value={value}
			{...restProps}
		>
			{mappedOptions}
		</select>
	);
};

export default SuperSelect;
