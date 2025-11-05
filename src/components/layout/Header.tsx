export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">Mi E-Commerce</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Inicio
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Tienda
          </a>
          <a href="/login" className="text-gray-600 hover:text-blue-600">
            Cuenta
          </a>
        </nav>
      </div>
    </header>
  );
}
