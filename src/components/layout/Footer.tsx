export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 pt-7 py-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Mi E-Commerce. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
