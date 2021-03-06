
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import fetchProduct from './actions/productActions/productActions';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  const loading = useSelector(state => state.loading)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(fetchProduct())
    return () => {
      // cleanup
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route path='/productDetail:id'>
              <ProductDetail />
            </Route>
            <Route path='/'>
              {loading ? 'loading . . .' : <ProductList />}
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
