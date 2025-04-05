// Clothing data: Tops, Bottoms, and Shoes with only images (no color or weather properties)
const tops = [
    { img: "clothes/top1.jpg" },
    { img: "clothes/top2.jpg" },
    { img: "clothes/top3.webp" },
    { img: "clothes/top4.webp" },
    { img: "clothes/top5.jpg" }
];

const bottoms = [
    { img: "clothes/pants1.jpg" },
    { img: "clothes/pants2.webp" },
    { img: "clothes/pants3.jpg" },
    { img: "clothes/pants4.png" },
    { img: "clothes/ASHOTS-07045_1024x1024.webp" }
];

const shoes = [
    { img: "clothes/shoe1.webp" },
    { img: "clothes/shoe2.webp" },
    { img: "clothes/shoe3.jpg" },
    { img: "clothes/shoe4.webp" },
    { img: "clothes/shoe5.webp" }
];

// Placeholder image for missing images
const placeholderImg = "clothes/placeholder.jpg"; 

// Function to simulate real-time weather ("hot" or "cold")
async function getWeather() {
    return "hot"; // Placeholder, replace with actual API call if needed
}

// Function to get a random clothing item from a list
function getRandomItem(items) {
    return items.length ? items[Math.floor(Math.random() * items.length)] : null;
}

// Function to shuffle outfits with independent selection
function shuffleOutfit() {
    getWeather().then(weather => {
        const filteredTops = tops; // No filtering by weather anymore
        const filteredBottoms = bottoms; // No filtering by weather anymore
        const filteredShoes = shoes; // No filtering by weather anymore

        let top = getRandomItem(filteredTops) || { img: placeholderImg };
        let bottom = getRandomItem(filteredBottoms) || { img: placeholderImg };
        let shoe = getRandomItem(filteredShoes) || { img: placeholderImg };

        console.log("Selected outfit:", top.img, bottom.img, shoe.img); // Debugging logs

        const topDisplay = document.getElementById("topDisplay");
        const bottomDisplay = document.getElementById("bottomDisplay");
        const shoesDisplay = document.getElementById("shoesDisplay");

        if (topDisplay && bottomDisplay && shoesDisplay) {
            topDisplay.innerHTML = `<img src="${top.img}" alt="Top" onerror="this.onerror=null;this.src='${placeholderImg}';">`;
            bottomDisplay.innerHTML = `<img src="${bottom.img}" alt="Bottom" onerror="this.onerror=null;this.src='${placeholderImg}';">`;
            shoesDisplay.innerHTML = `<img src="${shoe.img}" alt="Shoes" onerror="this.onerror=null;this.src='${placeholderImg}';">`;
        } else {
            console.error("One or more display elements are missing in the HTML.");
        }
    });
}

// Ensure event listeners and function calls are correct
document.addEventListener("DOMContentLoaded", function () {
    shuffleOutfit();

    const shuffleButton = document.getElementById("shuffleButton");
    if (shuffleButton) {
        shuffleButton.addEventListener("click", shuffleOutfit);
    } else {
        console.error("Shuffle button is missing from the HTML.");
    }

    const sellButton = document.getElementById("sellButton");
    if (sellButton) {
        sellButton.addEventListener("click", function () {
            alert("Feature coming soon! You'll be able to list your clothes for sale.");
        });
    } else {
        console.error("Sell button is missing from the HTML.");
    }
});

// Suggested shopping items
const suggestedItems = [
    { img: "clothes/carhart.jpg", name: "Carhart Jacket", link: "https://fashionstore.com/jacket1" },
    { img: "clothes/Billie.jpg", name: "Billie Beanie", link: "https://fashionstore.com/hat1" },
    { img: "clothes/LVBELT.jpg", name: "LV Belt", link: "https://fashionstore.com/belt1" }
];

function suggestItems() {
    const suggestedDiv = document.getElementById("suggestedItems");
    if (!suggestedDiv) {
        console.error("Suggested items container missing in HTML.");
        return;
    }

    console.log("Rendering suggested items...");

    suggestedDiv.innerHTML = "";

    suggestedItems.forEach(item => {
        console.log("Suggested item:", item.img); // Debugging log
        suggestedDiv.innerHTML += `
            <div class="suggestedItem">
                <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='${placeholderImg}';">
                <p>${item.name}</p>
                <a href="${item.link}" target="_blank">Buy Similar</a>
            </div>
        `;
    });
}

// Trigger item suggestions and outfit shuffle on page load
window.onload = function() {
    suggestItems();
    shuffleOutfit();
};

// Sell Clothes Button Alert (Placeholder)
document.addEventListener("DOMContentLoaded", function () {
    suggestItems();
    shuffleOutfit();

    const shuffleButton = document.getElementById("shuffleButton");
    if (shuffleButton) {
        shuffleButton.addEventListener("click", shuffleOutfit);
    } else {
        console.error("Shuffle button is missing from the HTML.");
    }

    const sellButton = document.getElementById("sellButton");
    if (sellButton) {
        sellButton.addEventListener("click", function () {
            alert("Feature coming soon! You'll be able to list your clothes for sale.");
        });
    } else {
        console.error("Sell button is missing from the HTML.");
    }
});
