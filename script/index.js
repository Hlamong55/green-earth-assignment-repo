// get categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((acData) => displayCategories(acData.categories));
};




// get plant by category
const loadCtgPlant = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayCtgPlant(data.plants));
};

const displayCtgPlant = (ctgPlants) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for(let ctgPlant of ctgPlants){

         const cateDiv = document.createElement("div");
         cateDiv.innerHTML = `
            <div class="bg-white space-y-3 p-4">
                    <img class="w-full h-60 object-cover rounded-lg" src="${ctgPlant.image}" alt="">
                    <h2 class="text-lg font-semibold">${ctgPlant.name}</h2>
                    <p class="text-gray-700 line-clamp-3 text-sm">${ctgPlant.description}</p>
                    <div class="flex justify-between text-base font-medium">
                        <h2 class="bg-[#DCFCE7] px-3 py-1 rounded-2xl text-green-800">${ctgPlant.category}</h2>
                        <h2>৳${ctgPlant.price}</h2>
                    </div>
                    <button class="bg-green-700 text-white w-full  py-2 rounded-full text-lg font-medium  hover:bg-slate-200 hover:text-green-700 border border-green-700 transition duration-30">Add to Cart</button>
            </div>
        `;
        cardContainer.append(cateDiv);
    }
};




// display get categories
const displayCategories = (allCategories) => {
    const ctgContainer = document.getElementById("ctg-container");
    ctgContainer.innerHTML = `<h2 class="font-semibold text-xl ml-3 mb-2">Categories</h2>`;


    for(let allCategory of allCategories) {
        
        const ctgDiv = document.createElement("div");
        ctgDiv.innerHTML = `
            
            <button onclick="loadCtgPlant(${allCategory.id})" class="block w-full text-lg hover:bg-green-700 hover:text-white transition  rounded  py-1 md:px-5">${allCategory.category_name}</button>
        `;

        ctgContainer.append(ctgDiv);
    }

};

loadCategories();




// get all plants
const loadAllPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((apData) => displayAllPlants(apData.plants));
};

const displayAllPlants = (plants) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for(let plant of plants){

        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
            <div class="bg-white space-y-3 p-4">
                    <img class="w-full h-60 object-cover rounded-lg" src="${plant.image}" alt="">
                    <h2 class="text-lg font-semibold">${plant.name}</h2>
                    <p class="text-gray-700 line-clamp-3 text-sm">${plant.description}</p>
                    <div class="flex justify-between text-base font-medium">
                        <h2 class="bg-[#DCFCE7] px-3 py-1 rounded-2xl text-green-800">${plant.category}</h2>
                        <h2>৳${plant.price}</h2>
                    </div>
                    <button class="bg-green-700 text-white w-full  py-2 rounded-full text-lg font-medium  hover:bg-slate-200 hover:text-green-700 border border-green-700 transition duration-30">Add to Cart</button>
            </div>
        `;

        cardContainer.append(cardDiv);
    }
};

loadAllPlants();