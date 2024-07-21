import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { name: '书籍1', price: 99, count: 1 },
        { name: '书籍2', price: 90, count: 1 },
        { name: '书籍3', price: 89, count: 1 },
        { name: '书籍4', price: 79, count: 1 },
        { name: '书籍5', price: 88, count: 1 },
        { name: '书籍6', price: 96, count: 1 },
      ]
    }
  }

  addBook() {
    const newBook = { name: '新书籍', price: 100, count: 1 }
    // 1.直接修改原有的state，引用地址没有改变
    // 在PureComponent是不能重新引入重新渲染(re-render)
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books })
    // 在PureComponent下，要想使得页面重新渲染，由于它使用的是浅比较，需要他的引用地址发生改变时才重新渲染
    // 使用这里不能直接修改this.state中的数据，这样修改之后引用地址仍然不变，不会重新进行渲染
    // 这里需要重新创建一个新的数据来保存之前的数据，然后再添加要新增的数据，再调用setState进行重新赋值，这样新数据旧数据之间的引用地址不一样，才会重新执行render重新渲染
    // 2.复制一份books，在新的books中修改，设置新的books
    const books = [...this.state.books]
    books.push(newBook)
    this.setState({ books })
  }

  addBookCount(index) {
    // this.state.books[index].count++
    const books = [...this.state.books]
    books[index].count++
    this.setState({ books })
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <ul>
          {this.state.books.map((item, index) => (
            <li key={index}>
              <span>name:{item.name} - price:{item.price} - count:{item.count}</span>
              <button onClick={() => this.addBookCount(index)}>+1</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App