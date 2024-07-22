// 使用高阶组件来对context进行增强
// 使得以后要用到context的地方直接通过高阶组件进行增强后就可以直接使用context中的数据

import { ThemeContext } from "../context/theme-context"

function withTheme(OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {value => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme