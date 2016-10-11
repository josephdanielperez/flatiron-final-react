import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


export default function BookList(props){

  return (
    <div className="col-lg-4 col-md-4 col-sm-4">
      <div id="book-list-container" className="panel panel-default">
        <div className="panel-body">
          <Link to="/books/new" className="btn btn-default btn-block">Add a book</Link>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Books</div>
            <ul id="book-scroll-list-group" className="list-group">
              {props.books.map((book) =>
                <li className="list-group-item" key={book.id}>
                  <Link to={`/${props.linkHead}/${book.id}`}>
                    <h4 className="list-group-item-heading">{book.title}</h4>
                    <p className="list-group-item-text">{book.description.length > 40 ? `${book.description.slice(0, 40)}...` : `${book.description}`}</p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
