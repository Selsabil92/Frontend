import axios from 'axios';

// Base URL de ton API Flask
const API_URL = 'http://localhost:5000';  // Assure-toi que l'URL correspond à ton backend Flask

// Fonction pour se connecter (Login)
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};

// Fonction pour s'inscrire (Register)
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    throw error;
  }
};

// Fonction pour lancer un scan
export const startScan = async (scanType, target) => {
  try {
    const response = await axios.post(`${API_URL}/scan/${scanType}`, { target });
    return response.data;
  } catch (error) {
    console.error('Erreur lors du scan:', error);
    throw error;
  }
};

// Fonction pour récupérer les résultats d'un scan
export const getScanResults = async (scanId) => {
  try {
    const response = await axios.get(`${API_URL}/results/${scanId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des résultats:', error);
    throw error;
  }
};

// Fonction pour récupérer les logs
export const getLogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/logs`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des logs:', error);
    throw error;
  }
};
