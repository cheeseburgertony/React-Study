import React, { PureComponent } from 'react'
import withTheme from '../hoc/with-theme'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         Product:
//         <ThemeContext.Consumer>
//           {value => <h2>{value.color} - {value.size}</h2>}
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product

// 使用高阶组件后获取context数据的写法

export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product:
        <h2>{this.props.color}-{this.props.size}</h2>
      </div>
    )
  }
}

export default withTheme(Product)