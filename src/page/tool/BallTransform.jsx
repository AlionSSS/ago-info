import React, {Component} from 'react';
import {Divider, Select, Card, Col, Row, Table, Button, message} from "antd";

class Ball {

    constructor(name, num) {
        this.name = name;
        this.num = num;
    }

    str() {
        return this.name + "(" + this.num + ")";
    }

}

class Soul {

    constructor(name, num) {
        this.name = name;
        this.num = num;
    }

    str() {
        return this.name + "(" + this.num + ")";
    }

}

export default class BallTransform extends Component {

    state = {
        secondBalls: null,
        firstBall: null,
        secondBall: null,
        showData: false,
        result: null,
        loading: false
    };

    columns = [
        {title: "琉璃珠(目标)", dataIndex: "target_ball", key: "target_ball", width: 120},
        {title: "琉璃珠", dataIndex: "balls", key: "balls", width: 160},
        {title: "魂体", dataIndex: "souls", key: "souls"},
        {title: "金币", dataIndex: "money", key: "money"}
    ];

    columns2 = [
        {title: "类目", dataIndex: "class", key: "class", width: 120},
        {title: "数量", dataIndex: "num", key: "num", width: 160},
        {title: "单位", dataIndex: "unit", key: "unit"}
    ];

    /*    data = [
            {target_ball: "1星珠", ball: "", soul: "绿魂(180) || 红魂(180) || 蓝魂(50) || 黄魂(30) || 紫魂(10)", money: "15000"},
            {target_ball: "2星珠", ball: "1星珠(3)", soul: "", money: "2000"},
            {target_ball: "3星珠", ball: "2星珠(3)", soul: "", money: "3000"},
            {target_ball: "4星珠", ball: "3星珠(2)", soul: "", money: "5000"},
            {target_ball: "5星珠", ball: "4星珠(5)", soul: "", money: "100000"},
            {target_ball: "5星珠", ball: "4星珠(5)、3星珠(3)", soul: "", money: "5000"},
            {target_ball: "6星珠", ball: "5星珠(2)、4星珠(3)", soul: "", money: "5000"},
            {target_ball: "7星珠", ball: "5星珠(2)、6星珠(1)", soul: "", money: "5000"},
            {target_ball: "8星珠", ball: "6星珠(2)", soul: "黄魂(70)、紫魂(45)", money: "5000"},
            {target_ball: "9星珠", ball: "7星珠(2)", soul: "黄魂(70)、紫魂(45)", money: "5000"},
            {target_ball: "10星珠", ball: "8星珠(2)", soul: "黄魂(60)、紫魂(40)", money: "5000"},
            {target_ball: "11星珠", ball: "9星珠(2)", soul: "黄魂(60)、紫魂(40)", money: "5000"},
            {target_ball: "12星珠", ball: "10星珠(2)", soul: "黄魂(50)、紫魂(35)", money: "5000"},
            {target_ball: "13星珠", ball: "11星珠(2)", soul: "黄魂(50)、紫魂(35)", money: "5000"},
            {target_ball: "14星珠", ball: "12星珠(2)", soul: "黄魂(50)、紫魂(30)", money: "5000"},
            {target_ball: "15星珠", ball: "13星珠(2)", soul: "黄魂(300)、紫魂(100)", money: "5000"},
        ];*/

    relation = new Map([
        ["1星珠", {balls: [], souls: [new Ball("绿魂(180) || 红魂(180) || 蓝魂(50) || 黄魂(30) || 紫魂(10)", 1)], money: 0}],
        ["2星珠", {balls: [new Ball("1星珠", 3)], souls: [], money: 2000}],
        ["3星珠", {balls: [new Ball("2星珠", 3)], souls: [], money: 3000}],
        ["4星珠", {balls: [new Ball("3星珠", 2)], souls: [], money: 5000}],
        ["5星珠", {balls: [new Ball("4星珠", 5)], souls: [], money: 100000}],
        ["6星珠", {balls: [new Ball("5星珠", 2), new Ball("4星珠", 3)], souls: [], money: 5000}],
        ["7星珠", {balls: [new Ball("5星珠", 2), new Ball("6星珠", 1)], souls: [], money: 5000}],
        ["8星珠", {balls: [new Ball("6星珠", 2)], souls: [new Soul("黄魂", 70), new Soul("紫魂", 45)], money: 5000}],
        ["9星珠", {balls: [new Ball("7星珠", 2)], souls: [new Soul("黄魂", 70), new Soul("紫魂", 45)], money: 5000}],
        ["10星珠", {balls: [new Ball("8星珠", 2)], souls: [new Soul("黄魂", 60), new Soul("紫魂", 40)], money: 5000}],
        ["11星珠", {balls: [new Ball("9星珠", 2)], souls: [new Soul("黄魂", 60), new Soul("紫魂", 40)], money: 5000}],
        ["12星珠", {balls: [new Ball("10星珠", 2)], souls: [new Soul("黄魂", 50), new Soul("紫魂", 35)], money: 5000}],
        ["13星珠", {balls: [new Ball("11星珠", 2)], souls: [new Soul("黄魂", 50), new Soul("紫魂", 35)], money: 5000}],
        ["14星珠", {balls: [new Ball("12星珠", 2)], souls: [new Soul("黄魂", 50), new Soul("紫魂", 30)], money: 5000}],
        ["15星珠", {balls: [new Ball("13星珠", 2)], souls: [new Soul("黄魂", 300), new Soul("紫魂", 100)], money: 5000}]
    ]);

