import config from "../config";

// !important is used here to override default Ant Design Table styles
const cells = {
    normalState: {
        allCasesCell: {
            background: config.colors.background.allCasesCell + ' !important'
        },
        newCasesTodayCell: {
            background: config.colors.background.newCasesTodayCell,

            '&.ant-table-column-sort': {
                background: config.colors.background.newCasesTodayCell + ' !important',
            },
        },
        todayDeathsCell: {
            background: config.colors.background.todayDeathsCell,
            color: config.colors.foreground.todayDeathsCell,
        },
    },
    hoverState: {
        '&[class*="todayDeathsCell"]': {
            background: config.colors.background.hovers.todayDeathsCell + ' !important',
        },
        '&[class*="newCasesTodayCell"]': {
            background: config.colors.background.hovers.newCasesTodayCell + ' !important',
        },
    }
}

export default cells;