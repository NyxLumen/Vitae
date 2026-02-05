import { useState } from "react";
import styles from "./App.module.css";

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

	return (
		<div className={styles.appContainer}>
			<div className={styles.editorSection}>
				<h1>Vitae Editor</h1>
			</div>

			<div className={styles.previewSection}>
				{template === "harvard" && (
					<div className="template-harvard">Harvard View (Coming Soon)</div>
				)}
				{template === "modern" && (
					<div className="template-modern">Modern View (Coming Soon)</div>
				)}
			</div>
		</div>
	);
}

export default App;
