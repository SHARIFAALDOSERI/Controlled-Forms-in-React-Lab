// src/components/Bookshelf/Bookshelf.jsx
import { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <h3>My Books</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>By: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;