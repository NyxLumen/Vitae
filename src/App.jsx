import { useState, useEffect } from "react";
import styles from "./App.module.css";
import GeneralInfo from "./components/editor/GeneralInfo";
import Header from "./components/Header";
import Education from "./components/editor/Education";
import Experience from "./components/editor/Experience";
import Projects from "./components/editor/Projects";
import ResumePreview from "./components/preview/ResumePreview";
import Footer from "./components/Footer";
import "./index.css";

const INITIAL_DATA = {
	general: {
		fullName: "Nyx Lumen",
		email: "Lumen@example.com",
		phone: "+917649874XXX",
		location: "Delhi, India",
	},
	education: [],
	experience: [],
	projects: [],
};

function App() {
	const [resumeData, setResumeData] = useState(() => {
		const savedData = localStorage.getItem("vitae-data");
		if (savedData) {
			return JSON.parse(savedData);
		}
		return INITIAL_DATA;
	});
	useEffect(() => {
		localStorage.setItem("vitae-data", JSON.stringify(resumeData));
	}, [resumeData]);

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

	const addExperience = () => {
		setResumeData((prev) => ({
			...prev,
			experience: [
				...prev.experience,
				{
					id: crypto.randomUUID(),
					company: "",
					position: "",
					startDate: "",
					endDate: "",
					location: "",
					description: "",
				},
			],
		}));
	};

	const deleteExperience = (id) => {
		setResumeData((prev) => ({
			...prev,
			experience: prev.experience.filter((item) => item.id !== id),
		}));
	};

	const handleExperienceChange = (id, field, value) => {
		setResumeData((prev) => ({
			...prev,
			experience: prev.experience.map((item) =>
				item.id === id ? { ...item, [field]: value } : item,
			),
		}));
	};

	const addProject = () => {
		setResumeData((prev) => ({
			...prev,
			projects: [
				...prev.projects,
				{
					id: crypto.randomUUID(),
					title: "",
					technologies: "",
					link: "",
					description: "",
				},
			],
		}));
	};

	const deleteProject = (id) => {
		setResumeData((prev) => ({
			...prev,
			projects: prev.projects.filter((item) => item.id !== id),
		}));
	};

	const handleProjectChange = (id, field, value) => {
		setResumeData((prev) => ({
			...prev,
			projects: prev.projects.map((item) =>
				item.id === id ? { ...item, [field]: value } : item,
			),
		}));
	};

	return (
		<div className={styles.appContainer}>
			<Header />

			<div className={styles.splitView}>
				<div className={styles.editorSection}>
					<h1>Editor</h1>
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
					<Experience
						experience={resumeData.experience}
						onChange={handleExperienceChange}
						onAdd={addExperience}
						onDelete={deleteExperience}
					/>
					<Projects
						projects={resumeData.projects}
						onChange={handleProjectChange}
						onAdd={addProject}
						onDelete={deleteProject}
					/>
				</div>
				<div className={styles.previewSection}>
					<ResumePreview data={resumeData} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
