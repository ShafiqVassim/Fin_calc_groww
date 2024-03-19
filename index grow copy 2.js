import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "reactstrap";
import img from './images/3.webp';
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
      "& $cardImage": {
        opacity: 1,
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
    bottom: 1,
    right: 1,
    width: 150,
    height: 120,
    transition: "opacity 0.2s",
    opacity: 0.5,
  },
}));

const CalculatorCard = ({ title, description, handleClick }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleClick}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" style={{ margin: "8px 0", fontWeight: 'bold'}}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ margin: "8px 0", lineHeight: "1.2", fontWeight: 'lighter', color: 'gray' }}
          >
            {description}
          </Typography>
          <img
            src={img}
            alt="Calculator"
            className={classes.cardImage}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

const Calculator = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState({
    CAGR: false,
    CapitalGain: false,
    ChildrenEducation: false,
    CostOfDelay: false,
    EmergencyFund: false,
    EMI: false,
    FinancialFreedom: false,
    FinancialGoal: false,
    FutureValue: false,
    Gratuity: false,
    HowLongMoneyWillLast: false,
    HRA: false,
    IncomeTax: false,
    LifeInsurance: false,
    PortfolioReturn: false,
    PresentValue: false,
    Retirement: false,
    ReverseSIP: false,
    SIP: false,
    StepUpSIP: false,
  });

  const handleClickOpen = (calculator) => {
    setOpenDialog(prevState => ({
      ...prevState,
      [calculator]: true,
    }));
  };

  const handleClose = (calculator) => {
    setOpenDialog(prevState => ({
      ...prevState,
      [calculator]: false,
    }));
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', marginLeft: 8 }}>
                Financial Calculators
              </Typography>
            </Grid>
            {/* Render Calculator Cards */}
            <CalculatorCard
              title="CAGR Calculator"
              description="Description of the CAGR calculator"
              handleClick={() => handleClickOpen('CAGR')}
            />
            <CalculatorCard
              title="Capital Gain"
              description="Description of the Capital Gain calculator"
              handleClick={() => handleClickOpen('CapitalGain')}
            />
            <CalculatorCard
              title="Children Education"
              description="Description of the Children Education calculator"
              handleClick={() => handleClickOpen('ChildrenEducation')}
            />
            <CalculatorCard
              title="Cost of Delay"
              description="Description of the Cost of Delay calculator"
              handleClick={() => handleClickOpen('CostOfDelay')}
            />
            <CalculatorCard
              title="Emergency Fund"
              description="Description of the Emergency Fund calculator"
              handleClick={() => handleClickOpen('EmergencyFund')}
            />
            <CalculatorCard
              title="EMI"
              description="Description of the EMI calculator"
              handleClick={() => handleClickOpen('EMI')}
            />
            <CalculatorCard
              title="Financial Freedom"
              description="Description of the Financial Freedom calculator"
              handleClick={() => handleClickOpen('FinancialFreedom')}
            />
            <CalculatorCard
              title="Financial Goal"
              description="Description of the Financial Goal calculator"
              handleClick={() => handleClickOpen('FinancialGoal')}
            />
            <CalculatorCard
              title="Future Value"
              description="Description of the Future Value calculator"
              handleClick={() => handleClickOpen('FutureValue')}
            />
            <CalculatorCard
              title="Gratuity"
              description="Description of the Gratuity calculator"
              handleClick={() => handleClickOpen('Gratuity')}
            />
            <CalculatorCard
              title="How Long Money Will Last"
              description="Description of the How Long Money Will Last calculator"
              handleClick={() => handleClickOpen('HowLongMoneyWillLast')}
            />
            <CalculatorCard
              title="HRA"
              description="Description of the HRA calculator"
              handleClick={() => handleClickOpen('HRA')}
            />
            <CalculatorCard
              title="Income Tax"
              description="Description of the Income Tax calculator"
              handleClick={() => handleClickOpen('IncomeTax')}
            />
            <CalculatorCard
              title="Life Insurance"
              description="Description of the Life Insurance calculator"
              handleClick={() => handleClickOpen('LifeInsurance')}
            />
            <CalculatorCard
              title="Portfolio Return"
              description="Description of the Portfolio Return calculator"
              handleClick={() => handleClickOpen('PortfolioReturn')}
            />
            <CalculatorCard
              title="Present Value"
              description="Description of the Present Value calculator"
              handleClick={() => handleClickOpen('PresentValue')}
            />
            <CalculatorCard
              title="Retirement"
              description="Description of the Retirement calculator"
              handleClick={() => handleClickOpen('Retirement')}
            />
            <CalculatorCard
              title="Reverse SIP"
              description="Description of the Reverse SIP calculator"
              handleClick={() => handleClickOpen('ReverseSIP')}
            />
            <CalculatorCard
              title="SIP"
              description="Description of the SIP calculator"
              handleClick={() => handleClickOpen('SIP')}
            />
            <CalculatorCard
              title="Step Up SIP"
              description="Description of the Step Up SIP calculator"
              handleClick={() => handleClickOpen('StepUpSIP')}
            />
          </Grid>

          {/* Render Dialogs */}
          {Object.entries(openDialog).map(([calculator, isOpen]) => (
            <Dialog key={calculator} open={isOpen} onClose={() => handleClose(calculator)}>
              <DialogTitle>{`${calculator} Calculator`}</DialogTitle>
              <DialogContent>
                {/* Render respective calculator component based on calculator name */}
                {calculator === 'CAGR' && <CAGRCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'CapitalGain' && <CapitalGainCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'ChildrenEducation' && <ChildrenEducationCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'CostOfDelay' && <CostOfDelayCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'EmergencyFund' && <EmergencyFundCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'EMI' && <EMICalc onClose={() => handleClose(calculator)} />}
                {calculator === 'FinancialFreedom' && <FinancialFreedomCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'FinancialGoal' && <FinancialGoalCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'FutureValue' && <FutureValueCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'Gratuity' && <GratuityCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'HowLongMoneyWillLast' && <HowLongMoneyWillLastCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'HRA' && <HRACalc onClose={() => handleClose(calculator)} />}
                {calculator === 'IncomeTax' && <IncomeTaxCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'LifeInsurance' && <LifeInsuranceCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'PortfolioReturn' && <PortfolioReturnCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'PresentValue' && <PresentValueCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'Retirement' && <RetirementCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'ReverseSIP' && <ReverseSIPCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'SIP' && <SIPCalc onClose={() => handleClose(calculator)} />}
                {calculator === 'StepUpSIP' && <StepUpSipCalc onClose={() => handleClose(calculator)} />}
              </DialogContent>
            </Dialog>
          ))}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
