import React from "react";
import Chart from "../../component/chart/Chart";
import FeaturedChart from "../../component/featuredchart/FeaturedChart";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import TableList from "../../component/table/TableList";
import Widget from "../../component/widgets/Widget";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
