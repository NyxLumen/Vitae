import styles from "./Editor.module.css";

export default function Projects({ projects, onChange, onAdd, onDelete }) {
	return (
		<div className={styles.section}>
			<h2>Projects</h2>

			{projects.map((proj) => (
				<div key={proj.id} className={styles.itemGroup}>
					<div className={styles.inputGroup}>
						<label>Project Title</label>
						<input
							type="text"
							value={proj.title}
							onChange={(e) => onChange(proj.id, "title", e.target.value)}
							placeholder="e.g. Title"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Technologies Used</label>
						<input
							type="text"
							value={proj.technologies}
							onChange={(e) =>
								onChange(proj.id, "technologies", e.target.value)
							}
							placeholder="e.g. React, Python, TensorFlow"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Link / Repo (Optional)</label>
						<input
							type="text"
							value={proj.link}
							onChange={(e) => onChange(proj.id, "link", e.target.value)}
							placeholder="e.g. github.com/XXX"
						/>
					</div>

					<div className={styles.inputGroup}>
						<label>Description</label>
						<textarea
							value={proj.description}
							onChange={(e) => onChange(proj.id, "description", e.target.value)}
							placeholder="What did it do? What problems did it solve?"
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

					<button
						className={styles.deleteBtn}
						onClick={() => onDelete(proj.id)}
					>
						Delete Project
					</button>

					<hr className={styles.divider} />
				</div>
			))}

			<button className={styles.addBtn} onClick={onAdd}>
				+ Add Project
			</button>
		</div>
	);
}
