import Card from "../reusableComponents/card/Card";
import Target from "../reusableComponents/target/Target";
import Table from "../reusableComponents/table/Table";

const Dashboard = () => {
  return (
    <div>
      <div className="main-content">
        <span className="title">May 2022 Performance</span>
        <div className="cards">
          <Card title="views" digits="7,124,568" />
          <Card title="followers" digits="91,344" />
          <Card title="likes" digits="534,931" />
        </div>
      </div>
      <div className="main-content">
        <span className="title">Statistics</span>
        <div className="cards">
          <Target />
        </div>
      </div>
      <div className="main-content">
        <span className="title">Monthly Tasks</span>
        <div className="table-container">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
