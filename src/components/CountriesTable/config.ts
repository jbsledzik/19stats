import appColors from "constants/colors";

const config = {
  pageSize: 50,
  page: 1,
  colors: {
    background: {
      allCasesCell: appColors.white,
      newCasesTodayCell: appColors.yellow,
      todayDeathsCell: appColors.red,
      hovers: {
        row: appColors.gray,
        newCasesTodayCell: appColors.yellow,
        todayDeathsCell: appColors.red,
      },
    },
    foreground: {
      todayDeathsCell: appColors.white,
    },
  },
};

export default config;
