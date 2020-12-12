import React from "react";
import {AimOutlined, BarChartOutlined, HomeOutlined, NotificationOutlined} from '@ant-design/icons';

const menuList = [
    {
        title: "首页",
        key: "/home",
        icon: <HomeOutlined/>
    },
    {
        title: "活动信息",
        key: "/activity",
        icon: <NotificationOutlined />
    },
    {
        title: "游戏攻略",
        key: "/strategy",
        icon: <AimOutlined/>,
        children: [
            {
                title: "新手攻略",
                key: "/beginner",
                icon: null
            },
            {
                title: "进阶攻略",
                key: "/advance",
                icon: null
            },
            {
                title: "职业规划",
                key: "/plan",
                icon: null
            }
        ]
    },
    {
        title: "数据实体",
        key: "/entity",
        icon: <BarChartOutlined/>,
        children: [
            {
                title: "NPC",
                key: "/npc",
                icon: null
            },
            {
                title: "怪物",
                key: "/monster",
                icon: null
            },
            {
                title: "宠物",
                key: "/pet",
                icon: null
            },
            {
                title: "装备",
                key: "/equipment",
                icon: null
            },
            {
                title: "职业-技能",
                key: "/skill",
                icon: null
            },
            /*{
                title: "Submenu",
                key: "/sub3",
                icon: null,
                children: [
                    {
                        title: "Option 11",
                        key: "/14",
                        icon: null
                    },
                    {
                        title: "Option 12",
                        key: "/15",
                        icon: null
                    }
                ]
            }*/
        ]
    },
    {
        title: "数据关系",
        key: "/relation",
        icon: <BarChartOutlined/>,
        children: [
            {
                title: "物品-怪物",
                key: "/goods-monster",
                icon: null
            }
        ]
    }
]

export default menuList;
