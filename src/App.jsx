import { useState } from "react";
import styles from "./App.module.css";
import GeneralInfo from "./components/editor/GeneralInfo";
import Header from "./components/Header";

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

	return (
		<div className={styles.appContainer}>
			{/* 1. The Header sits firmly at the top */}
			<Header />

			{/* 2. The Split View wraps the editor and preview side-by-side below it */}
			<div className={styles.splitView}>
				{/* LEFT SIDE */}
				<div className={styles.editorSection}>
					<h1>Vitae Editor</h1>
					<GeneralInfo
						data={resumeData.general}
						onChange={handleGeneralChange}
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
						}}
					>
						<h1 style={{ margin: 0 }}>{resumeData.general.fullName}</h1>
						<p>
							{resumeData.general.email} | {resumeData.general.phone} |{" "}
							{resumeData.general.location}
						</p>
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
