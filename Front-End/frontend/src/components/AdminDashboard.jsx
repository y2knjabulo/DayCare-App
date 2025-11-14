import React, { useEffect, useState } from 'react';
import API from '../api';

export default function AdminDashboard(){
  const [apps, setApps] = useState([]);

  useEffect(()=>{ load(); }, []);
  const load = async ()=>{ 
    try {
      const res = await API.get('/applications');
      setApps(res.data);
    } catch (err) {
      console.error('Error loading applications', err);
    }
  }

  const changeStatus = async (id, status) => {
    try {
      await API.patch(`/applications/${id}/status`, { status });
      load();
    } catch (err) {
      console.error('Error updating status', err);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin — Applications</h2>
      <div className="space-y-4">
        {apps.map(a => (
          <div key={a._id} className="p-4 border rounded flex justify-between items-start">
            <div>
              <div className="font-semibold">{a.child.firstName} {a.child.lastName} — {a.parent.fullName}</div>
              <div className="text-sm">Status: <span className="font-medium">{a.status}</span></div>
              <div className="mt-2 text-sm">Submitted: {new Date(a.createdAt).toLocaleString()}</div>
            </div>
            <div className="space-x-2">
              <button onClick={()=>changeStatus(a._id, 'accepted')} className="px-3 py-1 bg-green-500 text-white rounded">Accept</button>
              <button onClick={()=>changeStatus(a._id, 'rejected')} className="px-3 py-1 bg-red-500 text-white rounded">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
