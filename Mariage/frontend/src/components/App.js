// Dans votre composant React
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Mariage from '../contracts/Mariage.json'; // L'ABI du contrat
import MariageAddresse from '../contracts/contract-address.json'; // L'adresse du contrat


function App() {
    const [contract, setContract] = useState(null);

    // Déployer le contrat au montage du composant
    useEffect(() => {
        async function deployContrat() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Déployer le contrat
            const MariageInstance = new ethers.Contract(
                MariageAddresse.Mariage,
                Mariage.abi,
                signer
            );

            setContract(MariageInstance);
        }

        deployContrat();
    }, []);

    // Fonction pour Avoir les conjoints
    const getConjoints = async () => {
        try {
            const [conjoint1, conjoint2] = await contract.getConjoints();
            alert(`conjoint 1: ${conjoint1} \nconjoint 2: ${conjoint2} `);
        } 
        catch (error) {
            console.log("Erreur lors du mariage : " + error.message);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Contrat de Mariage</h2>
                <button onClick={getConjoints}>Marier</button>
            </header>
        </div>
    );
}

export default App;
