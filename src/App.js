import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Button from "./components/Button/Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <Container className="container" fixed={true}>
      <Grid container>
        <Grid className="business-card" item xs={12} sm={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/" element={<Resume />}></Route>
            </Routes>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
