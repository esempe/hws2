import React, {
	SelectHTMLAttributes,
	DetailedHTMLProps,
	ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: any[];
	onChangeOption?: (option: any) => void;
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
		onChangeOption?.(e.currentTarget.value);
	};

	const finalSelectClassName = s.select + (className ? " " + className : "");
	const getValue = (s: string): number => {
		switch (s) {
			case "x":
				return 1;
			case "y":
				return 2;
			case "z":
				return 3;

			default:
				return 1;
		}
	};
	return (
		<select
			className={finalSelectClassName}
			onChange={onChangeCallback}
			value={getValue(value as string)}
			{...restProps}
		>
			{mappedOptions}
		</select>
	);
};

export default SuperSelect;
