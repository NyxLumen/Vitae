import styles from "./Editor.module.css";

export default function Experience({ experience, onChange, onAdd, onDelete }) {
	return (
		<div className={styles.section}>
			<h2>Professional Experience</h2>

			{experience.map((job) => (
				<div key={job.id} className={styles.itemGroup}>
					<div className={styles.inputGroup}>
						<label>Company Name</label>
						<input
							type="text"
							value={job.company}
							onChange={(e) => onChange(job.id, "company", e.target.value)}
							placeholder="e.g. Tech Corp"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Position Title</label>
						<input
							type="text"
							value={job.position}
							onChange={(e) => onChange(job.id, "position", e.target.value)}
							placeholder="e.g. Software Engineer"
						/>
					</div>

					<div className={styles.row}>
						<div className={styles.inputGroup}>
							<label>Start Date</label>
							<input
								type="text"
								value={job.startDate}
								onChange={(e) => onChange(job.id, "startDate", e.target.value)}
								placeholder="e.g. Jan 2024"
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>End Date</label>
							<input
								type="text"
								value={job.endDate}
								onChange={(e) => onChange(job.id, "endDate", e.target.value)}
								placeholder="e.g. Present"
							/>
						</div>
					</div>

					<div className={styles.inputGroup}>
						<label>Location</label>
						<input
							type="text"
							value={job.location}
							onChange={(e) => onChange(job.id, "location", e.target.value)}
							placeholder="e.g. Remote"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Description</label>
						<textarea
							value={job.description}
							onChange={(e) => onChange(job.id, "description", e.target.value)}
							placeholder="Main responsibilities and achievements..."
							rows="4"
							style={{
								resize: "vertical",
								fontFamily: "inherit",
								padding: "0.75rem",
								borderRadius: "6px",
								border: "1px solid #d1d5db",
							}}
						/>
					</div>

					<button className={styles.deleteBtn} onClick={() => onDelete(job.id)}>
						Delete Role
					</button>

					<hr className={styles.divider} />
				</div>
			))}

			<button className={styles.addBtn} onClick={onAdd}>
				+ Add Experience
			</button>
		</div>
	);
}
