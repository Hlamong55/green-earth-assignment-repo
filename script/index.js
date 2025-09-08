
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((apData) => displayCategories(apData.categories));
};

const displayCategories = (allCategories) => {
    const ctgContainer = document.getElementById("ctg-container");
    ctgContainer.innerHTML = `<h2 class="font-semibold text-xl ml-2 mb-2">Categories</h2>`;


    for(let allCategory of allCategories) {
        
        const ctgDiv = document.createElement("div");
        ctgDiv.innerHTML = `
            
            <button class="text-lg hover:bg-green-700 hover:text-white transition md:w-full text-left md:pl-2 py-1 ">${allCategory.category_name}</button>
        `;

        ctgContainer.append(ctgDiv);
    }

};



loadCategories();