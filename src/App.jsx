import { useState } from "react";
import styles from "./App.module.css";
import GeneralInfo from "./components/editor/GeneralInfo";
import Header from "./components/Header";
import Education from "./components/editor/Education";
import "./index.css";

const INITIAL_DATA = {
	general: {
		fullName: "John Doe",
		email: "john@example.com",
		phone: "+1 555-0123",
		location: "New York, NY",
	},
	education: [],
	experience: [],
};

function App() {
	const [resumeData, setResumeData] = useState(INITIAL_DATA);
	const [template, setTemplate] = useState("harvard");

	const handleGeneralChange = (field, value) => {
		setResumeData((prev) => ({
			...prev,
			general: {
				...prev.general,
				[field]: value,
			},
		}));
	};
	const addEducation = () => {
		setResumeData((prev) => ({
			...prev,
			education: [
				...prev.education,
				{
					id: crypto.randomUUID(),
					school: "",
					degree: "",
					startDate: "",
					endDate: "",
					location: "",
				},
			],
		}));
	};

	const deleteEducation = (id) => {
		setResumeData((prev) => ({
			...prev,
			education: prev.education.filter((item) => item.id !== id),
		}));
	};

	const handleEducationChange = (id, field, value) => {
		setResumeData((prev) => ({
			...prev,
			education: prev.education.map((item) =>
				item.id === id ? { ...item, [field]: value } : item,
			),
		}));
	};

	return (
		<div className={styles.appContainer}>
			<Header />
			<div className={styles.splitView}>
				<div className={styles.editorSection}>
					<h1>Vitae Editor</h1>
					<GeneralInfo
						data={resumeData.general}
						onChange={handleGeneralChange}
					/>

					<Education
						education={resumeData.education}
						onChange={handleEducationChange}
						onAdd={addEducation}
						onDelete={deleteEducation}
					/>
				</div>
				{/* RIGHT SIDE (Temporary Preview) */}
				<div className={styles.previewSection}>
					<div
						style={{
							background: "white",
							padding: "2rem",
							width: "210mm",
							minHeight: "297mm",
							color: "black", // Ensuring text is visible
						}}
					>
						<h1 style={{ margin: 0 }}>{resumeData.general.fullName}</h1>
						<p>
							{resumeData.general.email} | {resumeData.general.phone} |{" "}
							{resumeData.general.location}
						</p>
						<hr />

						{/* --- NEW EDUCATION PREVIEW CODE --- */}
						{resumeData.education.length > 0 && (
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
								{resumeData.education.map((edu) => (
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
												{edu.startDate}{" "}
												{edu.startDate && edu.endDate ? "—" : ""} {edu.endDate}
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
						{/* ---------------------------------- */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
