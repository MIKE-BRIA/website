var name = "Kyle simpsons";

var age;
age = 42;

console.log(name);

let favoriteBooks = [];

/*let addFavoriteBook = [
  "A Song of Ice and Fire",
  "The Great Gatsby",
  "Crime and Pinushment",
  "Great Expectations",
  "You Don't know JS",
];*/

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavouriteBooks() {
  console.log(`Favourite Books: ${favoriteBooks.length}`);

  for (let i of favoriteBooks) {
    console.log(i);
  }
}

addFavoriteBook("A Song of Ice and fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime and Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't know JS");

//addFavoriteBook();
console.log(favoriteBooks);
printFavouriteBooks();
