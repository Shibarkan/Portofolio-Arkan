// PriceSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PriceSection() {
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const packages = [
    {
      key: "basic",
      title: "Basic",
      price: "500K",
      desc: "Sesuai untuk portfolio sederhana",
      features: ["Desain responsif", "Frontend React", "Backend Express.js"],
      banner: false,
    },
    {
      key: "standard",
      title: "Standard",
      price: "750K",
      desc: "Untuk aplikasi menengah",
      features: [
        "Semua fitur Basic",
        "Database Supabase",
        "Autentikasi User",
      ],
      banner: true,
    },
    {
      key: "premium",
      title: "Premium",
      price: "1JT",
      desc: "Website lengkap + deploy & support",
      features: [
        "Semua fitur Standard",
        "Deployment & SSL",
        "Support 1 bulan",
      ],
      banner: false,
    },
  ];

  const openForm = (pkg) => {
    setSelected(pkg);
    setShowForm(true);
  };

  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const msg = `Halo, saya ${name}. Saya ingin memesan paket *${selected.title}* dengan budget ${selected.price}. Kontak saya: ${contact}`;
    window.open(
      `https://wa.me/6283156980314?text=${encodeURIComponent(msg)}`
    );
    setShowForm(false);
  };

  return (
    <>
      <AnimatePresence>
        <motion.section
          id="pricing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="bg-gray-900 py-16 px-4"
        >
          <div className="max-w-7xl mx-auto text-center mb-12" id="price">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-white mb-4"
            >
              Paket Harga Fullstack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-400"
            >
              Solusi murah meriah mulai dari 500K - 1Jt untuk website fullstack
              profesional.
            </motion.p>
          </div>
          <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.key}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{
                  scale: pkg.banner ? 1.05 : 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  pkg.banner
                    ? "bg-indigo-700 scale-105 shadow-2xl"
                    : "bg-gray-800 shadow-xl"
                } rounded-2xl p-6 flex flex-col justify-between`}
              >
                {pkg.banner && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Recommended
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{pkg.desc}</p>
                  <div className="text-5xl font-bold text-white mb-6">
                    {pkg.price}
                  </div>
                  <ul className="text-gray-300 mb-6 space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openForm(pkg)}
                  className={`mt-auto py-2 px-4 rounded-lg font-medium ${
                    pkg.banner
                      ? "bg-white text-indigo-700 hover:bg-gray-200"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  Pilih {pkg.title}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-11/12 max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Order Paket {selected.title}
              </h2>
              <form onSubmit={submit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama lengkap"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Email atau WhatsApp"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg"
                >
                  Kirim via WhatsApp
                </button>
              </form>
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
