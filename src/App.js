import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
=======
>>>>>>> parent of d30d2fc (install axios and create a signup form)
=======
>>>>>>> parent of d30d2fc (install axios and create a signup form)
=======
>>>>>>> parent of 061b41d (add a switch to app js create an ind route)

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
=======
        <h1>Home page</h1>
        <h1>Sign in</h1>
>>>>>>> parent of 061b41d (add a switch to app js create an ind route)
      </Container>
    </div>
  );
}

export default App;