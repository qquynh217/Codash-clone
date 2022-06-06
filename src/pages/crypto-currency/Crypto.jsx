import React from "react";
import { CardCol, CardItem, TaskItem, Circle, ButtonCo } from "../style.js"
import { Row, Col, Button, Select } from "antd"
import { Chart } from "./Chart.jsx";
import { MiniChart } from "./MiniChart.jsx";

export const CryptoCurrency = () => {
    return (
        <>
            <Row gutter={28}>
                <Col flex="auto" style={{ maxWidth: '50%' }}>
                    <CardItem style={{ padding: '0', }}>
                        <Chart />
                    </CardItem>
                </Col>
                <Col flex="none">
                    <MiniChart />
                </Col>
            </Row>
        </>
    )
}