import { jss } from 'react-jss';

import config from '../config';

import cellStyles from './cells';

// !important is used here to override default Ant Design Table styles
const styles = {
    ...cellStyles.normalState,
    tableRow: {
        cursor: 'pointer',
        '&:hover': {
            '& td': {
                background: config.colors.background.hovers.row + ' !important',
                ...cellStyles.hoverState
            }
        }
    }
};

const { classes } = jss.createStyleSheet(styles).attach()

export default classes;