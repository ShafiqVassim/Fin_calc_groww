import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "reactstrap";
import img from './images/1.webp';
import CAGRCalc from "./CAGR";
import CapitalGainCalc from "./CapitalGain";
import ChildrenEducationCalc from "./ChildrenEducation";
import CostOfDelayCalc from "./CostOfDelay";
import EmergencyFundCalc from "./EmergencyFund";
import EMICalc from "./EMI";
import FinancialFreedomCalc from "./FinancialFreedom";
import FinancialGoalCalc from "./FinancialGoal";
import FutureValueCalc from "./FutureValue";
import GratuityCalc from "./Gratuity";
import HowLongMoneyWillLastCalc from "./HowLongMoneylasts";
import HRACalc from "./HRA";
import IncomeTaxCalc from "./IncomeTax";
import LifeInsuranceCalc from "./lifeInsurance";
import PortfolioReturnCalc from "./PortfolioReturn";
import PresentValueCalc from "./PresentValue";
import RetirementCalc from "./Retirement";
import ReverseSIPCalc from "./ReverseSIP";
import SIPCalc from "./SIP";
import StepUpSipCalc from "./StepUpSip";


const useStyles = makeStyles(() => ({
  card: {
    '&.MuiCard-root': {
    maxWidth: "100%",
    width: "100%",
    height: 250,
    transition: "transform 0.3s ease-in-out, opacity 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
      "& $cardImage": { // Selecting the nested cardImage class
        opacity: 1, // Change opacity of the image when hovering over the card
      },
    },
    position: "relative",
    margin: "5px",
    borderRadius: 8,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  }
},
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    height: "100%",
    paddingTop: 8,
  },
  cardImage: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 80,
    height: 80,
    transition: "opacity 0.2s",
    opacity: 0.7,
  },
}));

