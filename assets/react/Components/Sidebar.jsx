import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../style/Sidebar.scss';

const Sidebar = () => {
    const [folders, setFolders] = useState([]);
    useEffect(() => {
        axios.get('/api/folders')
            .then(response => {
                setFolders(response.data)
            }).catch(error => {
           console.error('Erreur lors de la recuperation du dossiers', error);
        });
    }, []);
    return (
      <div className="sidebar">
          {folders.map((folder, index) => (
              <div className="folder">
                  <p key={index}> {folder}</p>
              </div>
          ))}
      </div>
    );
}

export default Sidebar