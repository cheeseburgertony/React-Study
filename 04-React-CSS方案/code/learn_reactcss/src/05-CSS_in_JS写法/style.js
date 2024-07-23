import styled from "styled-components";
import {
  primaryColor,
  secondColor,
  largeSize
} from './style/variables'

// 通过模板字符串执行这个函数后返回一个组件,实际上就是一个div标签
// 将这个组件导出后将要编写样式用这个组件进行包裹
// 在模板字符串中正常编写CSS样式即可,styled-components会自动进行一系列处理然后作用到使用该组件包裹的对应类名上

// 1.基本使用
export const AppWrap = styled.div`
  .footer{
    font-size: 16px;
    color: skyblue;
  }
`

// 2.子元素单独抽取到一个样式组件
// 3.可以接收外部传入的props  通过箭头函数的形式接收
// 4.可以通过attrs给标签模板字符串中提供属性(设置默认值)
// 5.从单独的文件中引入一个变量
export const SectionWrap = styled.div.attrs(props => ({
  tColor: props.color || 'green'
}))`
  border: 1px solid skyblue;

  .title{
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};

    &:hover{
      background-color: ${primaryColor};
    }
  }

  .content{
    font-size: ${largeSize};
    color: ${secondColor};
  }
`