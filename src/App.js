
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import fetchProduct from './redux/actions/productActions/productActions';


function App() {
  const loading = useSelector(state => state.products.loading)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(fetchProduct())
    return () => {
      // cleanup
    }
  }, [dispach])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route path='/productDetail/:id'>
              {loading ? 'loading . . .' : <ProductDetail />}
            </Route>
            <Route path='/' exact>
              {loading ? 'loading . . .' : <ProductList />}
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
