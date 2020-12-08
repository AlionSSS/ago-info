import React, {Component} from 'react';
import {Card, Select, Button, Input, Table, message} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

export default class PetHome extends Component {

    state = {
        pets: [
            {
                "name": "巧可可",
                "level": 85,
                "atk": 928,
                "mg_atk": 454,
            },
            {
                "name": "无人魔道兵",
                "level": 85,
                "atk": 262,
                "mg_atk": 622,
            }
        ]
    }

    initColumns = () => {
        // 表头
        this.columns = [
            {
                title: "名称",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "等级",
                dataIndex: "level",
                key: "level",
                render: (level) => 'Lv ' + level
            },
            {
                title: "攻击",
                dataIndex: "atk",
                key: "atk"
            },
            {
                title: "魔法攻击",
                dataIndex: "mg_atk",
                key: "mg_atk"
            }
        ];
    }

    showModal = () => {
        message.info("暂不支持！");
    }

    componentWillMount() {
        this.initColumns();
    }

    render() {
        const {pets} = this.state;
        const title = (
            <span>
                <Select value='1'>
                    <Select.Option value="1">按名称搜索</Select.Option>
                    <Select.Option value="2">按描述搜索</Select.Option>
                </Select>
                <Input placeholder="请输入关键字" style={{width: "150px", margin: "0 5px"}}/>
                <Button type="primary">搜索</Button>
            </span>
        );
        const extra = (
            <Button type="primary" onClick={() => this.showModal()}>
                <PlusOutlined/>
                添加
            </Button>
        );
        return (
            <Card title={title} extra={extra}>
                <Table
                    dataSource={pets}
                    columns={this.columns}
                    rowKey="key"
                    bordered={true}/>
            </Card>
        );
    }

}