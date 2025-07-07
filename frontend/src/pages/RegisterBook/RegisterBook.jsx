import React, { useState } from "react";

const RegisterBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    image: "",
    rating: "",
    author: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Título requerido";
    if (!formData.caption.trim()) newErrors.caption = "Descripción requerida";
    if (!formData.image.trim()) newErrors.image = "URL de imagen requerida";
    if (!formData.rating) {
      newErrors.rating = "Calificación requerida";
    } else if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "La calificación debe estar entre 1 y 5";
    }
    if (!formData.author.trim()) newErrors.author = "Autor requerido";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const userId = "662e3f8f6b9c9d2a49e61b7a"; // Simulado
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData, user: userId }),
      });

      if (response.ok) {
        setSuccessMessage("¡Libro registrado correctamente!");
        setFormData({
          title: "",
          caption: "",
          image: "",
          rating: "",
          author: "",
        });
        setErrors({});
      } else {
        setSuccessMessage("");
        const data = await response.json();
        alert(data.message || "Error al registrar libro.");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error de red al registrar el libro.");
    }
  };

  return (
    <div class="space-y-12 pt-10 bg-gray-50 min-h-screen">
      <section className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-xl p-8 text-black">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Registrar nuevo libro</h2>

        {successMessage && (
          <div className="mb-4 bg-green-100 border border-green-300 text-green-700 p-3 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-left">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-left">Descripción</label>
            <textarea
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.caption && <p className="text-red-500 text-sm mt-1">{errors.caption}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-left">URL de imagen</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-left">Calificación (1 a 5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              min="1"
              max="5"
            />
            {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-left">Autor</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition"
          >
            Registrar libro
          </button>
        </form>
      </section>
    </div>
  );
};

export default RegisterBook;
