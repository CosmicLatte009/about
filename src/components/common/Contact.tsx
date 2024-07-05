import styles from "./Contact.module.scss";
import { CaptivePortalSvg, GithubSvg } from "../../assets";
import { HyperLink } from "../common";

export const Contact = () => {
	return (
		<div className={styles.wrap}>
			<strong>Contact.</strong>
			<div className={styles["contact-info"]}>
				<p>
					<span>Phone.</span>010 5669 3264
				</p>
				<p>
					<span>Email.</span>ohhm009@gmail.com
				</p>
			</div>

			<div className={styles["links-wrap"]}>
				<HyperLink
					svg={GithubSvg}
					alt="깃허브 아이콘"
					text="GitHub"
					url="https://github.com/CosmicLatte009"
				/>
				<HyperLink
					svg={CaptivePortalSvg}
					alt="지구본 아이콘"
					text="깃허브 블로그"
					url="https://cosmiclatte009.github.io/blog/"
				/>
			</div>
		</div>
	);
};
