import { useEffect, useState } from "react";

// Simulamos un endpoint que retorna alertas
function getAlerts() {
  return Promise.resolve([
    { id: 1, unixTimestamp: 1, message: "Older" },
    { id: 2, unixTimestamp: 2, message: "Newer" },
    { id: 3, unixTimestamp: 0, message: "Oldest" },
    { id: 4, unixTimestamp: 5, message: "Newest" },
  ]);
}

// Estilos principales
const containerStyle = {
  position: 'fixed',
  top: '15px',
  right: '10px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
};

const alertStyle = {
  backgroundColor: '#fff',
  border: '1px solid #333',
  borderRadius: '5px',
  padding: '10px 15px',
  marginBottom: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '250px',
  fontFamily: 'Arial, sans-serif'
};

const closeButtonStyle = {
  background: '#000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  padding: '0 8px',
  borderRadius: '3px',
  marginLeft: '10px',
};

const controlButtons = {
  position: 'fixed',
  top: '10px',
  left: '10px',
  display: 'flex',
  gap: '10px',
};

const buttonStyle = {
  padding: '6px 12px',
  cursor: 'pointer',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
};

function App() {
  const [alerts, setAlerts] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getAlerts().then(data => {
      const sorted = data.sort((a, b) => b.unixTimestamp - a.unixTimestamp);
      setAlerts(sorted);
    });
  }, []);

  const handleClose = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const handleToggleVisibility = () => {
    setVisible(prev => !prev);
  };

  const handleLogVisible = () => {
    console.log("Visible alerts:", alerts);
  };

  return (
    <>
      <div style={controlButtons}>
        <button style={buttonStyle} onClick={handleToggleVisibility}>
          {visible ? "Hide Alerts" : "Show Alerts"}
        </button>
        <button style={buttonStyle} onClick={handleLogVisible}>
          Log Visible Alerts
        </button>
      </div>

      {visible && (
        <div style={containerStyle}>
          {alerts.map(alert => (
            <div key={alert.id} style={alertStyle}>
              <span>{alert.message}</span>
              <button style={closeButtonStyle} onClick={() => handleClose(alert.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;