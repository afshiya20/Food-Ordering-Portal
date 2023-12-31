import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BuyerNavbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/buyer")}
          >
            Home
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/buyer/Profile")}>
            Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/search")}>
            Search food Items
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/favs")}>
            Favourites
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/items")}>
            Food-Items
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/order")}>
            MyCart
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/wallet")}>
            Wallet
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/logout")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BuyerNavbar;