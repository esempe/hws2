import React, {
	ChangeEvent,
	InputHTMLAttributes,
	DetailedHTMLProps,
	HTMLAttributes,
} from "react";
import s from "./SuperRadio.module.css";
import { Option } from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
	options?: Option[];
	onChangeOption?: (option: Option) => void;

	spanProps?: DefaultSpanPropsType; // пропсы для спана
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
	id,
	name,
	className,
	options,
	value,
	onChange,
	onChangeOption,
	spanProps,
	...restProps
}) => {
	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = options?.find((o) => o.id === +e.currentTarget.value);
		if (newValue) {
			onChangeOption?.(newValue);
		}
	};
	const finalRadioClassName = s.radio + (className ? " " + className : "");
	const spanClassName =
		s.span + (spanProps?.className ? " " + spanProps.className : "");

	const mappedOptions: any[] = options
		? options.map((o) => (
				<label key={name + "-" + o.id} className={s.label}>
					<input
						id={id + "-input-" + o.id}
						className={finalRadioClassName}
						type={"radio"}
						name={id}
						value={o.id}
						checked={o.id === value}
						onChange={onChangeCallback}
						{...restProps}
					/>
					<span
						id={id + "-span-" + o.id}
						{...spanProps}
						className={spanClassName}
					>
						{o.value}
					</span>
				</label>
		  ))
		: [];

	return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
