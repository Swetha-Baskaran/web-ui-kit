import Image from "next/image";
import pageNotFound from "../../assets/images/pageNotFound.svg";
import classes from "./style.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ErrorComponent = () => {
	return (
		<div className={classes["error-block"]}>
			<div>
				<div className={classes["error-msg"]}>
					<p className={classes["error-text"]}>Page Not Found</p>
					<h2 className={classes["error-title"]}>
						Look like your lost in the space.
					</h2>
				</div>
				<div className={classes["error-btns"]}>
					<button className={classes["error-btn"]}>
						<AiOutlineArrowLeft className={classes["error-btn-arrow"]} />
						Go back
					</button>
					<button className={classes["error-btn"]}>Contact Us</button>
				</div>
			</div>
			<Image
				alt='pageNotFound'
				className={classes["error-img"]}
				src={pageNotFound}
			/>
		</div>
	);
};

export default ErrorComponent;
