import { useEffect } from "react";
import { useState } from "react";

export const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/TusharSahu02/117e211ec2dab089e7efca3b945fb3d0/raw/karrar-patners.json"
      );
      const data = await response.json();
      setClients(data || []);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return {
    clients,
    loading,
  };
};
