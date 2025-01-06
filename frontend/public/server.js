const URL = "http://localhost:8020/getproducts";

const fetchApi = async () => {
    try {
        let data = await fetch(URL);
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        let response = await data.json();
        console.log(response);
        return response.products;
    } catch (error) {
        console.error('Error fetching data:', error);  
    }
};

const displayProductTitles = async () => {
    let products = await fetchApi();
    
    if (products && products.length > 0) {
        const productCard = document.getElementById("card"); 
        
        productCard.innerHTML = "";

        products.forEach(product => {
           
            const card = document.createElement("div");
            card.classList.add("product-card");  
          
            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("h6");
            price.textContent = product.variants[0].price;

            const lineGap = document.createElement("br");

            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(lineGap);

            productCard.appendChild(card);
        });
    } else {
        console.error("No products available");
    }
};


displayProductTitles();



// productCard.innerHTML = ""




