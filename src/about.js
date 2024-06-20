const loadAbout = () => {
	const contentDiv = document.querySelector(".content");

	contentDiv.innerHTML = "";

	const createSection = (title) => {
		const container = document.createElement("div");
		container.classList.add("container");
		contentDiv.append(container);

		const sectionHeader = document.createElement("div");
		sectionHeader.classList.add("section-title");
		sectionHeader.textContent = title;
		container.append(sectionHeader);
	};

	const createSubSection = (title, content) => {
		const section = document.querySelector(".container");

		const sectionHeader = document.createElement("div");
		sectionHeader.classList.add("section-header");
		sectionHeader.textContent = title;
		section.append(sectionHeader);

		const sectionContent = document.createElement("div");
		sectionContent.classList.add("section-content");
		sectionContent.textContent = content;
		section.append(sectionContent);
	};

	createSection("About Us");
	createSubSection("Address", `95 N. Linden Street Sevierville, TN 37876`);
	createSubSection("Phone", `555-555-5555`);
	createSubSection("Email", `bscoffee@domain.com`);
};

export default loadAbout;
