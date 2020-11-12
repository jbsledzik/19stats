import React from "react";
import "./App.css";
import CountriesTable from "./components/CountriesTable/component";
import AppProvider from "./context/AppProvider";
import Header from "./components/Header/component";
import { Col, Row, Space, Layout } from "antd";

const App = () => (
  <AppProvider>
    <div className="App">
      <Space size="large" direction="vertical">
        <Header />
        <Row>
          <Col span={5}>sssss</Col>
          <Col span={18}>
            <CountriesTable />
          </Col>
        </Row>
        <Layout.Footer style={{ textAlign: "center" }}>
          Powered by ReactJS and Ant Design
        </Layout.Footer>
      </Space>
    </div>
  </AppProvider>
);

export default App;
