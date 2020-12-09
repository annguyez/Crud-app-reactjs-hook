import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState';
import PostList from './components/PostList/index';
import Pagination from './components/Pagination/index';
import PostFilterForm from './components/postFilterForm/index';
import queryString from 'query-string';
import Todo from './components/TruyenProp/todo';
import UseReducerItem from './components/testReducer/useReducerItem';
import Login from './login.js';


function App() {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  const [filter, setFilter] = useState(
    {
      _limit: 10,
      _page: 1,
    }
  )
  function handlePageChange(newPage){
    setFilter(
      {
        ...filter,
        _page: newPage,
      });

  }
  function handleSearch(newFilter){
    console.log('New Filter: ', newFilter);
    setFilter(
      {
        ...filter,
        _page: 1,
        title_like: newFilter.searchTerm
      }
    );
  }

  useEffect(() => {
    async function fetchList(){
      const param = queryString.stringify(filter);
      const reqUrl = `http://js-post-api.herokuapp.com/api/posts?${param}`;
      const res = await fetch(reqUrl);
      const resJson = await res.json();
      console.log({resJson});
      const { data, pagination } = resJson;
      //console.log({results});

      setPostList(data);
      setPagination(pagination);
    }
    fetchList();
  }, [filter])
  return (
    <div className="App">
      <GlobalProvider>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddUser}/>
          <Route path="/edit/:id" component={EditUser}/>
          <Route path="/login" component={Login}/>
        </Switch>
        
        </Router>
        </GlobalProvider> 
        <PostFilterForm onSubmit={handleSearch}/>

        <PostList posts={postList}/>
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
        />
        <Todo />
        <UseReducerItem/> 
    
        <Login />
        
    </div>
  );
}

export default App;
