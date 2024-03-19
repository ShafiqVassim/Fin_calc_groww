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

import imgCAGR from './images/calulatorImgs/CAGR.png';
import imgCapitalGain from './images/calulatorImgs/CapitalGain.png';
import imgChildrenEducation from './images/calulatorImgs/ChildrenEducation.png';
import imgCostOfDelay from './images/calulatorImgs/CostOfDelay.png';
import imgEmergencyFund from './images/calulatorImgs/EmergencyFund.png';
import imgEMI from './images/calulatorImgs/EMI.png';
import imgFinancialFreedom from './images/calulatorImgs/FinancialFreedom.png';
import imgFinancialGoal from './images/calulatorImgs/FinancialGoal.png';
import imgFutureValue from './images/calulatorImgs/FutureValue.png';
import imgGratuity from './images/calulatorImgs/Gratuity.webp';
import imgHowLongMoneyWillLast from './images/calulatorImgs/HowLongMoneyWillLast.png';
import imgHRA from './images/calulatorImgs/hra1.png';
import imgIncomeTax from './images/calulatorImgs/IncomeTax.png';
import imgLifeInsurance from './images/calulatorImgs/LifeInsurance.png';
import imgPortfolioReturn from './images/calulatorImgs/PortfolioReturn.png';
import imgPresentValue from './images/calulatorImgs/PresentValue.png';
import imgRetirement from './images/calulatorImgs/Retirement.png';
import imgReverseSIP from './images/calulatorImgs/ReverseSIP.png';
import imgSIP from './images/calulatorImgs/SIP.png';
import imgStepUpSip from './images/calulatorImgs/StepUpSIP.png';
// Add image imports for other calculators

const useStyles = makeStyles((theme) => ({
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
  cardImage: ({ imageWidth, imageHeight }) => ({
    position: "absolute",
    bottom: 1,
    right: 1,
    width: imageWidth || 150, // Default width is 150 if not provided
    height: imageHeight || 120, // Default height is 120 if not provided
    transition: "opacity 0.2s",
    opacity: 0.5,
  }),
}));

