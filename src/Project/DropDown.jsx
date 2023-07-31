import React, { useState } from "react";
import logo from "../assets/logo1.png"


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleToggle1 = () => {
    setOpen1((prevIsOpen) => !prevIsOpen);
  };
  const handleToggle2 = () => {
    setOpen2((prevIsOpen) => !prevIsOpen);
  };
 return (
    <div className="flex dropdown">
      <div className="logo-div">
<img src={logo} className="logo"/></div>
<br />

      <div className="dropdown-container"><br />
        <button className="dropdown-button" onClick={handleToggle}>
          Why Project Pulse
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="para1">
              <h6>for teams </h6>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-marketing.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Marketing</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Streamline proofing and reporting for seamless campaigns.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-case.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Professional Services </p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Take control of billable hours and increase client
                    satisfaction.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-project-1.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">PMO</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Align strategy with execution and deliver results.{" "}
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-palette.svg
"
                      alt=""
                    />
                  </i>
                  <p className="para">Creative & Design</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Create high-quality assets and get them approved in record
                    time.
                  </p>
                </div>
              </div>
            </div>
            <div className="para1">
              <h6>USE CASES</h6>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-check.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Project Management</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Plan Agile projects, track deadlines, and deliver results.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-dependency.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Workflow Management</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Use custom statuses and automate your team workflows.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-board.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Task Management</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Organize incoming requests and eliminate repetitive tasks.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-folder.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Resource Management</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    View team workloads and reallocate tasks to avoid burnout.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="para1">
              <h6>APPS & INTEGRATIONS</h6>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-slack.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Slack</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Turn a casual Slack chat into an actionable Wrike task.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-salesforce.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Salesforce</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Integrate client data seamlessly between Wrike and
                    Salesforce.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-microsoft-teams.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Microsoft Teams</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Collaborate on Wrike projects without leaving Microsoft
                    Teams.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-adobe.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Adobe</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Accelerate Wrike design tasks from Adobe Creative Cloud.
                  </p>
                </div>
              </div>
            </div>
          

            <div className="para1">
              
              <h6>for teams </h6>
              {/* <div className="effect"> */}
              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-check.svg"
                    alt=""
                  />
                </i>
                <p className="para">Book a Demo</p>
              </div>
              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-items.svg"
                    alt=""
                  />
                </i>
                <p className="para">Take a Product Tour</p>
              </div>

              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-items.svg"
                    alt=""
                  />
                </i>
                <p className="para">Start With Templates</p>
              </div>
              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-heart.svg"
                    alt=""
                  />
                </i>
                <p className="para">Customer Stories</p>
              </div>
              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-pie-chart-1.svg"
                    alt=""
                  />
                </i>
                <p className="para">ROI Calculator</p>
              </div>
              <div className="flex1">
                <i>
                  <img
                    src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-check-shield.svg"
                    alt=""
                  />
                </i>
                <p className="para">Find a Reseller</p>
              </div>
            </div>
          </div>
          // </div>
        )}
      </div>
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={handleToggle1}>
          Features
        </button>
        {isOpen1 && (
          <div className="dropdown-content">
            <div className="para1">
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dashboard.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Dashboards</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Visualize tasks, processes, analytics, and more.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-speech.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Automation</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Define and trigger automated workflows to eliminate manual
                    efforts.{" "}
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-user-group.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Mobile & Desktop Apps</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Work from anywhere with our robust app experience.{" "}
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-items.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Proofing e.</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Streamlined proofing and collaboration in one plac{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="para1">
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-settings.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Cross-Tagging</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Unparalleled visibility across multiple work streams.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-subtasks.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Kanban Boards</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Instantly view project progress and create customized
                    workflows.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dependency.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Project Resource Planning</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Plan and allocate resources for timely delivery{" "}
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-form.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Gantt Charts</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Interactive project scheduling across teams.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="para1">
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-mobile.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Approvals</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Keep approvers in the loop from start to finish
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-board.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Custom Item Types</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Tailor work items to fit your specific workplace.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-check-circle.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Dynamic Request Forms</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Custom forms powered by conditional logic.{" "}
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-intersection.svg"
                      alt=""
                    />
                  </i>
                  <p className="para"> Integrations</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Over 400 popular apps plus custom integrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="para1">{/* <div className="effect"> */}</div>
          </div>
        )}
      </div>
    
      
      <div className="dropdown-container"><br />
        <button className="dropdown-button" onClick={handleToggle2}>
      Resources
        </button>
        {isOpen2 && (
          <div className="dropdown-content">
            <div className="para1">
              <div className="effect">
                <div className="flex">
                 <i>
                    <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-folder-1.svg" alt="" />
                  </i>
                  <p className="para">  Resource Hub</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>Top assets on productivity, collaboration, and more.</p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-education.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Educational Guides</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                    Guides and tools to unlock better work management.
                  </p>
                </div>
              </div>

              <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-check-shield.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Partners</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                  Power new possibilities with the Wrike Partner Program.
                  </p>
                </div>
              </div>
             
            </div>
            <div className="para1"> 
            <div className="effect">
                <div className="flex">
                  <i style={{ color: "blueviolet" }}>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-write.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Wrike Blog</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                   Latest news and best practices on project management.
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-video.svg"
                      alt=""
                    />
                  </i>


                  <p className="para">Webinars</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>Join our live or on-demand sessions to do your best work.
                 
                  </p>
                </div>
              </div>
              <div className="effect">
                <div className="flex">
                  <i>
                    <img
                      src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-settings.svg"
                      alt=""
                    />
                  </i>
                  <p className="para">Developers</p>
                </div>
                <div>
                  <p style={{ fontSize: "8px", marginTop: "-10px" }}>
                  Connect and build integrations with easy-to-use APIs.  
                  </p>
                </div>
               
              </div>

             
             
            </div>
           
            
          </div>
        )}
        
          
      </div>
      
    </div>

  );
};
export default Dropdown;
