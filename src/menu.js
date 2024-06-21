const loadMenu = () => {
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

	const createCategory = (category) => {
		const section = document.querySelector(".container");

		const sectionHeader = document.createElement("div");
		sectionHeader.classList.add("section-header", category);
		sectionHeader.textContent = category;
		section.append(sectionHeader);
	};

	const createMenuItem = (name, category, cost) => {
		const section = document.querySelector(`.${category}`);

		const item = document.createElement("div");
		item.classList.add("item");
		section.append(item);

		const itemName = document.createElement("div");
		itemName.classList.add("item-header");
		itemName.textContent = name;
		item.append(itemName);

		const lineSpacer = document.createElement("div");
		lineSpacer.classList.add("line");
		item.append(lineSpacer);

		const itemCost = document.createElement("div");
		itemCost.classList.add("cost");
		itemCost.textContent = cost;
		item.append(itemCost);
	};

	createSection("Menu");
	createCategory("Coffee");
	createCategory("Tea");
	createCategory("Refreshers");
	createCategory("Pastries");
	createMenuItem("Chai Latte", "Tea", "$4.49");
	createMenuItem("Matcha Latte", "Tea", "$4.49");
	createMenuItem("Black/Green", "Tea", "$1.99");
	createMenuItem("Latte", "Coffee", "$4.49");
	createMenuItem("Mocha", "Coffee", "$4.99");
	createMenuItem("Americano", "Coffee", "$3.99");
	createMenuItem("Lemonade", "Refreshers", "$2.99");
	createMenuItem("Fresca", "Refreshers", "$3.49");
	createMenuItem("Juice", "Refreshers", "$2.99");
	createMenuItem("Croissant", "Pastries", "$2.99");
	createMenuItem("Bagel", "Pastries", "$1.99");
	createMenuItem("Muffin", "Pastries", "$2.99");
};

export default loadMenu;
