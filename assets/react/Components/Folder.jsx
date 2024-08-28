import React, {useState} from 'react'; 

const Folder = ({ folder }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleFolder = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="folder">
            <div className="folder-name" onClick={toggleFolder}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#bd93f9', cursor: 'pointer' }}>{folder.name}</p>
            </div>
            {isOpen && folder['sous-dossier'] && (
                <div className='subfolders' style={{paddingLeft: '20px', borderLeft: '1px solid #6272a4'}}>
                    {folder['sous-dossier'].map((subfolder, index) => (
                        <p key={index} style={{ fontSize: '14px', color: '#f8f8f2'}}> {subfolder}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Folder;