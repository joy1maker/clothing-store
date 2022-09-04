import './App.css';
import HomePage from './pages/home-page.component';
import { Routes, Route } from "react-router-dom"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Forms from './components/forms/forms.component';
import { auth, createUserDocumentFromAuth } from '../src/firebase/firebase.utils'
import { Component } from 'react';
import { getDoc } from "firebase/firestore";
import { connect } from "react-redux/es/exports";
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserDocumentFromAuth(userAuth);
          const docSnap = await getDoc(userRef);
          setCurrentUser(
            ({
              id: docSnap.id,
              ...docSnap.data()
            })
          );

        }
        else {
          setCurrentUser(null);
        }


      }
    )

  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (


      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<Forms />} />
        </Routes>

      </div>

    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
