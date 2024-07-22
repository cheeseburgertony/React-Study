import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { id: 1, name: '书籍1', price: 99 },
        { id: 2, name: '书籍2', price: 89 },
        { id: 3, name: '书籍3', price: 79 },
        { id: 4, name: '书籍4', price: 96 },
      ]
    }
  }

  addBook() {
    const books = [...this.state.books]
    const book = { id: new Date().getTime(), name: '书籍5', price: 99 }
    books.push(book)
    this.setState({ books })
  }

  delBook(id) {
    const books = this.state.books.filter(item => item.id !== id)
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h2>书籍列表:</h2>
        {/* component={'ul'}:指定由ul标签包裹 */}
        <TransitionGroup component={'ul'}>
          {books.map((item, index) => {
            return (
              <CSSTransition key={item.id} classNames='item' timeout={1000}>
                <li>
                  <span>{item.name} - {item.price}</span>
                  <button onClick={e => this.delBook(item.id)}>删除</button>
                </li>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={e => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App