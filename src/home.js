const loadHome = () => {
	const contentDiv = document.querySelector(".content");

	contentDiv.innerHTML = "";

	const createSection = (title, content) => {
		const container = document.createElement("div");
		container.classList.add("container");
		contentDiv.append(container);

		const sectionHeader = document.createElement("div");
		sectionHeader.classList.add("section-header");
		sectionHeader.textContent = title;
		container.append(sectionHeader);

		const sectionContent = document.createElement("div");
		sectionContent.classList.add("section-content");
		sectionContent.textContent = content;
		container.append(sectionContent);
	};

	createSection(
		"Who We Are:",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque. Morbi leo urna molestie at elementum. Arcu risus quis varius quam."
	);
	createSection(
		"What We Do:",
		"Sed velit dignissim sodales ut eu sem. Felis eget nunc lobortis mattis aliquam faucibus purus in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Sed viverra ipsum nunc aliquet bibendum."
	);
};

export default loadHome;
