import React from 'react';

export default function Contact() {

  return (
    <div>
    <h1 id='Contact' className='text-center'> Contact Me </h1>
    <div className = "container">

    <form action="https://formsubmit.co/prabhanshjain@gmail.com" method="POST">
    <input type="hidden" name="_captcha" value="false"/>


    <div className="form-group">
    <input type="hidden" name="_subject" value="New submission!"/>

    <label for="exampleInputName">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailName" placeholder="Enter name"/>
  </div>
    
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">I will reply you back on this email.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Put Down Your Message Here...</label>
    <textarea name='message' className='form-text form-control' placeholder='Write Your Message Here.'> </textarea>
  </div>
 
  <button type="submit" className="button-51 mb-5">Submit</button>
</form>

    </div>
    </div>
  

  );
}

