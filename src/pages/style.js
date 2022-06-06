import styled from 'styled-components'
import { Button } from 'antd'

export const CardItem = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 5%);
    transition: all 300ms;
    margin-bottom: 30px;
    border-box: box-sizing;
    overflow: hidden;
    h2{
        margin: 0;
        font-weight: 600;
        color: ${props => props.fontColor || 'black'};
    }
    .bottom-border{
        border-bottom: 1px solid gainsboro;
    }
    .note{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const CardCol = styled(CardItem)`
    min-width: 280px;
    background-color: ${props => props.color || '#fff'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        box-shadow: 0 5px 20px rgb(0 0 0 / 8%);
        transform: scale(1.01) translateY(-5px);
        cursor: pointer;
    }
    p{
        color: #B1B0B0;
        font-size: 12px;
        font-weight: 400;
        margin: 0;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const TaskItem = styled.div`
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    padding: 33px 30px;
    display: flex;
    transition: all 300ms;
    .content{
        margin: 0 15px;
    }
    p{
        margin: 0;
        font-size: 13px;
    }
    span{
        color: #B1B0B0;
        font-size: 10px;
    }
    &:hover {
        background-color: #f7f7f7;
    }
`
export const Circle = ({ color }) => (
    <svg width="14" height="14" style={{ margin: "4px 0" }}>
        <circle cx="7" cy="7" r="5" stroke={color} strokeWidth="2" fill="none" />
        Sorry, your browser does not support inline SVG.
    </svg>
)
export const ButtonCo = ({ color, text }) => {
    return (
        <Button type="primary" shape="round" style={{
            backgroundColor: color,
            borderColor: color,
            margin: '20px 20px 0 0',
            fontSize: '12px'
        }}>{text}</Button>
    )
}