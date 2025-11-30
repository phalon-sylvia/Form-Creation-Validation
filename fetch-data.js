// Step 1: Initialize the async function
async function fetchUserData() {

    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // Display user name
            userList.appendChild(li);
        });

        // Append the whole list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Step 8: Invoke fetchUserData when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
