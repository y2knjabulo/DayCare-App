export default function Header(){
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Bokamoso Daycare</h1>
        <nav>
          <a className="mr-4">Apply</a>
          <a className="mr-4">Gallery</a>
          <a>Admin</a>
        </nav>
      </div>
    </header>
  );
}
