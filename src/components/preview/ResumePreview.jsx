export default function ResumePreview({ data }) {
	return (
		<div
			style={{
				background: "white",
				padding: "2rem",
				width: "210mm",
				minHeight: "297mm",
				color: "black",
				boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
			}}
		>
			{/* HEADER */}
			<h1 style={{ margin: 0, fontSize: "2.5rem" }}>{data.general.fullName}</h1>
			<p style={{ marginTop: "5px", color: "#4b5563" }}>
				{data.general.email} | {data.general.phone} | {data.general.location}
			</p>
			<hr style={{ border: "1px solid #e5e7eb", margin: "1rem 0" }} />

			{/* EDUCATION */}
			{data.education.length > 0 && (
				<div style={{ marginTop: "20px" }}>
					<h3
						style={{
							borderBottom: "1px solid #ccc",
							paddingBottom: "5px",
							textTransform: "uppercase",
							fontSize: "1.1rem",
						}}
					>
						Education
					</h3>
					{data.education.map((edu) => (
						<div key={edu.id} style={{ marginBottom: "15px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									fontWeight: "600",
									fontSize: "1.05rem",
								}}
							>
								<span>{edu.school}</span>
								<span>
									{edu.startDate} {edu.startDate && edu.endDate ? "—" : ""}{" "}
									{edu.endDate}
								</span>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									color: "#4b5563",
								}}
							>
								<span>{edu.degree}</span>
								<span>{edu.location}</span>
							</div>
						</div>
					))}
				</div>
			)}

			{/* EXPERIENCE */}
			{data.experience.length > 0 && (
				<div style={{ marginTop: "20px" }}>
					<h3
						style={{
							borderBottom: "1px solid #ccc",
							paddingBottom: "5px",
							textTransform: "uppercase",
							fontSize: "1.1rem",
						}}
					>
						Experience
					</h3>
					{data.experience.map((job) => (
						<div key={job.id} style={{ marginBottom: "15px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									fontWeight: "600",
									fontSize: "1.05rem",
								}}
							>
								<span>{job.position}</span>
								<span>
									{job.startDate} {job.startDate && job.endDate ? "—" : ""}{" "}
									{job.endDate}
								</span>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									color: "#4b5563",
									fontStyle: "italic",
									marginBottom: "5px",
								}}
							>
								<span>{job.company}</span>
								<span>{job.location}</span>
							</div>
							<p
								style={{
									margin: "0",
									fontSize: "0.95rem",
									whiteSpace: "pre-wrap",
								}}
							>
								{job.description}
							</p>
						</div>
					))}
				</div>
			)}

			{/* PROJECTS (Pre-wired for Phase 2) */}
			{data.projects && data.projects.length > 0 && (
				<div style={{ marginTop: "20px" }}>
					<h3
						style={{
							borderBottom: "1px solid #ccc",
							paddingBottom: "5px",
							textTransform: "uppercase",
							fontSize: "1.1rem",
						}}
					>
						Projects
					</h3>
					{data.projects.map((proj) => (
						<div key={proj.id} style={{ marginBottom: "15px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									fontWeight: "600",
									fontSize: "1.05rem",
								}}
							>
								<span>{proj.title}</span>
								<span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
									{proj.link}
								</span>
							</div>
							<div
								style={{
									color: "#4b5563",
									fontStyle: "italic",
									marginBottom: "5px",
									fontSize: "0.95rem",
								}}
							>
								{proj.technologies}
							</div>
							<p
								style={{
									margin: "0",
									fontSize: "0.95rem",
									whiteSpace: "pre-wrap",
								}}
							>
								{proj.description}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
