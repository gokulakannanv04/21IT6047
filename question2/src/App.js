import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    // accessCode: '',
    clientId:'',
    clientSecret:''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://20.244.56.144/test/auth', formData)
      .then(response => {
        console.log('Post created:', response.data);
      })
      .catch(error => {
        console.error('Error creating post:', error.message);
      })
      .finally(() => {

        setFormData({
          companyName: '',
          ownerName: '',
          rollNo: '',
          ownerEmail: '',
          // accessCode: '',
          clientId:'',
          clientSecret:''
        });
      });
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="companyName" placeholder="Company" value={formData.companyName} onChange={handleInputChange} required />
        <input type="text" name="ownerName" placeholder="Name" value={formData.ownerName} onChange={handleInputChange} required />
        <input type="text" name="rollNo" placeholder="Roll" value={formData.rollNo} onChange={handleInputChange} required />
        <input type="text" name="ownerEmail" placeholder="Email" value={formData.ownerEmail} onChange={handleInputChange} required />
        {/* <input type="text" name="accessCode" placeholder="Access Code" value={formData.accessCode} onChange={handleInputChange} required /> */}
        <input type="text" name="clientId" placeholder="clientId" value={formData.clientId} onChange={handleInputChange} required />
        <input type="text" name="clientSecret" placeholder="clientSecret" value={formData.clientSecret} onChange={handleInputChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
