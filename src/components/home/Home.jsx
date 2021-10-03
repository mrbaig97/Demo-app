import { NavLink } from "react-router-dom";

function Home() {

    return (
      <>
      <div className = "container-fluid nav_bg">
        <div className = "row">
        <div className = "col-10 mx-auto ">
          <div className = 'container' id = 'asd'>
          <div id = 'text' className="card">
  <div className="card-body">
    <h1 id = 'card-title' className="card-title">DISCOVER<br/>LEARN<br/>DEVELOP</h1>
    <p id = 'quote' className="card-text">“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</p>
    <NavLink id = 'btn' to="./services" className="btn btn-dark">Get Started</NavLink>
  </div>
</div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be510767817393.5b472244e895f.gif" className="img-fluid" alt="..."/>
        
</div>
  </div>
  

        </div>
        </div>
        
    </>
    )}

  export default  Home;