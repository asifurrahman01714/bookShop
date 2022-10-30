import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import "./Dashboard.css";
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
export default function Dashboard() {
  const [page, setPage] = useState("");
  return (
    <>
      <div className='dashboard'>
        {/* sidebar */}
        <div className="row">
        <div className="col-md-3 sidebar">
          <h2 style={{color: 'white',fontWeight: '600',paddingLeft: '20px',paddingTop: '20px'}}>Book Shop</h2>
          <div className="nav">

          <table class="table table-hover text-white">
            <tbody>
              <tr>
                <th scope="row" onClick={()=> setPage("dashboard1")}><Link style={{textDecoration:"none", color:"white"}}>Dashboard 1</Link></th>
              </tr>
              <tr>
                <th scope="row" onClick={()=> setPage("dashboard2")}><Link style={{textDecoration:"none", color:"white"}}>Dashboard 2</Link></th>
              </tr>
              <tr>
                <th scope="row" onClick={()=> setPage("dashboard3")}><Link style={{textDecoration:"none", color:"white"}}>Dashboard 3</Link></th>
              </tr>
            </tbody>
          </table>

          </div>
        </div>

        {/* Dashboard Content */}
        <div className="col-md-9">
          <h1>dashboard1</h1>
          {
            
            page ==="dashboard2"? <Dashboard2></Dashboard2>:
            page ==="dashboard3"? <Dashboard3></Dashboard3>:
            <Dashboard1></Dashboard1>
          }
        </div>
        </div>
      </div>
    </>
  )
}
