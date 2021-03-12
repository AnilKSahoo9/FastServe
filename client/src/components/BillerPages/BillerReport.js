import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { Button } from 'reactstrap';
import {
    Card,
    CardImg,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    CardActions,
    CardSubtitle,
    Button,
    CardGroup,
    Table,
  } from "reactstrap";
export const BillerReport = () => {
    return (
        <div className="inner-container" style={{ margin: "25px", }}>
        <div  style={{
             width: '80%',
        // maxHeight: "16.5vh",
        // height: "80%",
        color: 'Black',
        justifyContent:"center",
        margin: '15px',
        borderStyle: 'groove',
        borderWidth: '3px',
        borderRadius: '7px',}}>
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
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
        <Button outline color="info" style={{marginLeft:"35rem",marginTop:"15rem"}}>Download</Button>
        </div>
        
    )
}
