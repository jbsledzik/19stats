import React, { useContext, useEffect, useState } from "react";
import { Table } from "antd";

import columns from "./columns";
import mapCountries from "./mapper";
import AppContext from "../../context/index";
import { getCasesForAllCountries } from "../../api/requests";
import config from "./config";
import classes from './styles/index';

const CountriesTable = () => {
  const [page, setPage] = useState<number>(config.page);
  const [pageSize, setPageSize] = useState<number | undefined>(config.pageSize);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const syncCountriesWithState = async () => {
      const data = await getCasesForAllCountries({
        yesterday: false,
        twoDaysAgo: false,
      });

      dispatch({
        type: "SET_COUNTRIES",
        payload: data,
      });
    };

    syncCountriesWithState();
  }, [dispatch]);

  return (
    <Table
      dataSource={mapCountries(state.countries)}
      rowClassName={classes.tableRow}
      columns={[
        {
          title: "#",
          key: "index",
          dataIndex: "index",
          render: (_text, _record, index) =>
            pageSize ? (page - 1) * pageSize + (index + 1) : 1,
        },
        ...columns,
      ]}
      bordered
      pagination={{
        onChange: (page: number, pageSize: number | undefined) => {
          setPage(page);
          setPageSize(pageSize);
        },
        defaultPageSize: pageSize,
      }}
    />
  );
};

export default CountriesTable;
