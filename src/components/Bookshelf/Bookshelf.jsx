import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author:''
    })
    const handleInputChange = (event) => {
        const updatedBook = {...newBook, [event.target.name]: event.target.value};
        setNewBook(updatedBook);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook])
        setNewBook({title:'', author:''});
    };
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newBook.title}
                    onChange= {handleInputChange}
                />
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={newBook.author}
                    onChange = {handleInputChange}
                />
                <button type='submit'>Add book to bookshelf!</button>
            </form>
      </div>
    <div className="bookCardsDiv">
        {/* Book cards will display here */}
        {books.map((book, index) => (
            <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
    </div>
  ))}
      </div>
    </div>
  );
};

export default Bookshelf;
