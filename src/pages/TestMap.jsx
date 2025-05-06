 
 
 
 

  import React, { useState } from 'react';

  const Test = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
  
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your key
    const zoom = 14;
    const width = 600;
    const height = 400;
  
    const handleGetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setError(null);
          },
          (err) => {
            setError('Error getting location: ' + err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };
  
    const mapUrl = location
      ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=${zoom}&size=${width}x${height}&markers=color:red%7C${location.lat},${location.lng}&key=${apiKey}`
      : null;
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Get Your Location and Show Map</h2>
        <button onClick={handleGetLocation} style={{ margin: '10px', padding: '10px' }}>
          Get My Location
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {mapUrl && (
          <div>
            <h3>Your Location:</h3>
            <img src={mapUrl} alt="Map" width={width} height={height} />
          </div>
        )}
      </div>
    );
  };
  
  export default Test;







