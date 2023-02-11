import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';


const useLocation = () => {
    
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
try {
    
    const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
    
    const location = await Location.getLastKnownPositionAsync();
    setLocation(JSON.stringify(location));
} catch (error) {
    console.log(error)
}

  }

  useEffect(() => {
    getLocation;
  }, []);



  return JSON.stringify(location);
};

export default useLocation