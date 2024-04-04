import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function StockData() {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('science');
  const [selectedItems, setSelectedItems] = useState();




  const apikey = "9xUWzGAsCax3LdDiw6fwYNL5d59oQNHx"

  const fetchData = async (option) => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${option}.json?api-key=${apikey}`);
      const responseData = await response.json();

      setData(responseData);
      setSelectedItems(responseData?.results[0])
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    fetchData(option);
  };
  useEffect(() => {


    fetchData(selectedOption);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="" style={{ display: "flex", flexDirection: "row" }}>

        <div>


          <div className="m-5" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>

            <div className='text-black fw-bold fs-3'>Selected Category</div>




            <div class="btn-group ms-3">
              <button type="button" class="btn btn-danger dropdown-toggle fs-5 fw-bold text-white" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedOption.toLocaleUpperCase(0)}
              </button>
              <ul class="dropdown-menu bg-primary">
                <li><a className="dropdown-item fs-5 fw-bold text-black" onClick={() => handleOptionSelect("science")}>Science</a></li>
                <li><a className="dropdown-item fs-5 fw-bold text-black" onClick={() => handleOptionSelect("arts")}>Arts</a></li>
                <li><a className="dropdown-item fs-5 fw-bold text-black" onClick={() => handleOptionSelect("world")}>World</a></li>
                <li><a className="dropdown-item fs-5 fw-bold text-black" onClick={() => handleOptionSelect("us")}>US</a></li>
              </ul>
            </div>
          </div>


          <div className='col-4 m-4 card' style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', border: "2px solid #0096FF", display: "flex", flexDirection: "column", width: "500px" }}>

            <h1 className='text-center ' style={{}} >{data?.results?.length}-Topics</h1>
            <div class="" style={{ maxHeight: '500px', overflowY: 'auto' }}>

              <div id="list-example " class="list-group">
                {data && data?.results?.map((item, index) => (
                  item.title && (
                    <div key={index} className={`list-group-item list-group-item-action ${item.title === selectedItems.title ? 'bg-white text-primary' : 'bg-primary text-white'}`} onClick={() => { setSelectedItems(item) }}>
                      {item.title}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='' style={{ display: "flex", flexDirection: "column", flex: 1, }}>


          <div className='' style={{ display: "flex", justifyContent: "flex-end", flexDirection: "row", flexWrap: "wrap" }}>
            <div className='card m-3 p-1 bg-primary text-white'>Last Updated : {data?.last_updated.slice(0, 10)}</div>

          </div>
          <div className='mt-5  p-3 rounded-5' style={{  border: "2px solid #0096FF",display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between" ,alignItems:"center"}}>
            <div className='me-3' >

              <h3 className='text-center m-3' style={{ }}>{selectedItems?.title}</h3>
              <p className='text-primary text-center m-5' style={{}}>{selectedItems?.abstract}</p>
              <div class="alert alert-primary" role="alert">
              Created on : <b>{selectedItems?.created_date}</b> 
              </div>
              <div class="alert alert-primary" role="alert">
              Published on : <b>{selectedItems?.published_date}</b> 
              </div>
              <div class="alert alert-primary" role="alert">
              Updated on : <b>{selectedItems?.updated_date}</b> 
              </div>
              <div class="alert alert-primary" role="alert">
             Check at : <b><a href={selectedItems?.url}>{selectedItems?.url}</a></b> 
              </div>
            </div>
            <img className="rounded-5" src={selectedItems?.multimedia[0]?.url} width={400} height={400} />
          </div>
        </div>
      </div>








      {/* {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )} */}
    </div>
  );
}

export default StockData;
