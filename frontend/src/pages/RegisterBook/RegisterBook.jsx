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
      // Simulación de userId (en proyecto real lo tomas del login)
      const userId = "662e3f8f6b9c9d2a49e61b7a";

      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    <section className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Registrar nuevo libro</h1>

      {successMessage && (
        <div className="mb-4 text-green-600 font-semibold">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2 dark:bg-gray-800"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Descripción</label>
          <textarea
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            className="w-full border rounded p-2 dark:bg-gray-800"
          />
          {errors.caption && <p className="text-red-500 text-sm">{errors.caption}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">URL de imagen</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded p-2 dark:bg-gray-800"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Calificación (1 a 5)</label>
          <input
            name="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border rounded p-2 dark:bg-gray-800"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Autor</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border rounded p-2 dark:bg-gray-800"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg"
        >
          Registrar libro
        </button>
      </form>
    </section>
  );
};

export default RegisterBook;