    resultMap = new Map([]);


    constructor(props) {
        super(props);
        console.log("start");

        // 初始值
        this.balls = [...this.relation.keys()];
        this.state.secondBalls = this.balls.slice(0, this.balls.length - 1);
        this.state.firstBall = this.balls[this.balls.length - 1];
        this.state.secondBall = this.state.secondBalls[this.state.secondBalls.length - 2];

        this.data = [];
        this.relation.forEach((v, k) =>
            this.data.push({
                target_ball: k,
                balls: v.balls.map(b => b.str()).join("、"),
                souls: v.souls.map(s => s.str()).join("、"),
                money: v.money
            })
        );

        console.log("end");
    }

    onFirstChange = (value) => {
        const i = this.balls.indexOf(value);
        const secondI = this.balls.indexOf(this.state.secondBall);
        const secondBall = secondI < i ? this.state.secondBall : this.balls[i - 1];
        this.setState({
            secondBalls: this.balls.slice(0, i),
            firstBall: value,
            secondBall: secondBall
        });
    };

    onSecondChange = (value) => {
        this.setState({
            secondBall: value
        });
    };

    onTransform = () => {
        this.setState({loading: true});

        const {firstBall, secondBall} = this.state;
        console.log(firstBall + " | " + secondBall);

        setTimeout(() => {
            this.transform(firstBall, secondBall);

            if (this.resultMap) {
                const r = [];
                this.resultMap.forEach((v, k) => {
                    r.push({
                        class: k,
                        num: v.num,
                        unit: v.unit
                    });
                });
                this.setState({result: r});

            } else {
                message.error("不能这样做！w(ﾟДﾟ)w ");
            }
            this.resultMap = new Map();

            this.setState({loading: false});
        }, 100);
    }

    transform = (src, dest, times = 1) => {
        const x = this.balls.indexOf(src);
        const y = this.balls.indexOf(dest);
        const value = this.relation.get(src);

        if (value && x > -1 && y > -1 && x >= y) {
            const {balls, souls, money} = value;
            console.log(balls, souls, money);

            // 琉璃珠
            balls.forEach(b => {
                if (this.resultMap && b.name === dest) {
                    const v = this.resultMap.get(b.name);
                    const sum = v ? v.num + b.num * times : b.num * times;
                    this.resultMap.set(b.name, {num: sum, unit: "个"})
                } else {
                    this.transform(b.name, dest, times * b.num);
                }
            });

            if (this.resultMap) {
                // 魂体
                souls.forEach(s => {
                    const v = this.resultMap.get(s.name);
                    const sum = v ? v.num + s.num * times : s.num * times;
                    this.resultMap.set(s.name, {num: sum, unit: "个"})
                });
                // 金币
                const name = "金币";
                const v = this.resultMap.get(name);
                const sum = v ? v.num + money * times : money * times;
                this.resultMap.set(name, {num: sum, unit: "G"});
            }
        } else {
            this.resultMap = null;
        }
    }

    render() {
        const balls = this.balls;
        const secondBalls = this.state.secondBalls;
        const firstBall = this.state.firstBall;
        const secondBall = this.state.secondBall;
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card title="参照表" style={{minHeight: 668, marginRight: 0}}>
                            <Table dataSource={this.data} columns={this.columns}
                                   rowKey="id"
                                   bordered={true}
                                   pagination={false}
                                   scroll={{
                                       y: 460
                                   }}
                            >
                            </Table>
                        </Card>

                    </Col>
                    <Col span={12}>
                        <Card title="转换器" style={{minHeight: 668, marginLeft: 0}}>
                            <Row type="flex" justify="center" align="middle">
                                <Select value={firstBall} style={{width: 100}} onChange={this.onFirstChange}>
                                    {balls.map(ball => (
                                        <Select.Option key={ball}>{ball}</Select.Option>
                                    ))}
                                </Select>
                                <span style={{marginLeft: 20, marginRight: 20}}> ==转为==> </span>
                                <Select style={{width: 100}} value={secondBall} onChange={this.onSecondChange}>
                                    {secondBalls.map(ball => (
                                        <Select.Option key={ball}>{ball}</Select.Option>
                                    ))}
                                </Select>
                                <Button type="primary" style={{marginLeft: 20}}
                                        onClick={this.onTransform}>转换ヽ(✿ﾟ▽ﾟ)ノ</Button>
                            </Row>
                            <Row type="flex" justify="center" align="middle">
                                <Divider>Result</Divider>
                                <Table dataSource={this.state.result} columns={this.columns2}
                                       rowKey="id"
                                       pagination={false}
                                       loading={this.state.loading}
                                       style={{marginTop: 30}}>
                                </Table>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}