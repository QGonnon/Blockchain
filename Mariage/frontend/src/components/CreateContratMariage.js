import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ContratMariage from '../contracts/Mariage.json'; // L'ABI du contrat
import MariageAddresse from '../contracts/contract-address.json'; // L'adresse du contrat

function CreateContratMariage() {
    const [provider, setProvider] = useState(null);
    const [loading, setLoading] = useState(false);
    const [contratAddress, setContratAddress] = useState(null);
    const [mariAddress, setMariAddress] = useState('');
    const [marieeAddress, setMarieeAddress] = useState('');

    useEffect(() => {
        // Vérifier si MetaMask est installé
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
        } else {
            console.error("MetaMask n'est pas installé !");
        }
    }, []);

    // Gérer le changement dans l'entrée de l'adresse du mari
    const handleMariChange = (event) => {
        setMariAddress(event.target.value);
    };

    // Gérer le changement dans l'entrée de l'adresse de la mariée
    const handleMarieeChange = (event) => {
        setMarieeAddress(event.target.value);
    };

    const deployContratMariage = async (provider, mari, mariee) => {
        try {
            // Récupérer le signer
            const signer = provider.getSigner();
    
            // Déployer le contrat
            const ContratMariageFactory = new ethers.ContractFactory(
                ContratMariage.abi,
                ContratMariage.bytecode,
                signer
            );
            const contratMariage = await ContratMariageFactory.deploy(mari, mariee);
    
            // Attendre la confirmation du déploiement
            await contratMariage.deployed();
    
            return contratMariage.address; // Retourner l'adresse du contrat déployé
        } catch (error) {
            console.error("Erreur lors du déploiement du contrat de mariage : ", error);
            throw error;
        }
    };

    // Gérer le clic sur le bouton pour déployer le contrat de mariage
    const handleDeployContrat = async () => {
        setLoading(true);
        try {
            // Remplacer ces valeurs par les adresses du mari et de la mariée
            const mari = mariAddress; // Adresse du mari
            const mariee = marieeAddress; // Adresse de la mariée

            // Déployer le contrat de mariage
            const contratAddress = await deployContratMariage(provider, mari, mariee);
            setContratAddress(contratAddress);
        } catch (error) {
            console.error("Erreur lors du déploiement du contrat de mariage : ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Création Contrat de Mariage</h2>
                <div>
                    <label>Adresse du Mari:</label>
                    <input type="text" value={mariAddress} onChange={handleMariChange} />
                </div>
                <div>
                    <label>Adresse de la Mariée:</label>
                    <input type="text" value={marieeAddress} onChange={handleMarieeChange} />
                </div>
                {loading ? (
                    <p>Chargement en cours...</p>
                ) : (
                    <>
                        {contratAddress ? (
                            <p>Contrat déployé à l'adresse : {contratAddress}</p>
                        ) : (
                            <button onClick={handleDeployContrat}>Déployer le Contrat de Mariage</button>
                        )}
                    </>
                )}
            </header>
        </div>
    );
}

export default CreateContratMariage;
