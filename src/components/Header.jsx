import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Vitae</div>

			<div className={styles.actions}>
				<button className={styles.btnSecondary}>Template: Classic</button>
				<button className={styles.btnPrimary}>Export PDF</button>
			</div>
		</header>
	);
}

export default Header;
