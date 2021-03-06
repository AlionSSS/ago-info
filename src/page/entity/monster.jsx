import React, {Component} from 'react';
import {Button, Card, Table, Input, Space, Modal} from "antd";
import {PlusOutlined, SearchOutlined} from '@ant-design/icons';
import {monster_data} from "../../global/monster-data"
import Highlighter from 'react-highlight-words';

export default class Monster extends Component {

    state = {
        searchText: '',
        searchedColumn: '',
        loading: false,
        visible: false
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    loadData = async () => {
        this.setState({loading: true});
        await setTimeout(() => {
            this.monster_data = monster_data;
            this.setState({loading: false});
        }, 100);
    }

    handleOk = () => {
        // this.showModal(false);
        this.setState({visible: false});
    }

    handleCancel = () => {
        this.showModal(false);
    }

    showModal = (flag) => {
        this.setState({visible: flag});
    }

    componentWillMount() {
        this.monster_columns = [
            {title: "编号", dataIndex: "id", key: "id", width: 70, fixed: 'left'},
            {title: "名称", dataIndex: "name", key: "name", width: 100, fixed: 'left', ...this.getColumnSearchProps('name')},
            {title: "等级", dataIndex: "level", key: "level", width: 70},
            {title: "系别", dataIndex: "class", key: "class", width: 100},
            {title: "HP", dataIndex: "hp", key: "hp", width: 100},
            {title: "攻击", dataIndex: "atk", key: "atk", width: 80},
            {title: "防御", dataIndex: "def", key: "def", width: 80},
            {title: "魔攻", dataIndex: "magic_atk", key: "magic_atk", width: 80},
            {title: "魔防", dataIndex: "magic_def", key: "magic_def", width: 80},
            {title: "命中率", dataIndex: "hit_rate", key: "hit_rate", width: 80},
            {title: "回避率", dataIndex: "dodge", key: "dodge", width: 80},
            {title: "地属防", dataIndex: "earth_def", key: "earth_def", width: 80},
            {title: "水属防", dataIndex: "water_def", key: "water_def", width: 80},
            {title: "火属防", dataIndex: "fire_def", key: "fire_def", width: 80},
            {title: "风属防", dataIndex: "wind_def", key: "wind_def", width: 80},
            {title: "光属防", dataIndex: "light_def", key: "light_def", width: 80},
            {title: "暗属防", dataIndex: "dark_def", key: "dark_def", width: 80},
            {title: "无属防", dataIndex: "phy_def", key: "phy_def"}
        ];
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const title = "怪物属性表";
        const extra = (
            <Button type="primary" onClick={() => this.showModal(true)}>
                <PlusOutlined/>
                添加
            </Button>
        );

        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table dataSource={this.monster_data} columns={this.monster_columns}
                           rowKey="id"
                           bordered={true} loading={this.state.loading}
                           pagination={{defaultPageSize: 10, showQuickJumper: true}}
                           scroll={{
                               y: 500,
                               x: 1500
                           }}>

                    </Table>
                    <Modal title="添加"
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           onCancel={this.handleCancel}
                    >
                        <p>暂不支持</p>
                    </Modal>
                </Card>
            </div>
        );
    }

}