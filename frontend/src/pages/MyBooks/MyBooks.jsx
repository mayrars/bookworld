import React, { useEffect, useState } from "react";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3000/api/books", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error("Respuesta no válida: " + text.slice(0, 100));
      }

      const data = await response.json();
      console.log("Respuesta del backend:", data);
      // Ajusta según lo que veas:
      const libros = Array.isArray(data) ? data : data.books;

      if (!Array.isArray(libros))
        throw new Error("Formato inesperado en libros");

      setBooks(libros);
      setError("");
    } catch (err) {
      setError(err.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Mis libros
      </h1>

      {loading && <p className="text-center">Cargando libros...</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      {!loading && books.length === 0 && (
        <p className="text-center text-gray-600">
          No has registrado ningún libro aún.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {book.title}
              </h2>
              <p className="text-sm text-gray-700 mt-1 mb-2">{book.caption}</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Autor:</span> {book.author}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Calificación:</span> {book.rating}{" "}
                ⭐
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBooks;
