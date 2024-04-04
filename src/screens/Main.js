import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Main() {
    const [data, setData] = useState("");
    const [error, setError] = useState(null); // State variable to store error message

    // Function to fetch data from Financial Modeling Prep API
    const fetchdata = async () => {
        try {
            // Construct the URL
            const url = "https://financialmodelingprep.com/api/v3/search?query=AA?apikey=Snwsoar9fL6hi10RTZ9JX6qmaObPsOR9";
            // Send a GET request using Fetch API
            const response = await fetch(url);

            // Check if response is ok
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            // Parse the response body as JSON
            const jsonData = await response.json();
            // Set the fetched data to the state
            setData(JSON.stringify(jsonData));
            setError(null); // Clear error if request succeeds
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(error)
        }
    };

    return (
        <div>
            <Navbar />
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>

</div>
        </div>
    );
}
