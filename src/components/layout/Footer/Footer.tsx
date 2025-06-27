export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold text-green-400 mb-4">
            🍽️ SEA Catering
          </div>
          <p className="text-gray-300">
            Makanan sehat, kapan saja, di mana saja. Melayani seluruh Indonesia dengan kualitas terbaik.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Kustomisasi Makanan</li>
            <li>Pengiriman Nasional</li>
            <li>Informasi Nutrisi</li>
            <li>Konsultasi Gizi</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <div className="text-gray-300 space-y-2">
            <p>Manajer: Brian</p>
            <p>Telepon: 08123456789</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 SEA Catering. Semua hak dilindungi.</p>
      </div>
    </div>
  </footer>
);
