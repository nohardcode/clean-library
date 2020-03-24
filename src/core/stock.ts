import Book from "../entities/Book";
import Repository from '../infrastructure/repository';
import {observable} from 'mobx';

export default class BookStock {

  @observable public books: Book[];
  private bookRepository: any;

  constructor() {
    this.bookRepository = new Repository<Book>();
    this.getAllBooks();
  }

  addBookToCollection(bookDetails: any) {
    const book = new Book();

    book.title = bookDetails.title;
    book.description = bookDetails.description;
    book.genre = bookDetails.genre;

    this.bookRepository.save(book);
    this.getAllBooks();
  }

  getAllBooks() {
    this.books = this.bookRepository.find();
  }
}
