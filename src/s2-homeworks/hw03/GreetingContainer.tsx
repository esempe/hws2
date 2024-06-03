import React, {
	ChangeEvent,
	ChangeEventHandler,
	KeyboardEvent,
	useState,
} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
	users: UserType[]; // need to fix any
	addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
	name: string,
	setError: (e: string) => void,
	setName: (n: string) => void,
	addUserCallback: (name: string) => void
) => {
	// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

	if (name.trim().length === 0) {
		setError("Ошибка! Введите имя!");
		return;
	}

	addUserCallback(name);
	setName("");
};

export const pureOnBlur = (name: string, setError: (e: string) => void) => {
	if (name.length === 0) {
		setError("Ошибка! Введите имя!");
		return;
	}
};

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
	// если нажата кнопка Enter - добавить
	if (e.key === "Enter") {
		console.log("говно");
		addUser();
	}
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	const [name, setName] = useState<string>(""); // need to fix any
	const [error, setError] = useState<string>(""); // need to fix any

	const setNameCallback: ChangeEventHandler<HTMLInputElement> = (e) => {
		// need to fix any
		setName(e.target.value); // need to fix

		error && setError("");
	};
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback);
	};

	const onBlur = () => {
		pureOnBlur(name, setError);
	};

	const onEnter = (e: KeyboardEvent) => {
		pureOnEnter(e, addUser);
	};

	const totalUsers = users.length; // need to fix
	const lastUserName = users.length > 1 ? users[users.length - 2].name : ""; // need to fix

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	);
};

export default GreetingContainer;
