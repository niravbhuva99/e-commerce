import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Box,
} from "@mui/material";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
// import classes from "./style.module.css";
const steps = ["Shipping address", "Payment details"];
const Checkout = () => {
  const [activeStep, setactiveStep] = useState(2);
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  const Confirmation = () => {
    return <div>Confirmation</div>;
  };
  return (
    <>
      <Box sx={{ width: "550px", m: "auto", mt: 20 }}>
        <main>
          <Paper
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            elevation={10}
          >
            <Typography variant="h4" align="center" mb={2}>
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 5, p: 1 }}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </main>
      </Box>
    </>
  );
};

export default Checkout;
