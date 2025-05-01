const API_BASE_URL = 'https://localhost:7218';

async function getUserById() {
    const userId = document.getElementById('userId').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    const loadingElement = document.getElementById('loading');

    // Clear previous results and errors
    resultElement.textContent = '';
    errorElement.textContent = '';
    
    // Validate input
    if (!userId) {
        errorElement.textContent = 'Please enter a User ID';
        return;
    }

    // Show loading indicator
    loadingElement.style.display = 'block';

    try {
        const response = await fetch(`${API_BASE_URL}/api/User/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed (like authorization)
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Display formatted result
        resultElement.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        errorElement.textContent = `Error: ${error.message}`;
        console.error('Error fetching user:', error);
    } finally {
        // Hide loading indicator
        loadingElement.style.display = 'none';
    }
}