import React from "react"
import { CardCol, CardItem, TaskItem, Circle } from "../style.js"
import { Row, Col, Badge } from "antd"
import Icon, {
    UserOutlined,
    AreaChartOutlined,
    ShoppingCartOutlined,
    ApartmentOutlined,
} from '@ant-design/icons'
import '../page.css'
import chart from "../dashboard/chart.png"
import circleChart from "../dashboard/circleChart.png"
import { OrderList } from "./OrderList.jsx"

export function getItem(figure, title, icon, color, fontColor) {
    return {
        figure,
        title,
        icon,
        color,
        fontColor
    }
}
const items = [
    getItem("120", 'Product Sold', AreaChartOutlined),
    getItem('$3,250', 'Sales    %5.18', ShoppingCartOutlined),
    getItem('$17,250', 'Balance % 14.15 ', ApartmentOutlined),
    getItem("1275", 'New User', UserOutlined, '#dc3545', 'white'),
]
const tasks = [
    getItem("Carl Bilind", "Monthly report, Apr", null, "grey"),
    getItem("Mary Joe", "New Design Example", null, "red"),
    getItem("Becca Ferg", "Make a presentation", null, "grey"),
]
export const Dashboard = () => {
    return (
        <>
            <Row justify="space-between">
                {
                    items.map((item, index) => (
                        <Col span={4} key={index}>
                            <CardCol color={item.color} fontColor={item.fontColor}>
                                <div className="item-name">
                                    <h2>{item.figure}</h2>
                                    <p>{item.title}</p>
                                </div>
                                <Icon component={item.icon} style={{ fontSize: '50px', color: '#B1B0B0' }} />
                            </CardCol>
                        </Col>
                    ))
                }
            </Row>
            <Row gutter={28}>
                <Col flex="auto" style={{
                    maxWidth: '75%'
                }}>
                    <CardItem>
                        <h2>Analysis</h2>
                        <img src={chart} alt="chart"
                            style={{
                                width: "100%",
                            }}
                        />
                    </CardItem>
                </Col>
                <Col flex="none">
                    <CardItem style={{ width: '280px', padding: '20px 0 0' }}>
                        <h5 style={{ fontWeight: 800, padding: '0 30px' }}>TASK</h5>
                        {
                            tasks.map((task, index) => (
                                <TaskItem key={index}>
                                    <Circle color={task.color} />
                                    <div className="content">
                                        <p>{task.title}</p>
                                        <span>Created to {task.figure} </span>
                                    </div>
                                </TaskItem>

                            ))
                        }
                    </CardItem>
                </Col>
            </Row>
            <Row gutter={28}>
                <Col flex="auto" style={{
                    maxWidth: '75%'
                }}>
                    <OrderList />
                </Col>
                <Col flex="none">
                    <CardItem style={{ width: '280px', padding: '20px 0 0' }}>
                        <h5 className="bottom-border" style={{ fontWeight: 800, padding: '0 30px 10px' }}>STATICS</h5>
                        <img src={circleChart} alt="static" className="bottom-border"
                            style={{ width: '100%', padding: '20px 0' }} />
                        <div className="note" style={{ padding: '45px 30px' }}>
                            <div className="note-left"  >
                                <Badge color="#dc3545" text="Chrome" style={{ marginBottom: '10px' }} />
                                <br />
                                <Badge color="gold" text="Firefox" />
                            </div>
                            <div className="note-right" >
                                <Badge color="#6f42c1" text="Safari" style={{ marginBottom: '10px' }} />
                                <br />
                                <Badge color="#17a2b8" text="Explorer" />
                            </div>
                        </div>
                    </CardItem>
                </Col>
            </Row>
        </>
    )
}