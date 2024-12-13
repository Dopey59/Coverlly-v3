import { useEffect, useState } from "react";


const useGeolocation = () => {
  const [countryCode, setCountryCode] = useState("FR"); // Par défaut : France
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getCountryFromCoords = async (latitude, longitude) => {
      try {
        const res = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
        const data = await res.json();
        if (data.country) {
          setCountryCode(data.country.toUpperCase()); // Détecte le code pays (ex : "FR", "BE")
        }
      } catch (error) {
        console.error("Erreur lors de la géolocalisation :", error);
      } finally {
        setLoading(false);
      }

     
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getCountryFromCoords(latitude, longitude);
          },
          (error) => {
            console.error("Erreur géolocalisation :", error);
            setLoading(false);
          }
        );
      } else {
        console.error("La géolocalisation n'est pas supportée par ce navigateur.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return { countryCode, setCountryCode, loading };
};

export default useGeolocation;
