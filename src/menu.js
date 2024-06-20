const loadMenu = () => {
	const contentDiv = document.querySelector(".content");

	contentDiv.innerHTML = "";

	const createSection = (title, content) => {
		const container = document.createElement("div");
		container.classList.add("conatiner");
		contentDiv.append(container);
	};
};

export default loadMenu;
