import styles from "./Editor.module.css";

export default function Education({ education, onChange, onAdd, onDelete }) {
	return (
		<div className={styles.section}>
			<h2>Education</h2>

			{education.map((school) => (
				<div key={school.id} className={styles.itemGroup}>
					<div className={styles.inputGroup}>
						<label>School / University</label>
						<input
							type="text"
							value={school.school}
							onChange={(e) => onChange(school.id, "school", e.target.value)}
							placeholder="e.g. NIT Delhi"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Degree / Major</label>
						<input
							type="text"
							value={school.degree}
							onChange={(e) => onChange(school.id, "degree", e.target.value)}
							placeholder="e.g. B.Tech Computer Science"
						/>
					</div>

					<div className={styles.row}>
						<div className={styles.inputGroup}>
							<label>Start Date</label>
							<input
								type="text"
								value={school.startDate}
								onChange={(e) =>
									onChange(school.id, "startDate", e.target.value)
								}
								placeholder="e.g. Aug 2024"
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>End Date</label>
							<input
								type="text"
								value={school.endDate}
								onChange={(e) => onChange(school.id, "endDate", e.target.value)}
								placeholder="e.g. May 2028"
							/>
						</div>
					</div>

					<div className={styles.inputGroup}>
						<label>Location</label>
						<input
							type="text"
							value={school.location}
							onChange={(e) => onChange(school.id, "location", e.target.value)}
							placeholder="e.g. Delhi, India"
						/>
					</div>

					<button
						className={styles.deleteBtn}
						onClick={() => onDelete(school.id)}
					>
						Delete
					</button>

					<hr className={styles.divider} />
				</div>
			))}

			<button className={styles.addBtn} onClick={onAdd}>
				+ Add Education
			</button>
		</div>
	);
}
