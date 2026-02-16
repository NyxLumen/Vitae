import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Vitae</div>

			<div className={styles.actions}>
				<button className={styles.btnPrimary} onClick={() => window.print()}>
					Export PDF
				</button>
			</div>
		</header>
	);
}

export default Header;
