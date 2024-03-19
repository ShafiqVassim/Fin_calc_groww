import { Grid, Card, CardContent } from "@mui/material";
import React from "react";
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
import { makeStyles } from "@mui/styles";
import { Container } from "reactstrap";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "100%",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
    },
    position: "relative",
    // margin: "5px",
    // marginBottom: "7px",
  },
}));

const Calculator = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
            <div className="card">
                {/* <div className="card-body">
                    <h2>Investment Plan</h2>
                </div> */}
            </div>
            <div className='mx-3'>
            <Grid container spacing={2}>
    <Grid item xs={12}>
        <Card style={{boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)' }}>
          <CardContent  style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "-8px",
              marginLeft: "10px",
              color: "#14539a",
            }}>
            <h2 style={{fontSize: '1.5rem'}}>Financial Calculators</h2>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid}>
        <Card className={classes.card}>
          <CAGRCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CapitalGainCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <ChildrenEducationCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CostOfDelayCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <EmergencyFundCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <EMICalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <FinancialFreedomCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <FinancialGoalCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <FutureValueCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <GratuityCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <HowLongMoneyWillLastCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <HRACalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <IncomeTaxCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <LifeInsuranceCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <PortfolioReturnCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <PresentValueCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <RetirementCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <ReverseSIPCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <SIPCalc />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <StepUpSipCalc />
        </Card>
      </Grid>
    </Grid>
            </div>                  
        </Container>
    </div>
</React.Fragment>

    
  );
};

export default Calculator;