const CalculatorCard = ({ title, description, handleClick, image, imageWidth, imageHeight }) => {
  const classes = useStyles({ imageWidth: 150, imageHeight: 120 });

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
            src={image}
            alt="Calculator"
            className={classes.cardImage}
            style={{ width: imageWidth, height: imageHeight }}
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
          <Grid container spacing={1}>
            <Grid item xs={12} lg={12} sm={12} md={12}>
              <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', marginLeft: 8 }}>
                Financial Calculators
              </Typography>
            </Grid>
            {/* Render Calculator Cards */}
            <CalculatorCard
              title="CAGR"
              description="Description of the CAGR calculator"
              handleClick={() => handleClickOpen('CAGR')}
              image={imgCAGR}
              imageWidth={150}
              imageHeight={120}
            />
            <CalculatorCard
              title="Capital Gain"
              description="Description of the Capital Gain calculator"
              handleClick={() => handleClickOpen('CapitalGain')}
              image={imgCapitalGain}
              imageWidth={160}
              imageHeight={120}
            />
            <CalculatorCard
              title="Children Education"
              description="Description of the Children Education calculator"
              handleClick={() => handleClickOpen('ChildrenEducation')}
              image={imgChildrenEducation}
              imageWidth={150}
              imageHeight={120}
            />
            <CalculatorCard
              title="Cost of Delay"
              description="Description of the Cost of Delay calculator"
              handleClick={() => handleClickOpen('CostOfDelay')}
              image={imgCostOfDelay}
              imageWidth={175}
              imageHeight={120}
            />
            <CalculatorCard
              title="Emergency Fund"
              description="Description of the Emergency Fund calculator"
              handleClick={() => handleClickOpen('EmergencyFund')}
              image={imgEmergencyFund}
              imageWidth={150}
              imageHeight={120}
            />
            <CalculatorCard
              title="EMI"
              description="Description of the EMI calculator"
              handleClick={() => handleClickOpen('EMI')}
              image={imgEMI}
              imageWidth={145}
              imageHeight={110}
            />
            <CalculatorCard
              title="Financial Freedom"
              description="Description of the Financial Freedom calculator"
              handleClick={() => handleClickOpen('FinancialFreedom')}
              image={imgFinancialFreedom}
              imageWidth={160}
              imageHeight={130}
            />
            <CalculatorCard
              title="Financial Goal"
              description="Description of the Financial Goal calculator"
              handleClick={() => handleClickOpen('FinancialGoal')}
              image={imgFinancialGoal}
              imageWidth={135}
              imageHeight={135}
            />
            <CalculatorCard
              title="Future Value"
              description="Description of the Future Value calculator"
              handleClick={() => handleClickOpen('FutureValue')}
              image={imgFutureValue}
              imageWidth={130}
              imageHeight={120}
            />
            <CalculatorCard
              title="Gratuity"
              description="Description of the Gratuity calculator"
              handleClick={() => handleClickOpen('Gratuity')}
              image={imgGratuity}
              imageWidth={185}
              imageHeight={130}
            />
            <CalculatorCard
              title="How Long Money Will Last"
              description="Description of the How Long Money Will Last calculator"
              handleClick={() => handleClickOpen('HowLongMoneyWillLast')}
              image={imgHowLongMoneyWillLast}
              imageWidth={175}
              imageHeight={120}
            />
            <CalculatorCard
              title="HRA"
              description="Description of the HRA calculator"
              handleClick={() => handleClickOpen('HRA')}
              image={imgHRA}
              imageWidth={160}
              imageHeight={120}
            />
            <CalculatorCard
              title="Income Tax"
              description="Description of the Income Tax calculator"
              handleClick={() => handleClickOpen('IncomeTax')}
              image={imgIncomeTax}
              imageWidth={140}
              imageHeight={120}
            />
            <CalculatorCard
              title="Life Insurance"
              description="Description of the Life Insurance calculator"
              handleClick={() => handleClickOpen('LifeInsurance')}
              image={imgLifeInsurance}
              imageWidth={125}
              imageHeight={120}
            />
            <CalculatorCard
              title="Portfolio Return"
              description="Description of the Portfolio Return calculator"
              handleClick={() => handleClickOpen('PortfolioReturn')}
              image={imgPortfolioReturn}
              imageWidth={150}
              imageHeight={120}
            />
            <CalculatorCard
              title="Present Value"
              description="Description of the Present Value calculator"
              handleClick={() => handleClickOpen('PresentValue')}
              image={imgPresentValue}
              imageWidth={140}
              imageHeight={130}
            />
            <CalculatorCard
              title="Retirement"
              description="Description of the Retirement calculator"
              handleClick={() => handleClickOpen('Retirement')}
              image={imgRetirement}
              imageWidth={125}
              imageHeight={120}
            />
            <CalculatorCard
              title="Reverse SIP"
              description="Description of the Reverse SIP calculator"
              handleClick={() => handleClickOpen('ReverseSIP')}
              image={imgReverseSIP}
              imageWidth={130}
              imageHeight={110}
            />
            <CalculatorCard
              title="SIP"
              description="Description of the SIP calculator"
              handleClick={() => handleClickOpen('SIP')}
              image={imgSIP}
              imageWidth={150}
              imageHeight={120}
            />
            <CalculatorCard
              title="Step Up SIP"
              description="Description of the Step Up SIP calculator"
              handleClick={() => handleClickOpen('StepUpSIP')}
              image={imgStepUpSip}
              imageWidth={140}
              imageHeight={120}
            />
            {/* Add more CalculatorCards with appropriate image prop */}
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
                {/* Add more calculator components */}
              </DialogContent>
            </Dialog>
          ))}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
