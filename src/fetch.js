const userdata = {
  id: 78687987698796,
  username: "user123",
  password: "password123",
  email: "user123@example.com",

};


// async function fetch1() {
// const fetch1 =await fetch("https://localhost:7218/api/User", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(userdata),
// },)}

async function postData(url = 'https://localhost:7218/api/User', data = {userdata}) {
    try {
      console.log('Sending data:', data); // Log the request payload
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add other headers here if needed (e.g., Authorization)
        },
        body: JSON.stringify(data)
      });
  
      console.log('Status:', response.status);
  
      // Check if response is ok (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server responded with error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
  
    } catch (error) {
      console.error('Fetch failed:', error.message);
      return null;
    }
  }



  async function getData(url = '') {
    try {
      console.log('Fetching from:', url);
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
          // Add additional headers here if needed
        }
      });
  
      console.log('Status:', response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server responded with error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
  
    } catch (error) {
      console.error('Fetch failed:', error.message);
      return null;
    }
  }
  
  // Example usage
  getData('https://your-api-endpoint.com/data');
  