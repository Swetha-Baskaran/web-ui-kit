import Image from "next/image";
import classes from "./style.module.scss";
import logo from "../../assets/images/companyLogo.png";
import { FiArrowRight } from "react-icons/fi";

const Signup = ({ handleAuth }) => {
	return (
		<div className={classes["auth-hold"]}>
			<div className={classes["auth-col-one"]}>
				<div>
					<h1 className={classes["quote"]}>Welcome to</h1>
					<Image
						alt='company logo'
						src={logo}
						className={classes["company-logo"]}
					/>
					<p className={classes["description"]}>
						Lorem ipsum doloor sit, amet consectetur adipisicing elit.
						Quisquam perferendis vitae unde tenetur ex voluptas labore
						dolores vel minus excepturi?
					</p>
				</div>
				<p className={classes["copywrite"]}>copywrite &copy; 2022</p>
			</div>
			<div className={classes["auth-col-two"]}>
				<div className={classes["row-one"]}>
					<p
						onClick={() => {
							handleAuth("signup");
						}}>
						sign in&nbsp;
					</p>
					<FiArrowRight />
				</div>
				<div className={classes["row-two"]}>
					<h1 className={classes["row-two-title"]}>Login Account</h1>
					<div className={classes["auth-input-hold"]}>
						<label
							htmlFor='signupEmail'
							className={classes["auth-label"]}>
							Email
						</label>
						<input
							type='email'
							id='signupEmail'
							className={classes["auth-input"]}
						/>
					</div>
					<div className={classes["auth-input-hold"]}>
						<label
							htmlFor='signupPassword'
							className={classes["auth-label"]}>
							Password
						</label>
						<input
							type='password'
							id='signupPassword'
							className={classes["auth-input"]}
						/>
					</div>
					<div className={classes["auth-links"]}>
						<div className={classes["checkbox-hold"]}>
							<input type='checkbox' id='signed in' />
							<label htmlFor='signed in'>Stay loged in</label>
						</div>
						<p className={classes["forgot-password"]}>
							forgot password ?
						</p>
					</div>
					<button className={classes["submit-btn"]}>login</button>
				</div>
				<div className={classes["row-three"]}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Signup;
