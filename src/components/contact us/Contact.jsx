function Contact() {
    return (
      <>
        <div className = "container-fluid nav_bg">
        <div className = "row">
        <div className = "col-5 mx-auto">
        <div id = 'contact'>
        <form>
          
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contact #</label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Comments...</label>
    <textarea  className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <br/>
 <hr/>
</form>
</div>

        </div>
        </div>
        </div>
      </>
    )
  }

  export default Contact;