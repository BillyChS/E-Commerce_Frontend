export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Inicio</h1>
      <p className="text-gray-600">
        Bienvenido a la tienda. Explora nuestros productos destacados.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Producto 1</div>
        <div className="p-4 bg-white rounded shadow">Producto 2</div>
        <div className="p-4 bg-white rounded shadow">Producto 3</div>
      </div>
    </div>
  );
}
