import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import io from "socket.io-client";
import styles from '../src/styles';
import ThoughtList from "../src/thoughtList";
import {
    Grid,
    Typography,
    Button,
    withStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
  } from "@material-ui/core";

const WebsocketDemo = (props) => {

const[name,setName] = useState('');
const [desc,setDesc] = useState('');
const [thoughts,setThought] = useState([]);
const [showAddDialog,setshowAddDialog] = useState(false);

    const fetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/thoughts`);
             setThought(response.data.message);
            // if (response.status == 200) {
            //   //setThought(response.data.message);
            //   console.log(response)
            // } else {
            //   console.log('error');
            // }
          } catch (error) {
            console.log("Error with fetching thoughts: ", error);
            alert(
              "Error with fetching data. Please check the console for more info."
            );
          }
    }

useEffect(() => {
    const socket = io(`http://localhost:4000/thoughts/socket`);

    socket.on("newThought", (thought) => {
        setThought(thought);
        console.log(thought);
    });

    socket.on("deletedThought", (id) => {
        const updatedThoughts = thoughts.filter((thought) => {
            return thought._id !== id;
          });
         setThought(updatedThoughts);
        console.log(id);
      });

    fetchData();
},[thoughts]);


const toggleAddDialog = () => {
    setshowAddDialog(!showAddDialog);
    //    if(!showAddDialog) {
    //        setName('');
    //        setDesc('');
    //    }
    
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let property = event.target.name;

    switch (property) {
      case "name":
        if (value.length > 20) {
          value = value.substr(0, 20);
        }
        //this.setState({ [property]: value });
    // setName((prev) => ({
    //     ...prev,
    //     [property]:value
    // }));
    setName(value)
        break;

      case "description":
        if (value.length > 100) {
          value = value.substr(0, 100);
        }
        setDesc(value)
        // setDesc((prev) => ({
        //     ...prev,
        //     [property]:value
        // }));
        break;

      default:
        break;
    }
  }

  const addThought = async () => {
      try {
        const response = await axios.post(
          `http://localhost:4000/thoughts`,
          {
            name: name,
            description: desc,
          }
        );

        if (response.data.success) {
          toggleAddDialog();
          //alert(response.data.message);
        } else {
          //alert(response.data.message);
        }
      } catch (error) {
        console.log("Error with adding thought: ", error);
        alert(
          "Error with adding thought. Please check the console for more info."
        );
      }
    
  };

  const classes = props.classes;
return(
    <React.Fragment>
        {/*add item dialog*/}
        <Dialog open={showAddDialog} onClose={toggleAddDialog}>
          <DialogTitle>
            <span style={{ fontWeight: "bold" }}>Add a word</span>
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  size="small"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  label="Description"
                  size="small"
                  name="description"
                  value={desc}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={toggleAddDialog}
              className={classes.redButton}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={addThought}
              className={classes.greenButton}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        {/*top bar*/}
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            backgroundColor: "#E94057",
          }}
        >
          <Grid item>
            <Typography variant="h3" className={classes.name}>
              welcome to websockets
            </Typography>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={toggleAddDialog}
            >
              Add Words
            </Button>
          </Grid>
        </Grid>
        {/*thought cards*/}
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <ThoughtList thoughts={thoughts} />
        </Grid>
      </React.Fragment>
);

}
export default withStyles(styles)(WebsocketDemo);