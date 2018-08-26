import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        {/* Page Container */}
        <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
          {/* The Grid */}
          <div className="w3-row-padding">
            {/* Left Column */}
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src="https://scontent.fvtz1-1.fna.fbcdn.net/v/t1.0-9/28055814_940537519427133_6807763831578978926_n.jpg?_nc_cat=0&oh=fa370f9992b5e05485a255fe7bd83e0c&oe=5B9CB8DD" style={{width: '100%'}} alt="Avatar" />
                  <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h1 style={{color: '#FFFFFF'}}>Pavan Kumar Dasireddy</h1>
                  </div>
                </div>
                <div className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Full Stack Developer</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Vijayawada, India</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />pavankumar.dasireddy@gmail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />(+91) 903 221 5508</p>
                  <hr />
                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
                  <p>HTML</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '85%'}}>85%</div>
                  </div>
                  <p>CSS</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
                  </div>
                  <p>JavaScript</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '60%'}}>60%</div>
                  </div>
                  <p>ReactJs</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
                  </div>
                  <p>Node js</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '55%'}}>
                      <div className="w3-center w3-text-white">55%</div>
                    </div>
                  </div>
                  <p>MongoDB</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '60%'}}>60%</div>
                  </div>
                  <br />
                  <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                  <p>Telugu</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '100%'}} />
                  </div>
                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '70%'}} />
                  </div>
                  <p>Hindi</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '50%'}} />
                  </div>
                  <br />
                </div>
              </div><br />
              {/* End Left Column */}
            </div>
            {/* Right Column */}
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
                <div className="w3-container">
                  <div>
                    <h5 className="w3-opacity"><b>Full Stack Developer</b></h5>
                    <a href="http://www.stellentsoft.com" style={{cursor: 'pointer', textDecoration: 'none'}}><b className="w3-opacity">Stellent Soft Pvt.Ltd</b></a> 
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />June 2017 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                  </div>
                  <h6 className="w3-opacity"><b>Projects:</b></h6>
                  <div>
                    <ul>
                      <li>
                        <b><a style={{cursor: 'pointer', textDecoration: 'none'}} href="http://tweakvideos.net" target="_blank">Tweak Videos</a></b>                
                      </li>
                      <li>
                        <b><a style={{cursor: 'pointer', textDecoration: 'none'}} href="https://www.xyzies.me/" target="_blank">XYZies</a></b>
                      </li>
                    </ul>
                  </div>          
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>MEAN Stack Developer / credowebs.com</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />March 2017 - May 2017</h6>
                  <hr />
                </div>
                {/* <div class="w3-container">
          <h5 class="w3-opacity"><b>Intern / credowebs.com</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - Mar 2017</h6><br>
        </div> */}
              </div>
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Certification</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Internship on MEAN STACK</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2017 - Mar 2017</h6>
                  <p>Credo Web Solutions, Visakhaptnam.</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Android Application Development Certication</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2016</h6>
                  <p>Google Certification</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>NCC  B &amp; C Certification</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2011 - 2013</h6>
                  <p>8(A) Air Sqn Ncc, Vijayawada</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Various Cultural &amp; Participation Certication&gt;</b></h5><b>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2014 - 2017</h6>
                    <p>Prasad.V.Potluri Siddhartha Institute Of Technology</p><br />
                  </b></div><b>
                </b></div><b>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Certification</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Post Graduation (MCA) / 8.25 CGPA</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2014 - 2017</h6>
                    <p>Prasad.V.Potluri Siddhartha Institute Of Technology</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Graduation B.Sc (M.S.CS) /  5.9 CGPA</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2011 - 2014</h6>
                    <p>Rutvik's Degree College</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Intermediate (MPC) / 6.2 CGPA</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2009 - 2011</h6>
                    <p>Aditya Jr &amp; Degree College</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Secondary School Certification / 8 CGPA</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2008 - 2009</h6>
                    <p>Krishna Chaitanya Public School</p><br />
                  </div>
                </div>
                {/* End Right Column */}
              </b></div><b>
              {/* End Grid */}
            </b></div><b>
            {/* End Page Container */}
          </b></div><b>
          <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on social media.</p>
            <a href="https://www.facebook.com/pavankumardasireddy" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-facebook-official w3-hover-opacity" /></a>
            <a href="https://twitter.com/PavankDasireddy" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-twitter w3-hover-opacity" /></a>
            <a href="https://plus.google.com/u/0/114895713471086873411" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-google w3-hover-opacity" /></a>
            <a href="https://github.com/pavankumardasireddy" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-github w3-hover-opacity" /></a>
            <a href="https://stackoverflow.com/users/9333951/pavan-kumar-dasireddy" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-stack-overflow w3-hover-opacity" /></a>
            <a href="https://www.linkedin.com/in/pavan-kumar-dasireddy-233b57111/" target="_blank"><i style={{padding: 'inherit'}} className="fa fa-2x fa-linkedin w3-hover-opacity" /></a>    
          </footer>
        </b></div>
      </div>
    );
  }
}

export default App;
