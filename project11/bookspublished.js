// Input list of books
const books = [
    {
      title: "Book 1",
      author: "author 1",
      year: 2005
    },
    {
      title: "Book 2",
      author: "author 2",
      year: 2012
    },
    {
      title: "Book 3",
      author: "author 3",
      year: 2008
    },
    {
      title: "Book 4",
      author: "author 4",
      year: 2015
    }
  ];
  
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
      };
    });
  
  // Output the filtered books with capitalized author names
  console.log("Filtered books with capitalized author names:", filteredBooks);
  