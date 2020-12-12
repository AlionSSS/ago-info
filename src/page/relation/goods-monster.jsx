import React, {Component} from 'react';
import {Button, Card, Input, message, Select, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {monster_drop_out} from "../../global/monster-drop-out";
import TransformUtils from "../../util/transform-utils";

export default class GoodsMonster extends Component {

    state = {
        columns: null,
        data: null,
        searchType: "monster",
        searchName: null,
    }

    showModal = () => {
        message.info("暂不支持！");
    }

    initData = () => {
        // 表头
        this.columns1 = [
            {
                title: "怪物",
                dataIndex: "name",
                key: "name",
                width: 100
            },
            {
                title: "类别",
                dataIndex: "type",
                key: "type",
                width: 70
            },
            {
                title: "掉落物品",
                dataIndex: "goods",
                key: "goods"
            }
        ];
        this.columns2 = [
            {
                title: "物品",
                dataIndex: "good",
                key: "good"
            },
            {
                title: "怪物",
                dataIndex: "monsters",
                key: "monsters"
            }
        ];

        let myDiv = document.createElement("div");
        myDiv.innerHTML = monster_drop_out
        let {monster2Good, good2Monster} = TransformUtils.parseTable(myDiv);
        this.monster2Good = monster2Good;
        this.good2Monster = good2Monster;

        this.setState({
            columns: this.columns1,
            data: this.monster2Good
        });
    }

    search = () => {
        const {searchType, searchName} = this.state;
        console.log(searchType + ", " + searchName);

        if (!searchName || searchName.trim() === "") {
            // 没有搜索值，就还原
            this.setState({
                columns: this.columns1,
                data: searchType === "monster" ? this.monster2Good : this.good2Monster
            });
        } else {
            // 根据搜搜类型去查找
            if (searchType === "monster") {
                let result = this.monster2Good.filter(v => v.name.indexOf(searchName) !== -1);
                this.setState({
                    columns: this.columns1,
                    data: result
                });
            } else if (searchType === "good") {
                let result = this.good2Monster.filter(v => v.good.indexOf(searchName) !== -1);
                this.setState({
                    columns: this.columns2,
                    data: result
                });
            } else {
                this.showModal();
            }
        }
    }

    componentWillMount() {
        this.initData();
    }

    render() {

        const title = (
            <span>
                <Select value={this.state.searchType}
                        onChange={value => this.setState({searchType: value})}>
                    <Select.Option value="monster">怪物名</Select.Option>
                    <Select.Option value="good">物品名</Select.Option>
                </Select>
                <Input placeholder="请输入关键字" style={{width: "150px", margin: "0 8px"}}
                       value={this.state.searchName}
                       onChange={event => this.setState({searchName: event.target.value})}/>
                <Button type="primary" onClick={() => this.search()}>搜索</Button>
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
                    dataSource={this.state.data}
                    columns={this.state.columns}
                    rowKey="key"
                    bordered={true}/>
            </Card>
        );
    }

}