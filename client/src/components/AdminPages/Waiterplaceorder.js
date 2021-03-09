import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tablepage from "../../components/AdminPages/Tablepage"
import Catagorypage from "../../components/AdminPages/Catagorypage"
import Listmenu from "../../components/AdminPages/Listmenu"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginTop:"20px"
  },
  nextButton:{
    marginTop:"20px",
  },
 
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

 function getSteps() {
   return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Tablepage/>;
    case 1:
      return <Catagorypage/>;
    case 2:
      return <Listmenu/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Waiterplaceorder() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button variant="contained"  color="primary"
                // {activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary"  onClick={handleNext} className={classes.nextButton} >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}