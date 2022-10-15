import { useState } from "react";
import Login from "./Login";
import Signup from "./signup";

const Auth = () => {
	const [auth, setAuth] = useState<string>("login");
	const handleAuth = (e: string) => {
		setAuth(e);
	};
	return (
		<>
			{auth === "login" ? (
				<Login handleAuth={handleAuth} />
			) : (
				<Signup handleAuth={handleAuth} />
			)}
		</>
	);
};

export default Auth;
