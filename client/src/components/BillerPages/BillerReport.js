import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../css/BillerStyle.css";
// import { Button } from 'reactstrap';
import {Button} from "reactstrap";
const BillerReport = () => {
  return (
    <div className="inner-container">
      <div className="report">
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>Today</Tab>
            <Tab>Weekly</Tab>
            <Tab>Monthly</Tab>
            <Tab>Yearly</Tab>
          </TabList>

          <TabPanel>
            <h2>Here is all about Daily Report</h2>
          </TabPanel>
          <TabPanel>
            <h2>Here is all about Weekly Report</h2>
          </TabPanel>
          <TabPanel>
            <h2>Here is all about Monthly Report</h2>
          </TabPanel>
          <TabPanel>
            <h2>Here is all about Yearly Report</h2>
          </TabPanel>
        </Tabs>
      </div>
      <Button className="reportbtn" outline color="info">
        Download
      </Button>
    </div>
  );
};

export default BillerReport;
