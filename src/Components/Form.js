import {
  Backdrop,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CenteredLogo from "../Assets/centeredlogo.png";
const searches = ["Ethereum", "Bitcoin", "Matic", "Binance", "XRP", "Solana"];
const Form = () => {
  const [open, setOpen] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(null);
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "90dvh",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            backgroundColor: "#0B0819",
            width: "100%",
            padding: "30px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2" gutterBottom>
              Current value
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#627EEA", fontWeight: "500" }}
            >
              ₹ 24882
            </Typography>
          </Stack>
          <Button
            sx={{
              color: "white",
              width: "100%",
              padding: "14px 20px",
              outline: "none",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              justifyContent: "space-between",
              backgroundColor: "#1C1731",
            }}
            onClick={() => setOpen(true)}
          >
            <Typography variant="subtitle2">{selectedSearch}</Typography>
            <ArrowDropDownIcon />
          </Button>
          <Box>
            <Typography variant="subtitle2" sx={{ lineHeight: 3 }}>
              Amount you want to invest
            </Typography>
            <OutlinedInput
              endAdornment={<InputAdornment position="end">INR</InputAdornment>}
              type="number"
              placeholder="0.00"
              sx={{
                color: "white",
                height: "50px",
                width: "100%",
                outline: "none",
              }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ lineHeight: 3 }}>
              Estimate Number of ETH You will Get
            </Typography>
            <Box
              sx={{
                color: "white",
                padding: "14px",
                outline: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                justifyContent: "space-between",
                backgroundColor: "#1C1731",
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#6F6F7E" }}>
                0.00
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)",
              textTransform: "none",
              width: "100%",
              height: "50px",
              borderRadius: "30px",
            }}
          >
            Buy
          </Button>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "-45px",
              left: "50%",
              borderRadius: "50%",
              border: "8px solid #1C1731",
              boxShadow: "0 0 0 6px #040406",
              transform: "translateX(-50%)",
            }}
            className="double-border"
          >
            <img
              src={CenteredLogo}
              alt="Centered logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Stack>
      </Container>
      <Backdrop sx={{ backgroundColor: "#0b0819bd", zIndex: 1 }} open={open}>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#181627",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack
            direction="column"
            sx={{
              width: "100%",
              padding: "10px",
            }}
          >
            <OutlinedInput
              startAdornment={<SearchIcon />}
              sx={{
                color: "white",
                height: "50px",
                width: "100%",
                borderRadius: "30px",
                marginBottom: "10px",
              }}
            />
            {searches.map((search) => {
              return (
                <Button
                  sx={{
                    color: "white",
                    width: "100%",
                    padding: "14px 20px",
                    outline: "none",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    justifyContent: "space-between",
                  }}
                  onClick={() => {
                    setSelectedSearch(search);
                    setOpen(false);
                  }}
                >
                  <Typography variant="subtitle2">{search}</Typography>
                  {selectedSearch == search && (
                    <CheckIcon sx={{ fill: "#58ADAB" }} />
                  )}
                </Button>
              );
            })}
          </Stack>
        </Container>
      </Backdrop>
    </>
  );
};

export default Form;
