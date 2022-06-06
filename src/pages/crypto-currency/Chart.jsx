import React from "react";
import { ButtonCo } from "../style.js"
import { Select } from "antd"
import chart from "../crypto-currency/chart.png"
const { Option } = Select

export const Chart = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <div className="content" style={{
                padding: '30px',
                borderBottom: '1px solid rgba(0,0,0,0.125)'
            }}>
                <h4 style={{ color: 'red' }}>Portolio Balance</h4>
                <h2 style={{ fontSize: '36px', display: 'inline' }}>$136,275</h2>
                <span style={{ color: '#4bc568', marginLeft: '20px' }}>% 15 ^</span>
                <br />
                <ButtonCo color="#f90a48" text="Deposit"></ButtonCo>
                <ButtonCo color="#4d4d4d" text="Widthdraw"></ButtonCo>
            </div>
            <div className="chart">
                <div className="title" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '30px',
                }}>
                    <h4 style={{ fontWeight: '800' }}>Balanace History</h4>
                    <Select defaultValue="today" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="today">Today</Option>
                        <Option value="week">This week</Option>
                        <Option value="mon">This month</Option>
                    </Select>
                </div>
                <img src={chart} alt="chart" style={{ width: '100%' }} />
            </div>
        </>
    )
}