
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Book from "../entities/Book";

@observer
class Books extends Component<any, any> {
  render() {
    console.log(this.props);
    return (
        <div>
          <h3>Books</h3>
          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>genre</th>
            </tr>
            </thead>
            <tbody>
            {this.props.stock.books.map(
                (book: Book) => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.description}</td>
                      <td>{book.genre}</td>
                    </tr>
                ))}
            </tbody>
          </table>

        </div>
    )
  }
}

export default Books;