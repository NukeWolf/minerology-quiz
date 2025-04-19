import { useState } from 'react';
import { minerals, Mineral } from '../data/minerals';
import MineralImageFetcher from '../utils/MineralImageFetcher';
import './AdminPanel.css';

const AdminPanel = () => {
  const [mineralList, setMineralList] = useState<Mineral[]>(minerals);
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [newMineral, setNewMineral] = useState<Partial<Mineral>>({
    id: '',
    name: '',
    imageUrls: [],
    formula: '',
    classification: '',
    characteristics: '',
    hints: ['']
  });
  const [mode, setMode] = useState<'view' | 'add' | 'edit'>('view');
  const [showImageFetcher, setShowImageFetcher] = useState(false);

  // Classification options
  const classifications = [
    'Element',
    'Sulfide',
    'Halide',
    'Oxide',
    'Hydroxide',
    'Carbonate',
    'Nitrate',
    'Borate',
    'Sulfate',
    'Phosphate',
    'Silicate - Nesosilicate',
    'Silicate - Sorosilicate',
    'Silicate - Cyclosilicate',
    'Silicate - Inosilicate',
    'Silicate - Phyllosilicate',
    'Silicate - Tectosilicate',
    'Organic'
  ];

  const handleAddNew = () => {
    setMode('add');
    setNewMineral({
      id: '',
      name: '',
      imageUrls: [],
      formula: '',
      classification: '',
      characteristics: '',
      hints: ['']
    });
    setSelectedMineral(null);
  };

  const handleEditMineral = (mineral: Mineral) => {
    setMode('edit');
    setSelectedMineral(mineral);
    setNewMineral({ ...mineral, hints: [...(mineral.hints || [])] });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMineral({ ...newMineral, [name]: value });
  };

  const handleHintChange = (index: number, value: string) => {
    const updatedHints = [...(newMineral.hints || [])];
    updatedHints[index] = value;
    setNewMineral({ ...newMineral, hints: updatedHints });
  };

  const addHint = () => {
    setNewMineral({ 
      ...newMineral, 
      hints: [...(newMineral.hints || []), ''] 
    });
  };

  const removeHint = (index: number) => {
    const updatedHints = [...(newMineral.hints || [])];
    updatedHints.splice(index, 1);
    setNewMineral({ ...newMineral, hints: updatedHints });
  };

  const handleAddImages = (urls: string[]) => {
    setNewMineral({
      ...newMineral,
      imageUrls: [...(newMineral.imageUrls || []), ...urls]
    });
    setShowImageFetcher(false);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...(newMineral.imageUrls || [])];
    updatedImages.splice(index, 1);
    setNewMineral({ ...newMineral, imageUrls: updatedImages });
  };

  const handleSave = () => {
    if (!newMineral.id || !newMineral.name || !(newMineral.imageUrls?.length)) {
      alert('Please fill in all required fields (ID, Name, and at least one Image)');
      return;
    }

    // For this demo, we're not actually saving to a database
    // In a real application, you would make API calls here
    
    if (mode === 'add') {
      // Create a new mineral
      const newMineralFull: Mineral = {
        id: newMineral.id,
        name: newMineral.name,
        imageUrls: newMineral.imageUrls || [],
        formula: newMineral.formula,
        classification: newMineral.classification,
        characteristics: newMineral.characteristics,
        hints: newMineral.hints?.filter(hint => hint.trim() !== '')
      };
      
      setMineralList([...mineralList, newMineralFull]);
      alert(`Mineral "${newMineral.name}" added successfully!`);
    } else if (mode === 'edit' && selectedMineral) {
      // Update existing mineral
      const updatedList = mineralList.map(mineral => 
        mineral.id === selectedMineral.id 
          ? {
              ...mineral,
              name: newMineral.name || mineral.name,
              imageUrls: newMineral.imageUrls || mineral.imageUrls,
              formula: newMineral.formula,
              classification: newMineral.classification,
              characteristics: newMineral.characteristics,
              hints: newMineral.hints?.filter(hint => hint.trim() !== '')
            }
          : mineral
      );
      
      setMineralList(updatedList);
      alert(`Mineral "${newMineral.name}" updated successfully!`);
    }
    
    setMode('view');
    setNewMineral({
      id: '',
      name: '',
      imageUrls: [],
      formula: '',
      classification: '',
      characteristics: '',
      hints: ['']
    });
    setSelectedMineral(null);
  };

  const handleCancel = () => {
    setMode('view');
    setNewMineral({
      id: '',
      name: '',
      imageUrls: [],
      formula: '',
      classification: '',
      characteristics: '',
      hints: ['']
    });
    setSelectedMineral(null);
    setShowImageFetcher(false);
  };

  const exportToJSON = () => {
    const data = JSON.stringify(mineralList, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'minerals.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Mineral Administration</h2>
        <div className="admin-actions">
          <button className="admin-btn add-btn" onClick={handleAddNew}>Add New Mineral</button>
          <button className="admin-btn export-btn" onClick={exportToJSON}>Export to JSON</button>
        </div>
      </div>

      {mode === 'view' ? (
        <div className="mineral-table-container">
          <table className="mineral-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Classification</th>
                <th>Formula</th>
                <th>Images</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mineralList.map(mineral => (
                <tr key={mineral.id}>
                  <td>{mineral.name}</td>
                  <td>{mineral.classification || '-'}</td>
                  <td>{mineral.formula || '-'}</td>
                  <td>{mineral.imageUrls.length}</td>
                  <td>
                    <button 
                      className="action-btn edit-btn"
                      onClick={() => handleEditMineral(mineral)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mineral-form">
          <h3>{mode === 'add' ? 'Add New Mineral' : `Edit Mineral: ${selectedMineral?.name}`}</h3>
          
          <div className="form-group">
            <label htmlFor="id">ID (required):</label>
            <input 
              type="text" 
              id="id" 
              name="id" 
              value={newMineral.id} 
              onChange={handleInputChange}
              disabled={mode === 'edit'}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name (required):</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={newMineral.name} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="formula">Chemical Formula:</label>
            <input 
              type="text" 
              id="formula" 
              name="formula" 
              value={newMineral.formula || ''} 
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="classification">Classification:</label>
            <select 
              id="classification" 
              name="classification" 
              value={newMineral.classification || ''} 
              onChange={handleInputChange}
            >
              <option value="">Select a classification</option>
              {classifications.map(classification => (
                <option key={classification} value={classification}>
                  {classification}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="characteristics">Characteristics:</label>
            <textarea 
              id="characteristics" 
              name="characteristics" 
              value={newMineral.characteristics || ''} 
              onChange={handleInputChange}
              rows={3}
            />
          </div>
          
          <div className="form-group">
            <label>Hints:</label>
            {newMineral.hints?.map((hint, index) => (
              <div key={index} className="hint-input">
                <input 
                  type="text" 
                  value={hint} 
                  onChange={(e) => handleHintChange(index, e.target.value)}
                  placeholder={`Hint ${index + 1}`}
                />
                <button 
                  type="button" 
                  className="remove-btn"
                  onClick={() => removeHint(index)}
                  disabled={newMineral.hints?.length === 1}
                >
                  &times;
                </button>
              </div>
            ))}
            <button type="button" className="add-hint-btn" onClick={addHint}>
              + Add Hint
            </button>
          </div>
          
          <div className="form-group">
            <label>Images (at least one required):</label>
            <div className="image-gallery">
              {newMineral.imageUrls?.map((url, index) => (
                <div key={index} className="image-preview">
                  <img src={url} alt={`${newMineral.name} ${index + 1}`} />
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => removeImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button 
              type="button" 
              className="fetch-images-btn"
              onClick={() => setShowImageFetcher(true)}
            >
              Find Images
            </button>
          </div>
          
          {showImageFetcher && (
            <MineralImageFetcher onImagesSelected={handleAddImages} />
          )}
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="save-btn" onClick={handleSave}>
              Save Mineral
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 