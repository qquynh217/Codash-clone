import React from "react";
import { Row, Col, Button, Select } from "antd"
import { CardCol } from "../style.js"
import Icon, {
    DollarCircleFilled,
    SlackOutlined,
    SketchCircleFilled,
    RocketFilled,
} from '@ant-design/icons'
import { getItem } from "../dashboard/Dashboard.jsx";

const Chartline = ({ color }) => {
    return (
        <svg width="220" height="50">
            <path d="
                        M 0 50
                        S 0 50, 110 35
                        C 110 35, 140 48, 150 33
                        S 150 30, 220 25
                        "
                fill="none" stroke={color} strokeWidth="2" />
        </svg>
    )
}
const CardChart = ({ item }) => {
    return (
        <CardCol style={{ display: 'block' }}>
            <div className="flex">
                <div className="item-name">
                    <h2>${item.title}</h2>
                    <p>{item.figure}</p>
                </div>
                <Icon component={item.icon} style={{ fontSize: '46px', color: item.color }} />
            </div>
            <Chartline color={item.color} />
        </CardCol>
    )
}
const RowCard = ({ item1, item2 }) => (
    <Row gutter={28}>
        <Col flex="none">
            <CardChart item={item1} />
        </Col>
        <Col flex="none">
            <CardChart item={item2} />
        </Col>
    </Row>
)
const carditems = [
    [getItem("7.340000434", "24,175", DollarCircleFilled, "#ffc107"),
    getItem("7.340000434", "2,776", SlackOutlined, "#3cc8c8")],
    [getItem("7.340000434", "12,473", SketchCircleFilled, "#212529"),
    getItem("7.340000434", "1.315", RocketFilled, "#08b5e5")],
    [getItem("7.340000434", "7,641", DollarCircleFilled, "#346aa9"),
    getItem("7.340000434", "1,496", DollarCircleFilled, "#58bf00")],
]
export const MiniChart = () => {
    return (
        <>
            {
                carditems.map((items, index) => (
                    <RowCard
                        key={index}
                        item1={items[0]}
                        item2={items[1]}
                    />
                ))
            }
        </>
    )
}