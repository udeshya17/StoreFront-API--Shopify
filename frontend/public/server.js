const URL = "http://localhost:8020/getproducts";

const fetchApi = async () => {
    try {
        let data = await fetch(URL);
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        let response = await data.json();
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);  
    }
};

fetchApi();
