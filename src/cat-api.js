const url = 'https://api.thecatapi.com/v1';
const apiKey = "live_tVcyDY0OeHyve1DLDFj25dkeDR645GxW6YbpQEyc1odOPocRwndD9Yh7Ltb3xJix";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${apiKey}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};