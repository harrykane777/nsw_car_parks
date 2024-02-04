import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 

const AddressBox = () => {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: 'white', 
          width: '45%',
          borderRadius: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }} 
      >
        Address
      </div>
    );
}

export default AddressBox;