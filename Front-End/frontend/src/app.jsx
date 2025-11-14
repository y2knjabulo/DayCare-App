import React from 'react'
import Header from './components/Header.jsx'
import ApplicationForm from './components/ApplicationForm.jsx'
import MediaGallery from './components/MediaGallery.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto">
          <section className="mb-8">
            <ApplicationForm />
          </section>

          <section className="mb-8">
            <MediaGallery />
          </section>
           <div className="min-h-screen flex flex-col bg-purple-50"></div>
          <section>
            <AdminDashboard />
          </section>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center">© {new Date().getFullYear()} Bokamoso Daycare</footer>
    </div>
  )
}
