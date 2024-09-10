import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
// import { setData, setLoading, setSearch, setSort, setFilter } from '../../store';

import { setData,setFilter,setLoading,setSearch,setSort } from '../redux/action';


function Shop() {
  const dispatch = useDispatch();
  const { data, loading, search, sort, filter } = useSelector((state) => state.app);

  useEffect(() => {
    fetch("http://localhost:3004/product")
      .then(res => res.json())
      .then(data => {
        dispatch(setData(data));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFilterChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.checked }));
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  let filteredData = data;

  // Filter by category
  if (filter.Bollywood || filter.Hollywood || filter.Comedy) {
    filteredData = filteredData.filter((el) => {
      return (
        (filter.Apple && el.catagory === "Bollywood") ||
        (filter.Rolex && el.catagory === "hollywood") ||
        (filter.Boat && el.catagory === "Comedy") 
      );
    });
  }
  



  // Filter by search term
  if (search) {
    filteredData = filteredData.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase()) ||
      el.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort products
  if (sort) {
    filteredData = filteredData.sort((a, b) => {
      if (sort === "lth") {
        return a.price - b.price;
      } else if (sort === "htl") {
        return b.price - a.price;
      }
      return 0;
    });
  }

  return (
    <>
      <Header />
      <div id='HomeSection1' className='h-auto mb-5'>
        <div className="HomeChild">
          <div className="HomeChild1 text-center h-auto">
            <h1 className='h1 mb-3'>View All Movie</h1>
            <p className='font mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nostrum odit, deserunt consequatur error earum obcaecati incidunt
              quibusdam ex aperiam? Consectetur, delectus dignissimos?
            </p>
            <center className='d-flex'>
              <div id='serch'>
                <input type="text" placeholder='Search ...' className='ps-3' onChange={handleSearch} />
                <i className='bi bi-search'></i>
              </div>
              <div id='filter'>
                Bollywood<input type="checkbox" name='Bollywood' className='me-5 ms-2' onChange={handleFilterChange} />
                hollywood<input type="checkbox" name='hollywood' className='me-5 ms-2' onChange={handleFilterChange} />
                Comedy<input type="checkbox" name='Comedy' className='me-5 ms-2' onChange={handleFilterChange} />
              </div>
              
            </center>
          </div>

          <div className='myproduct'>
            {filteredData.map(val => (
              <div key={val.id} className='productChild text-start ps-5'>
                <img src={val.img} height="250px" width="250px" alt={val.title} /><br />
                <b>Movie Name : {val.name}</b> <br />
                <p>Movie Title: {val.title}</p>
                <p>Movie Price : {val.price}</p>
                <p>catagory: {val.catagory}</p>
                <Link to={`/product/${val.id}`}><button className='btn text-light bg-info'>View Details</button></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
