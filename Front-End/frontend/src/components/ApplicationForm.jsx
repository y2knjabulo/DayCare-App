import React, { useState } from "react";
import axios from "axios";
import API from '../api';

const submitApplication = async (formState, fileInputs) => {
  const formData = new FormData();
  formData.append('parent', JSON.stringify(formState.parent));
  formData.append('child', JSON.stringify(formState.child));

  for (let i = 0; i < fileInputs.length; i++) {
    formData.append('documents', fileInputs[i]);
  }

  try {
    console.log('Submitting form data:', formState);
    const res = await API.post('/applications', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('✅ Server response:', res.data);
    alert('Application submitted successfully!');
    return res.data;
  } catch (err) {
    console.error('❌ Submission error:', err.response?.data || err.message);
    alert('Error submitting application. Check console for details.');
  }
};


export default function ApplicationForm() {
  const [parent, setParent] = useState({ fullName: "", phone: "", address: "" });
  const [child, setChild] = useState({ firstName: "", lastName: "", dob: "", gender: "" });
  const [documents, setDocuments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("parent", JSON.stringify(parent));
    formData.append("child", JSON.stringify(child));
    for (let i = 0; i < documents.length; i++) {
      formData.append("documents", documents[i]);
    }

    try {
      const res = await axios.post("http://localhost:5000/api/applications", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Application submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting application");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-purple-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Apply for Enrollment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-semibold text-purple-700">Parent Details</h3>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={parent.fullName}
          onChange={(e) => setParent({ ...parent, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          value={parent.phone}
          onChange={(e) => setParent({ ...parent, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 border rounded"
          value={parent.address}
          onChange={(e) => setParent({ ...parent, address: e.target.value })}
        />

        <h3 className="font-semibold text-purple-700">Child Details</h3>
        <input
          type="text"
          placeholder="Child First Name"
          className="w-full p-2 border rounded"
          value={child.firstName}
          onChange={(e) => setChild({ ...child, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Child Last Name"
          className="w-full p-2 border rounded"
          value={child.lastName}
          onChange={(e) => setChild({ ...child, lastName: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={child.dob}
          onChange={(e) => setChild({ ...child, dob: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          value={child.gender}
          onChange={(e) => setChild({ ...child, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Boy</option>
          <option value="Female">Girl</option>
        </select>

        <h3 className="font-semibold text-purple-700">Upload Documents</h3>
        <input
          type="file"
          multiple
          className="w-full border p-2 rounded"
          onChange={(e) => setDocuments(e.target.files)}
        />

        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}