const Calculator = () => {
  const classes = useStyles();
  const [openCAGR, setOpenCAGR] = useState(false);
  const [openCapitalGain, setOpenCapitalGain] = useState(false);
  const [openChildrenEducation, setOpenChildrenEducation] = useState(false);
  const [openCostOfDelay, setOpenCostOfDelay] = useState(false);
  const [openEmergencyFund, setOpenEmergencyFund] = useState(false);
  const [openEMI, setOpenEMI] = useState(false);
  const [openFinancialFreedom, setOpenFinancialFreedom] = useState(false);
  const [openFinancialGoal, setOpenFinancialGoal] = useState(false);
  const [openFutureValue, setOpenFutureValue] = useState(false);
  const [openGratuity, setOpenGratuity] = useState(false);
  const [openHowLongMoneyWillLast, setOpenHowLongMoneyWillLast] = useState(false);
  const [openHRA, setOpenHRA] = useState(false);
  const [openIncomeTax, setOpenIncomeTax] = useState(false);
  const [openLifeInsurance, setOpenLifeInsurance] = useState(false);
  const [openPortfolioReturn, setOpenPortfolioReturn] = useState(false);
  const [openPresentValue, setOpenPresentValue] = useState(false);
  const [openRetirement, setOpenRetirement] = useState(false);
  const [openReverseSIP, setOpenReverseSIP] = useState(false);
  const [openSIP, setOpenSIP] = useState(false);
  const [openStepUpSIP, setOpenStepUpSIP] = useState(false);


  const handleCAGRClick = () => {
    setOpenCAGR(true);
  };

  const handleCapitalGainClick = () => {
    setOpenCapitalGain(true);
  };

  const handleChildrenEducationClick = () => {
    setOpenChildrenEducation(true);
  };
  
  const handleCostOfDelayClick = () => {
    setOpenCostOfDelay(true);
  }

  const handleEmergencyFundClick = () => {
    setOpenEmergencyFund(true);
  }

  const handleEMIClick = () => {
    setOpenEMI(true);
  }

  const handleFinancialFreedomClick = () => {
    setOpenFinancialFreedom(true);
  }

  const handleFinancialGoalClick = () => {
    setOpenFinancialGoal(true);
  }

  const handleFutureValueClick = () => {
    setOpenFutureValue(true);
  }

  const handleGratuityClick = () => {
    setOpenGratuity(true);
  }

  const handleHowLongMoneyWillLastClick = () => {
    setOpenHowLongMoneyWillLast(true);
  }

  const handleHRAClick = () => {
    setOpenHRA(true);
  }

  const handleIncomeTaxClick = () => {
    setOpenIncomeTax(true);
  }

  const handleLifeInsuranceClick = () => {
    setOpenLifeInsurance(true);
  }

  const handlePortfolioReturnClick = () => {
    setOpenPortfolioReturn(true);
  }

  const handlePresentValueClick = () => {
    setOpenPresentValue(true);
  }

  const handleRetirementClick = () => {
    setOpenRetirement(true);
  }

  const handleReverseSIPClick = () => {
    setOpenReverseSIP(true);
  }

  const handleSIPClick = () => {
    setOpenSIP(true);
  }
  
  const handleStepUpSIPClick = () => {
    setOpenStepUpSIP(true);
  }


  const handleClose = () => {
    setOpenCAGR(false);
    setOpenCapitalGain(false);
    setOpenChildrenEducation(false);
    setOpenCostOfDelay(false);
    setOpenEmergencyFund(false);
    setOpenEMI(false);
    setOpenFinancialFreedom(false);
    setOpenFinancialGoal(false);
    setOpenFutureValue(false);
    setOpenGratuity(false);
    setOpenHowLongMoneyWillLast(false);
    setOpenHRA(false);
    setOpenIncomeTax(false);
    setOpenLifeInsurance(false);
    setOpenPortfolioReturn(false);
    setOpenPresentValue(false);
    setOpenRetirement(false);
    setOpenReverseSIP(false);
    setOpenSIP(false);
    setOpenStepUpSIP(false);

  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Financial Calculators
              </Typography>
            </Grid>
            {/* CAGR Card */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleCAGRClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    CAGR Calculator
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Capital Gain Card */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleCapitalGainClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Capital Gain
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* children education calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleChildrenEducationClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Children Education
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Cost of Delay Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleCostOfDelayClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Cost of Delay
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Emergency Fund Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleEmergencyFundClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Emergency Fund
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* EMI Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleEMIClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    EMI
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Financial Freedom Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleFinancialFreedomClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Financial Freedom
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Financial Goal Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleFinancialGoalClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Financial Goal
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Future Value Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleFutureValueClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Future Value
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Gratuity Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleGratuityClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Gratuity
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card> 
            </Grid>
            {/* Income Tax Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleIncomeTaxClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Income Tax
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* How Long Money Will Last */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleHowLongMoneyWillLastClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    How Long Money Will Last
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Hra Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleHRAClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    HRA
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* life insurance */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleLifeInsuranceClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Life Insurance
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Portfolio return */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handlePortfolioReturnClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Portfolio Return
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* Present value Calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handlePresentValueClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Present Value
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* retirement calculator */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleRetirementClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Retirement
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* reverse sip */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleReverseSIPClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Reverse SIP
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* sip */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleSIPClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    SIP
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* step up sip */}
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleStepUpSIPClick}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" style={{ margin: "8px 0"}}>
                    Step Up SIP
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "8px 0", lineHeight: "1.2"}}
                  >
                    Description of the calculator
                  </Typography>
                  <img
                    src={img}
                    alt="Calculator"
                    className={classes.cardImage}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* CAGR Calculator Dialog */}
          <Dialog open={openCAGR} onClose={handleClose}>
            <DialogTitle>CAGR Calculator</DialogTitle>
            <DialogContent>
              <CAGRCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Capital Gain Calculator Dialog */}
          <Dialog open={openCapitalGain} onClose={handleClose}>
            <DialogTitle>Capital Gain Calculator</DialogTitle>
            <DialogContent>
              <CapitalGainCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Children Education Calculator Dialog */}
          <Dialog open={openChildrenEducation} onClose={handleClose}>
            <DialogTitle>Children Education Calculator</DialogTitle>
            <DialogContent>
              <ChildrenEducationCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Cost of Delay Calculator Dialog */}
          <Dialog open={openCostOfDelay} onClose={handleClose}>
            <DialogTitle>Cost of Delay Calculator</DialogTitle>
            <DialogContent>
              <CostOfDelayCalc onClose={handleClose} />
            </DialogContent>  
          </Dialog>
          {/* Emergency Fund Calculator Dialog */}
          <Dialog open={openEmergencyFund} onClose={handleClose}>
            <DialogTitle>Emergency Fund Calculator</DialogTitle>
            <DialogContent>
              <EmergencyFundCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* EMICalculator Dialog */}
          <Dialog open={openEMI} onClose={handleClose}>
            <DialogTitle>EMI Calculator</DialogTitle>
            <DialogContent>
              <EMICalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Financial Freedom Calculator Dialog */}
          <Dialog open={openFinancialFreedom} onClose={handleClose}>
            <DialogTitle>Financial Freedom Calculator</DialogTitle>
            <DialogContent>
              <FinancialFreedomCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Financial Goal Calculator Dialog */}
          <Dialog open={openFinancialGoal} onClose={handleClose}>
            <DialogTitle>Financial Goal Calculator</DialogTitle>
            <DialogContent>
              <FinancialGoalCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Future Value Calculator Dialog */}
          <Dialog open={openFutureValue} onClose={handleClose}>
            <DialogTitle>Future Value Calculator</DialogTitle>
            <DialogContent>
              <FutureValueCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Gratuity Calculator Dialog */}
          <Dialog open={openGratuity} onClose={handleClose}>
            <DialogTitle>Gratuity Calculator</DialogTitle>
            <DialogContent>
              <GratuityCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* How Long Money Will Last Calculator Dialog */}
          <Dialog open={openHowLongMoneyWillLast} onClose={handleClose}>
            <DialogTitle>How Long Money Will Last Calculator</DialogTitle>
            <DialogContent>
              <HowLongMoneyWillLastCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* HRACalculator Dialog */}
          <Dialog open={openHRA} onClose={handleClose}>
            <DialogTitle>HRACalculator</DialogTitle>
            <DialogContent>
              <HRACalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Income Tax Calculator Dialog */}
          <Dialog open={openIncomeTax} onClose={handleClose}>
            <DialogTitle>Income Tax Calculator</DialogTitle>
            <DialogContent>
              <IncomeTaxCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Life Insurance Calculator Dialog */}
          <Dialog open={openLifeInsurance} onClose={handleClose}>
            <DialogTitle>Life Insurance Calculator</DialogTitle>
            <DialogContent>
              <LifeInsuranceCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Portfolio Return Calculator Dialog */}
          <Dialog open={openPortfolioReturn} onClose={handleClose}>
            <DialogTitle>Portfolio Return Calculator</DialogTitle>
            <DialogContent>
              <PortfolioReturnCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* present value  */}
          <Dialog open={openPresentValue} onClose={handleClose}>
            <DialogTitle>Present Value Calculator</DialogTitle>
            <DialogContent>
              <PresentValueCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* retirement */}
          <Dialog open={openRetirement} onClose={handleClose}>
            <DialogTitle>Retirement Calculator</DialogTitle>  
            <DialogContent>
              <RetirementCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* reverse sip calculator */}
          <Dialog open={openReverseSIP} onClose={handleClose}>
            <DialogTitle>Reverse SIP Calculator</DialogTitle>
            <DialogContent>
              <ReverseSIPCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
          {/* Step Up SIP Calculator Dialog */}
          <Dialog open={openStepUpSIP} onClose={handleClose}>
            <DialogTitle>Step Up SIP Calculator</DialogTitle>
            <DialogContent>
              <StepUpSipCalc onClose={handleClose} />
            </DialogContent>  
          </Dialog>
          {/* sip */}
          <Dialog open={openSIP} onClose={handleClose}>
            <DialogTitle>SIP Calculator</DialogTitle>
            <DialogContent>
              <SIPCalc onClose={handleClose} />
            </DialogContent>
          </Dialog>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
