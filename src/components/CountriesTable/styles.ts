import { jss } from 'react-jss';
import config from './config';

// !important is used here to override default Ant Design Table styles
const styles = {
    allCasesCell: {
        background: config.colors.background.allCasesCell + ' !important'
    },
    newCasesTodayCell: {
        background: config.colors.background.newCasesTodayCell
    },
    todayDeathsCell: {
        background: config.colors.background.todayDeathsCell,
        color: config.colors.foreground.todayDeathsCell,
    },
    tableRow: {
        cursor: 'pointer',
        '&:hover': {
            '& td': {
                background: config.colors.background.hovers.row + ' !important',
                '&[class*="todayDeathsCell"]': {
                    background: config.colors.background.hovers.todayDeathsCell + ' !important'
                },
                '&[class*="newCasesToday"]': {
                    background: config.colors.background.hovers.newCasesTodayCell + ' !important'
                },
            }
        }
    }
};

const { classes } = jss.createStyleSheet(styles).attach()

export default classes;