import { Component } from '@angular/core';
import { BookRow } from './book-row.component';
import { Book } from './book.model';
import {BOOK_DATA} from "../services/book.data";

@Component({
    'selector': 'book-list',
    'directives': [BookRow],
    'template': `
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                </tr>
            </thead>
            <tbody>
                <!-- snart lager vi en NgFor her istedenfor -->
                <tr book-row></tr>
                <tr book-row></tr>
                <tr book-row></tr>
                <tr book-row></tr>
            </tbody>
        </table>
    `
})
export class BookList {
    books: [Book] = BOOK_DATA;
}