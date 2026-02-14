import styles from "./Editor.module.css"; // We'll make this next

function GeneralInfo({ data, onChange }) {
	return (
		<div className={styles.section}>
			<h2>General Information</h2>

			<div className={styles.inputGroup}>
				<label>Full Name</label>
				<input
					type="text"
					value={data.fullName}
					onChange={(e) => onChange("fullName", e.target.value)}
					placeholder="e.g. John Doe"
				/>
			</div>

			<div className={styles.inputGroup}>
				<label>Email</label>
				<input
					type="email"
					value={data.email}
					onChange={(e) => onChange("email", e.target.value)}
					placeholder="e.g. john@gmail.com"
				/>
			</div>

			<div className={styles.inputGroup}>
				<label>Phone</label>
				<input
					type="tel"
					value={data.phone}
					onChange={(e) => onChange("phone", e.target.value)}
					placeholder="e.g. +1 555-0192"
				/>
			</div>

			<div className={styles.inputGroup}>
				<label>Location</label>
				<input
					type="text"
					value={data.location}
					onChange={(e) => onChange("location", e.target.value)}
					placeholder="e.g. London, UK"
				/>
			</div>
		</div>
	);
}

export default GeneralInfo;
