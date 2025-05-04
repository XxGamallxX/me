const userdata = {
  id: 78687987698796,
  username: "user123",
  password: "password123",
  confirmPassword: true,
  phone: "01208801111",
  email: "user123@example.com",
  legalage: true,

};


async function fetch1() {
const fetch1 =await fetch("https://localhost:7218/api/User", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userdata),
},)}
fetch1()




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
  
//   // Example usage
//   getData('https://your-api-endpoint.com/data');
  