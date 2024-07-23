import styled from "styled-components";

const YWBotton = styled.button`
  border: 1px solid pink;
  background-color: skyblue;
  border-radius: 5px;
`
// 实现继承，继承之前样式组件的所有样式
export const YWButtonWrapper = styled(YWBotton)`
  color: #fff;
`

export const HomeWrapper = styled.div`
  .top{
    color: skyblue;
    font-size: 30px;
  }

  .bottom{
    .header{
      color: ${props => props.theme.color};
      font-size: ${props => props.theme.size};
    }
    .list{
      .item{
        color: pink;
        font-size: 20px;
      }
    }
  }
`