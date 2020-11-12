import { ColumnType } from "antd/lib/table";
import { CompareFn } from "antd/lib/table/interface";

import classes from './styles';

const columns: ColumnType<object>[] = [
  {
    title: "Country name",
    dataIndex: "countryName",
    key: "countryName",
    width: "300px",
  },
  {
    title: "All cases",
    dataIndex: "allCases",
    key: "allCases",
    sortDirections: ["ascend", "descend", "ascend"],
    sorter: ((a: { cases: number }, b: { cases: number }) =>
      a.cases - b.cases) as CompareFn<object>,
    defaultSortOrder: "descend",
    render: text => ({
      props: {
        className: classes.allCasesCell
      },
      children: text
    })
  },
  {
    title: "New cases today",
    dataIndex: "newCasesToday",
    key: "newCasesToday",
    render: text => ({
      props: {
        className: classes.newCasesTodayCell
      },
      children: '+' + text
    })
  },
  {
    title: "All deaths",
    dataIndex: "allDeaths",
    key: "allDeaths",
  },
  {
    title: "Today deaths",
    dataIndex: "todayDeaths",
    key: "todayDeaths",
    render: text => ({
      props: {
        className: classes.todayDeathsCell
      },
      children: '+' + text
    })
  },
  {
    title: "Total recovered",
    dataIndex: "recovered",
    key: "recovered",
  },
  {
    title: "Active cases",
    dataIndex: "activeCases",
    key: "activeCases",
  },
  {
    title: "Critical cases",
    dataIndex: "criticalCases",
    key: "criticalCases",
  },
  {
    title: "Total tests",
    dataIndex: "tests",
    key: "tests",
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
  },
  {
    title: "Tests per 1 million",
    dataIndex: "testsPerOneMillion",
    key: "testsPerOneMillion",
  },
];

export default columns;