import React from "react";

export default function Test() {
  return (
    <section id="container">
      {/*header start*/}
      <header className="header fixed-top clearfix">
        {/*logo start*/}
        <div className="brand">
          <a href="index.html" className="logo">
            VISITORS
          </a>
          <div className="sidebar-toggle-box">
            <div className="fa fa-bars" />
          </div>
        </div>
        {/*logo end*/}
        <div className="nav notify-row" id="top_menu">
          {/*  notification start */}
          <ul className="nav top-menu">
            {/* settings start */}
            <li className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-tasks" />
                <span className="badge bg-success">8</span>
              </a>
              <ul className="dropdown-menu extended tasks-bar">
                <li>
                  <p className>You have 8 pending tasks</p>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Target Sell</h5>
                        <p>25% , Deadline 12 June’13</p>
                      </div>
                      <span
                        className="notification-pie-chart pull-right"
                        data-percent={45}
                      >
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Product Delivery</h5>
                        <p>45% , Deadline 12 June’13</p>
                      </div>
                      <span
                        className="notification-pie-chart pull-right"
                        data-percent={78}
                      >
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Payment collection</h5>
                        <p>87% , Deadline 12 June’13</p>
                      </div>
                      <span
                        className="notification-pie-chart pull-right"
                        data-percent={60}
                      >
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Target Sell</h5>
                        <p>33% , Deadline 12 June’13</p>
                      </div>
                      <span
                        className="notification-pie-chart pull-right"
                        data-percent={90}
                      >
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="external">
                  <a href="#">See All Tasks</a>
                </li>
              </ul>
            </li>
            {/* settings end */}
            {/* inbox dropdown start*/}
            <li id="header_inbox_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-envelope-o" />
                <span className="badge bg-important">4</span>
              </a>
              <ul className="dropdown-menu extended inbox">
                <li>
                  <p className="red">You have 4 Mails</p>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="images/3.png" />
                    </span>
                    <span className="subject">
                      <span className="from">Jonathan Smith</span>
                      <span className="time">Just now</span>
                    </span>
                    <span className="message">
                      Hello, this is an example msg.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="images/1.png" />
                    </span>
                    <span className="subject">
                      <span className="from">Jane Doe</span>
                      <span className="time">2 min ago</span>
                    </span>
                    <span className="message">Nice admin template</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="images/3.png" />
                    </span>
                    <span className="subject">
                      <span className="from">Tasi sam</span>
                      <span className="time">2 days ago</span>
                    </span>
                    <span className="message">This is an example msg.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="images/2.png" />
                    </span>
                    <span className="subject">
                      <span className="from">Mr. Perfect</span>
                      <span className="time">2 hour ago</span>
                    </span>
                    <span className="message">Hi there, its a test</span>
                  </a>
                </li>
                <li>
                  <a href="#">See all messages</a>
                </li>
              </ul>
            </li>
            {/* inbox dropdown end */}
            {/* notification dropdown start*/}
            <li id="header_notification_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-bell-o" />
                <span className="badge bg-warning">3</span>
              </a>
              <ul className="dropdown-menu extended notification">
                <li>
                  <p>Notifications</p>
                </li>
                <li>
                  <div className="alert alert-info clearfix">
                    <span className="alert-icon">
                      <i className="fa fa-bolt" />
                    </span>
                    <div className="noti-info">
                      <a href="#"> Server #1 overloaded.</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="alert alert-danger clearfix">
                    <span className="alert-icon">
                      <i className="fa fa-bolt" />
                    </span>
                    <div className="noti-info">
                      <a href="#"> Server #2 overloaded.</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="alert alert-success clearfix">
                    <span className="alert-icon">
                      <i className="fa fa-bolt" />
                    </span>
                    <div className="noti-info">
                      <a href="#"> Server #3 overloaded.</a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* notification dropdown end */}
          </ul>
          {/*  notification end */}
        </div>
        <div className="top-nav clearfix">
          {/*search & user info start*/}
          <ul className="nav pull-right top-menu">
            <li>
              <input
                type="text"
                className="form-control search"
                placeholder=" Search"
              />
            </li>
            {/* user login dropdown start*/}
            <li className="dropdown">
              <a
                data-toggle="dropdown"
                className="dropdown-toggle"
                href="#"
                aria-expanded="false"
              >
                <img alt="" src="images/2.png" />
                <span className="username">John Doe</span>
                <b className="caret" />
              </a>
              <ul className="dropdown-menu extended logout">
                <li>
                  <a href="#">
                    <i className=" fa fa-suitcase" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" /> Settings
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-key" /> Log Out
                  </a>
                </li>
              </ul>
            </li>
            {/* user login dropdown end */}
          </ul>
          {/*search & user info end*/}
        </div>
      </header>
      {/*header end*/}
      {/*sidebar start*/}
      <aside>
        <div id="sidebar" className="nav-collapse">
          {/* sidebar menu start*/}
          <div
            className="leftside-navigation"
            tabIndex={5000}
            style={{ overflow: "hidden", outline: "none" }}
          >
            <ul className="sidebar-menu" id="nav-accordion">
              <li>
                <a className="active" href="index.html">
                  <i className="fa fa-dashboard" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className="fa fa-book" />
                  <span>UI Elements</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="glyphicon.html">glyphicon</a>
                  </li>
                  <li>
                    <a href="grids.html">Grids</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="fontawesome.html">
                  <i className="fa fa-bullhorn" />
                  <span>Font awesome </span>
                </a>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className="fa fa-th" />
                  <span>Data Tables</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="basic_table.html">Basic Table</a>
                  </li>
                  <li>
                    <a href="responsive_table.html">Responsive Table</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className="fa fa-tasks" />
                  <span>Form Components</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="form_component.html">Form Elements</a>
                  </li>
                  <li>
                    <a href="form_validation.html">Form Validation</a>
                  </li>
                  <li>
                    <a href="dropzone.html">Dropzone</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className="fa fa-envelope" />
                  <span>Mail </span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="mail.html">Inbox</a>
                  </li>
                  <li>
                    <a href="mail_compose.html">Compose Mail</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className=" fa fa-bar-chart-o" />
                  <span>Charts</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="chartjs.html">Chart js</a>
                  </li>
                  <li>
                    <a href="flot_chart.html">Flot Charts</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className=" fa fa-bar-chart-o" />
                  <span>Maps</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="google_map.html">Google Map</a>
                  </li>
                  <li>
                    <a href="vector_map.html">Vector Map</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <a href="javascript:;" className="dcjq-parent">
                  <i className="fa fa-glass" />
                  <span>Extra</span>
                  <span className="dcjq-icon" />
                </a>
                <ul className="sub" style={{ display: "none" }}>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="404.html">404 Error</a>
                  </li>
                  <li>
                    <a href="registration.html">Registration</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="login.html">
                  <i className="fa fa-user" />
                  <span>Login Page</span>
                </a>
              </li>
            </ul>{" "}
          </div>
          {/* sidebar menu end*/}
          <div
            id="ascrail2000"
            className="nicescroll-rails"
            style={{
              width: "3px",
              zIndex: "auto",
              cursor: "default",
              position: "absolute",
              top: "0px",
              left: "237px",
              height: "778px",
              display: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "0px",
                float: "right",
                width: "3px",
                height: "0px",
                backgroundColor: "rgb(139, 92, 126)",
                border: "0px solid rgb(255, 255, 255)",
                backgroundClip: "padding-box",
                borderRadius: "0px",
              }}
            />
          </div>
          <div
            id="ascrail2000-hr"
            className="nicescroll-rails"
            style={{
              height: "3px",
              zIndex: "auto",
              top: "775px",
              left: "0px",
              position: "absolute",
              cursor: "default",
              display: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "0px",
                height: "3px",
                width: "0px",
                backgroundColor: "rgb(139, 92, 126)",
                border: "0px solid rgb(255, 255, 255)",
                backgroundClip: "padding-box",
                borderRadius: "0px",
              }}
            />
          </div>
        </div>
      </aside>
      {/*sidebar end*/}
      {/*main content start*/}
      <section id="main-content" className>
        <section className="wrapper">
          {/* //market*/}
          <div className="market-updates">
            <div className="col-md-3 market-update-gd">
              <div className="market-update-block clr-block-2">
                <div className="col-md-4 market-update-right">
                  <i className="fa fa-eye"> </i>
                </div>
                <div className="col-md-8 market-update-left">
                  <h4>Visitors</h4>
                  <h3>13,500</h3>
                  <p>Other hand, we denounce</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-3 market-update-gd">
              <div className="market-update-block clr-block-1">
                <div className="col-md-4 market-update-right">
                  <i className="fa fa-users" />
                </div>
                <div className="col-md-8 market-update-left">
                  <h4>Users</h4>
                  <h3>1,250</h3>
                  <p>Other hand, we denounce</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-3 market-update-gd">
              <div className="market-update-block clr-block-3">
                <div className="col-md-4 market-update-right">
                  <i className="fa fa-usd" />
                </div>
                <div className="col-md-8 market-update-left">
                  <h4>Sales</h4>
                  <h3>1,500</h3>
                  <p>Other hand, we denounce</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-3 market-update-gd">
              <div className="market-update-block clr-block-4">
                <div className="col-md-4 market-update-right">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </div>
                <div className="col-md-8 market-update-left">
                  <h4>Orders</h4>
                  <h3>1,500</h3>
                  <p>Other hand, we denounce</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* //market*/}
          <div className="row">
            <div className="panel-body">
              <div className="col-md-12 w3ls-graph">
                {/*agileinfo-grap*/}
                <div className="agileinfo-grap">
                  <div className="agileits-box">
                    <header className="agileits-box-header clearfix">
                      <h3>Visitor Statistics</h3>
                      <div className="toolbar"></div>
                    </header>
                    <div className="agileits-box-body clearfix">
                      <div
                        id="hero-area"
                        style={{
                          position: "relative",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        }}
                      >
                        <svg
                          height={348}
                          version="1.1"
                          width={570}
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            top: "-0.25px",
                          }}
                        >
                          <desc
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          >
                            Created with Raphaël 2.0.1
                          </desc>
                          <defs
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="41.712501525878906"
                            y="330.3999996185303"
                            textAnchor="end"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "end",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                          >
                            <tspan
                              dy="4.39998722076416"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              0
                            </tspan>
                          </text>
                          <path
                            fill="none"
                            stroke="#dddddd"
                            d="M46.712501525878906,330.3999996185303H560"
                            strokeWidth="0.5"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="41.712501525878906"
                            y="250.2999997138977"
                            textAnchor="end"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "end",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                          >
                            <tspan
                              dy="4.399993419647217"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              5,000
                            </tspan>
                          </text>
                          <path
                            fill="none"
                            stroke="#dddddd"
                            d="M46.712501525878906,250.2999997138977H560"
                            strokeWidth="0.5"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="41.712501525878906"
                            y="170.19999980926514"
                            textAnchor="end"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "end",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                          >
                            <tspan
                              dy="4.399999618530273"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              10,000
                            </tspan>
                          </text>
                          <path
                            fill="none"
                            stroke="#dddddd"
                            d="M46.712501525878906,170.19999980926514H560"
                            strokeWidth="0.5"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="41.712501525878906"
                            y="90.09999990463257"
                            textAnchor="end"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "end",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                          >
                            <tspan
                              dy="4.399998188018799"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              15,000
                            </tspan>
                          </text>
                          <path
                            fill="none"
                            stroke="#dddddd"
                            d="M46.712501525878906,90.09999990463257H560"
                            strokeWidth="0.5"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="41.712501525878906"
                            y={10}
                            textAnchor="end"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "end",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                          >
                            <tspan
                              dy="4.3999998569488525"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              20,000
                            </tspan>
                          </text>
                          <path
                            fill="none"
                            stroke="#dddddd"
                            d="M46.712501525878906,10H560"
                            strokeWidth="0.5"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <text
                            x="518.57187084819"
                            y="335.3999996185303"
                            textAnchor="middle"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                            transform="matrix(1,0,0,1,0,6.8)"
                          >
                            <tspan
                              dy="4.39998722076416"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              2017
                            </tspan>
                          </text>
                          <text
                            x="261.5770357708598"
                            y="335.3999996185303"
                            textAnchor="middle"
                            font='10px "Arial"'
                            stroke="none"
                            fill="#888888"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              font: "12px sans-serif",
                            }}
                            fontSize="12px"
                            fontFamily="sans-serif"
                            fontWeight="normal"
                            transform="matrix(1,0,0,1,0,6.8)"
                          >
                            <tspan
                              dy="4.39998722076416"
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                            >
                              2016
                            </tspan>
                          </text>
                          <path
                            fill="#efafaf"
                            stroke="none"
                            d="M46.712501525878906,287.65863966941833C62.86245017827943,235.14507973194122,95.16234748308048,98.13402989506721,111.312296135481,77.60439991950989C127.46224478788153,57.07476994395256,159.76214209268258,109.30736709487894,175.9120907450831,123.42159986495972C191.88649647734883,137.38241706145266,223.83530794188033,185.69934979081154,239.80971367414605,189.90459978580475C255.78411940641178,194.10984978079796,287.7329308709433,158.8759170358624,303.707336603209,157.0635998249054C319.85728525560955,155.2313670402016,352.15718256041055,163.3314248174429,368.3071312128111,175.32639980316162C384.45707986521165,187.32137478888035,416.75697717001265,263.9020301895063,432.9069258224132,253.0233997106552C448.8813315546789,242.26301521526986,480.8301430192105,100.58391715734375,496.8045487514762,88.77033990621567C512.6034115636071,77.08658218531978,544.2011371878691,141.46812984347343,560,159.03405982255936L560,330.3999996185303L46.712501525878906,330.3999996185303Z"
                            fillOpacity="0.85"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              fillOpacity: "0.85",
                            }}
                          />
                          <path
                            fill="none"
                            stroke="#eb6f6f"
                            d="M46.712501525878906,287.65863966941833C62.86245017827943,235.14507973194122,95.16234748308048,98.13402989506721,111.312296135481,77.60439991950989C127.46224478788153,57.07476994395256,159.76214209268258,109.30736709487894,175.9120907450831,123.42159986495972C191.88649647734883,137.38241706145266,223.83530794188033,185.69934979081154,239.80971367414605,189.90459978580475C255.78411940641178,194.10984978079796,287.7329308709433,158.8759170358624,303.707336603209,157.0635998249054C319.85728525560955,155.2313670402016,352.15718256041055,163.3314248174429,368.3071312128111,175.32639980316162C384.45707986521165,187.32137478888035,416.75697717001265,263.9020301895063,432.9069258224132,253.0233997106552C448.8813315546789,242.26301521526986,480.8301430192105,100.58391715734375,496.8045487514762,88.77033990621567C512.6034115636071,77.08658218531978,544.2011371878691,141.46812984347343,560,159.03405982255936"
                            strokeWidth={0}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="46.712501525878906"
                            cy="287.65863966941833"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="111.312296135481"
                            cy="77.60439991950989"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="175.9120907450831"
                            cy="123.42159986495972"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="239.80971367414605"
                            cy="189.90459978580475"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="303.707336603209"
                            cy="157.0635998249054"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="368.3071312128111"
                            cy="175.32639980316162"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="432.9069258224132"
                            cy="253.0233997106552"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="496.8045487514762"
                            cy="88.77033990621567"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx={560}
                            cy="159.03405982255936"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <path
                            fill="#a58099"
                            stroke="none"
                            d="M46.712501525878906,330.3999996185303C62.86245017827943,275.13500468432903,95.16234748308048,131.31745735555887,111.312296135481,109.34001988172531C127.46224478788153,87.36258240789175,159.76214209268258,140.0857264024964,175.9120907450831,154.5804998278618C191.88649647734883,168.91772136816888,223.83530794188033,224.56587224453688,239.80971367414605,224.66799974441528C255.78411940641178,224.7701272442937,287.7329308709433,160.19717309986308,303.707336603209,155.39751982688904C319.85728525560955,150.54512311135485,352.15718256041055,171.8040023073554,368.3071312128111,186.05979979038239C384.45707986521165,200.31559727340937,416.75697717001265,269.3774560846266,432.9069258224132,269.4438996911049C448.8813315546789,269.50962108446925,480.8301430192105,187.92747953953995,496.8045487514762,186.58845978975296C512.6034115636071,185.2641545427109,544.2011371878691,240.7400647252798,560,258.79059970378876L560,330.3999996185303L46.712501525878906,330.3999996185303Z"
                            fillOpacity="0.85"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              fillOpacity: "0.85",
                            }}
                          />
                          <path
                            fill="none"
                            stroke="#926383"
                            d="M46.712501525878906,330.3999996185303C62.86245017827943,275.13500468432903,95.16234748308048,131.31745735555887,111.312296135481,109.34001988172531C127.46224478788153,87.36258240789175,159.76214209268258,140.0857264024964,175.9120907450831,154.5804998278618C191.88649647734883,168.91772136816888,223.83530794188033,224.56587224453688,239.80971367414605,224.66799974441528C255.78411940641178,224.7701272442937,287.7329308709433,160.19717309986308,303.707336603209,155.39751982688904C319.85728525560955,150.54512311135485,352.15718256041055,171.8040023073554,368.3071312128111,186.05979979038239C384.45707986521165,200.31559727340937,416.75697717001265,269.3774560846266,432.9069258224132,269.4438996911049C448.8813315546789,269.50962108446925,480.8301430192105,187.92747953953995,496.8045487514762,186.58845978975296C512.6034115636071,185.2641545427109,544.2011371878691,240.7400647252798,560,258.79059970378876"
                            strokeWidth={0}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="46.712501525878906"
                            cy="330.3999996185303"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="111.312296135481"
                            cy="109.34001988172531"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="175.9120907450831"
                            cy="154.5804998278618"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="239.80971367414605"
                            cy="224.66799974441528"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="303.707336603209"
                            cy="155.39751982688904"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="368.3071312128111"
                            cy="186.05979979038239"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="432.9069258224132"
                            cy="269.4438996911049"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="496.8045487514762"
                            cy="186.58845978975296"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx={560}
                            cy="258.79059970378876"
                            r={2}
                            fill="#926383"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <path
                            fill="#efafaf"
                            stroke="none"
                            d="M46.712501525878906,287.96301966905594C62.86245017827943,250.30800971388817,95.16234748308048,151.88313233107328,111.312296135481,137.34297984838486C127.46224478788153,122.80282736569643,159.76214209268258,160.85780113186343,175.9120907450831,171.64179980754852C191.88649647734883,182.30858110632403,223.83530794188033,227.93207474052906,239.80971367414605,223.14609974622726C255.78411940641178,218.36012475192547,287.7329308709433,135.73590247324907,303.707336603209,133.35399985313416C319.85728525560955,130.94592247895204,352.15718256041055,182.5554247945547,368.3071312128111,203.98617976903915C384.45707986521165,225.4169347435236,416.75697717001265,299.35166391779165,432.9069258224132,304.8000396490097C448.8813315546789,310.18919390488844,480.8301430192105,248.22226767217256,496.8045487514762,247.3362997174263C512.6034115636071,246.46006767427065,544.2011371878691,285.1475046724081,560,297.75123965740204L560,330.3999996185303L46.712501525878906,330.3999996185303Z"
                            fillOpacity="0.85"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              fillOpacity: "0.85",
                            }}
                          />
                          <path
                            fill="none"
                            stroke="#eb6f6f"
                            d="M46.712501525878906,287.96301966905594C62.86245017827943,250.30800971388817,95.16234748308048,151.88313233107328,111.312296135481,137.34297984838486C127.46224478788153,122.80282736569643,159.76214209268258,160.85780113186343,175.9120907450831,171.64179980754852C191.88649647734883,182.30858110632403,223.83530794188033,227.93207474052906,239.80971367414605,223.14609974622726C255.78411940641178,218.36012475192547,287.7329308709433,135.73590247324907,303.707336603209,133.35399985313416C319.85728525560955,130.94592247895204,352.15718256041055,182.5554247945547,368.3071312128111,203.98617976903915C384.45707986521165,225.4169347435236,416.75697717001265,299.35166391779165,432.9069258224132,304.8000396490097C448.8813315546789,310.18919390488844,480.8301430192105,248.22226767217256,496.8045487514762,247.3362997174263C512.6034115636071,246.46006767427065,544.2011371878691,285.1475046724081,560,297.75123965740204"
                            strokeWidth={0}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="46.712501525878906"
                            cy="287.96301966905594"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="111.312296135481"
                            cy="137.34297984838486"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="175.9120907450831"
                            cy="171.64179980754852"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="239.80971367414605"
                            cy="223.14609974622726"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="303.707336603209"
                            cy="133.35399985313416"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="368.3071312128111"
                            cy="203.98617976903915"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="432.9069258224132"
                            cy="304.8000396490097"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx="496.8045487514762"
                            cy="247.3362997174263"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                          <circle
                            cx={560}
                            cy="297.75123965740204"
                            r={2}
                            fill="#eb6f6f"
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          />
                        </svg>
                        <div
                          className="morris-hover morris-default-style"
                          style={{
                            left: "799.305px",
                            top: "196px",
                            display: "none",
                          }}
                        >
                          <div className="morris-hover-row-label">2016 Q3</div>
                          <div
                            className="morris-hover-point"
                            style={{ color: "#eb6f6f" }}
                          >
                            All Visitors: 4,830
                          </div>
                          <div
                            className="morris-hover-point"
                            style={{ color: "#926383" }}
                          >
                            Returning Visitors: 3,805
                          </div>
                          <div
                            className="morris-hover-point"
                            style={{ color: "#eb6f6f" }}
                          >
                            Unique Visitors: 1,598
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//agileinfo-grap*/}
              </div>
            </div>
          </div>
          <div className="agil-info-calendar">
            {/* calendar */}
            <div className="col-md-6 agile-calendar">
              <div className="calendar-widget">
                <div className="panel-heading ui-sortable-handle">
                  <span className="panel-icon">
                    <i className="fa fa-calendar-o" />
                  </span>
                  <span className="panel-title"> Calendar Widget</span>
                </div>
                {/* grids */}
                <div className="agile-calendar-grid">
                  <div className="page">
                    <div className="w3l-calendar-left">
                      <div className="calendar-heading"></div>
                      <div className="monthly" id="mycalendar">
                        <div className="monthly-header">
                          <div className="monthly-header-title">Feb 2024</div>
                          <a href="#" className="monthly-prev" />
                          <a href="#" className="monthly-next" />
                        </div>
                        <div className="monthly-day-title-wrap">
                          <div>Sun</div>
                          <div>Mon</div>
                          <div>Tue</div>
                          <div>Wed</div>
                          <div>Thu</div>
                          <div>Fri</div>
                          <div>Sat</div>
                        </div>
                        <div className="monthly-day-wrap">
                          <div className="monthly-week">
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={1}
                            >
                              <div className="monthly-day-number">1</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={2}
                            >
                              <div className="monthly-day-number">2</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event monthly-today"
                              data-number={3}
                            >
                              <div className="monthly-day-number">3</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                          </div>
                          <div className="monthly-week">
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={4}
                            >
                              <div className="monthly-day-number">4</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={5}
                            >
                              <div className="monthly-day-number">5</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={6}
                            >
                              <div className="monthly-day-number">6</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={7}
                            >
                              <div className="monthly-day-number">7</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={8}
                            >
                              <div className="monthly-day-number">8</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={9}
                            >
                              <div className="monthly-day-number">9</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={10}
                            >
                              <div className="monthly-day-number">10</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                          </div>
                          <div className="monthly-week">
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={11}
                            >
                              <div className="monthly-day-number">11</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={12}
                            >
                              <div className="monthly-day-number">12</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={13}
                            >
                              <div className="monthly-day-number">13</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={14}
                            >
                              <div className="monthly-day-number">14</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={15}
                            >
                              <div className="monthly-day-number">15</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={16}
                            >
                              <div className="monthly-day-number">16</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={17}
                            >
                              <div className="monthly-day-number">17</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                          </div>
                          <div className="monthly-week">
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={18}
                            >
                              <div className="monthly-day-number">18</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={19}
                            >
                              <div className="monthly-day-number">19</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={20}
                            >
                              <div className="monthly-day-number">20</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={21}
                            >
                              <div className="monthly-day-number">21</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={22}
                            >
                              <div className="monthly-day-number">22</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={23}
                            >
                              <div className="monthly-day-number">23</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={24}
                            >
                              <div className="monthly-day-number">24</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                          </div>
                          <div className="monthly-week">
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={25}
                            >
                              <div className="monthly-day-number">25</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={26}
                            >
                              <div className="monthly-day-number">26</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={27}
                            >
                              <div className="monthly-day-number">27</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={28}
                            >
                              <div className="monthly-day-number">28</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <a
                              href="#"
                              className="m-d monthly-day monthly-day-event"
                              data-number={29}
                            >
                              <div className="monthly-day-number">29</div>
                              <div className="monthly-indicator-wrap" />
                            </a>
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                            <div className="m-d monthly-day-blank">
                              <div className="monthly-day-number" />
                            </div>
                          </div>
                        </div>
                        <div className="monthly-event-list">
                          <div
                            className="monthly-list-item"
                            id="mycalendarday1"
                            data-number={1}
                          >
                            <div className="monthly-event-list-date">
                              THU
                              <br />1
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday2"
                            data-number={2}
                          >
                            <div className="monthly-event-list-date">
                              FRI
                              <br />2
                            </div>
                          </div>
                          <div
                            className="monthly-list-item monthly-today"
                            id="mycalendarday3"
                            data-number={3}
                          >
                            <div className="monthly-event-list-date">
                              SAT
                              <br />3
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday4"
                            data-number={4}
                          >
                            <div className="monthly-event-list-date">
                              SUN
                              <br />4
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday5"
                            data-number={5}
                          >
                            <div className="monthly-event-list-date">
                              MON
                              <br />5
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday6"
                            data-number={6}
                          >
                            <div className="monthly-event-list-date">
                              TUE
                              <br />6
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday7"
                            data-number={7}
                          >
                            <div className="monthly-event-list-date">
                              WED
                              <br />7
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday8"
                            data-number={8}
                          >
                            <div className="monthly-event-list-date">
                              THU
                              <br />8
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday9"
                            data-number={9}
                          >
                            <div className="monthly-event-list-date">
                              FRI
                              <br />9
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday10"
                            data-number={10}
                          >
                            <div className="monthly-event-list-date">
                              SAT
                              <br />
                              10
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday11"
                            data-number={11}
                          >
                            <div className="monthly-event-list-date">
                              SUN
                              <br />
                              11
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday12"
                            data-number={12}
                          >
                            <div className="monthly-event-list-date">
                              MON
                              <br />
                              12
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday13"
                            data-number={13}
                          >
                            <div className="monthly-event-list-date">
                              TUE
                              <br />
                              13
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday14"
                            data-number={14}
                          >
                            <div className="monthly-event-list-date">
                              WED
                              <br />
                              14
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday15"
                            data-number={15}
                          >
                            <div className="monthly-event-list-date">
                              THU
                              <br />
                              15
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday16"
                            data-number={16}
                          >
                            <div className="monthly-event-list-date">
                              FRI
                              <br />
                              16
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday17"
                            data-number={17}
                          >
                            <div className="monthly-event-list-date">
                              SAT
                              <br />
                              17
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday18"
                            data-number={18}
                          >
                            <div className="monthly-event-list-date">
                              SUN
                              <br />
                              18
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday19"
                            data-number={19}
                          >
                            <div className="monthly-event-list-date">
                              MON
                              <br />
                              19
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday20"
                            data-number={20}
                          >
                            <div className="monthly-event-list-date">
                              TUE
                              <br />
                              20
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday21"
                            data-number={21}
                          >
                            <div className="monthly-event-list-date">
                              WED
                              <br />
                              21
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday22"
                            data-number={22}
                          >
                            <div className="monthly-event-list-date">
                              THU
                              <br />
                              22
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday23"
                            data-number={23}
                          >
                            <div className="monthly-event-list-date">
                              FRI
                              <br />
                              23
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday24"
                            data-number={24}
                          >
                            <div className="monthly-event-list-date">
                              SAT
                              <br />
                              24
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday25"
                            data-number={25}
                          >
                            <div className="monthly-event-list-date">
                              SUN
                              <br />
                              25
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday26"
                            data-number={26}
                          >
                            <div className="monthly-event-list-date">
                              MON
                              <br />
                              26
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday27"
                            data-number={27}
                          >
                            <div className="monthly-event-list-date">
                              TUE
                              <br />
                              27
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday28"
                            data-number={28}
                          >
                            <div className="monthly-event-list-date">
                              WED
                              <br />
                              28
                            </div>
                          </div>
                          <div
                            className="monthly-list-item"
                            id="mycalendarday29"
                            data-number={29}
                          >
                            <div className="monthly-event-list-date">
                              THU
                              <br />
                              29
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //calendar */}
            <div className="col-md-6 w3agile-notifications">
              <div className="notifications">
                {/*notification start*/}
                <header className="panel-heading">Notification</header>
                <div className="notify-w3ls">
                  <div className="alert alert-info clearfix">
                    <span className="alert-icon">
                      <i className="fa fa-envelope-o" />
                    </span>
                    <div className="notification-info">
                      <ul className="clearfix notification-meta">
                        <li className="pull-left notification-sender">
                          <span>
                            <a href="#">Jonathan Smith</a>
                          </span>{" "}
                          send you a mail{" "}
                        </li>
                        <li className="pull-right notification-time">
                          1 min ago
                        </li>
                      </ul>
                      <p>Urgent meeting for next proposal</p>
                    </div>
                  </div>
                  <div className="alert alert-danger">
                    <span className="alert-icon">
                      <i className="fa fa-facebook" />
                    </span>
                    <div className="notification-info">
                      <ul className="clearfix notification-meta">
                        <li className="pull-left notification-sender">
                          <span>
                            <a href="#">Jonathan Smith</a>
                          </span>{" "}
                          mentioned you in a post{" "}
                        </li>
                        <li className="pull-right notification-time">
                          7 Hours Ago
                        </li>
                      </ul>
                      <p>Very cool photo jack</p>
                    </div>
                  </div>
                  <div className="alert alert-success ">
                    <span className="alert-icon">
                      <i className="fa fa-comments-o" />
                    </span>
                    <div className="notification-info">
                      <ul className="clearfix notification-meta">
                        <li className="pull-left notification-sender">
                          You have 5 message unread
                        </li>
                        <li className="pull-right notification-time">
                          1 min ago
                        </li>
                      </ul>
                      <p>
                        <a href="#">Anjelina Mewlo, Jack Flip</a> and{" "}
                        <a href="#">3 others</a>
                      </p>
                    </div>
                  </div>
                  <div className="alert alert-warning ">
                    <span className="alert-icon">
                      <i className="fa fa-bell-o" />
                    </span>
                    <div className="notification-info">
                      <ul className="clearfix notification-meta">
                        <li className="pull-left notification-sender">
                          Domain Renew Deadline 7 days ahead
                        </li>
                        <li className="pull-right notification-time">
                          5 Days Ago
                        </li>
                      </ul>
                      <p>Next 5 July Thursday is the last day</p>
                    </div>
                  </div>
                  <div className="alert alert-info clearfix">
                    <span className="alert-icon">
                      <i className="fa fa-envelope-o" />
                    </span>
                    <div className="notification-info">
                      <ul className="clearfix notification-meta">
                        <li className="pull-left notification-sender">
                          <span>
                            <a href="#">Jonathan Smith</a>
                          </span>{" "}
                          send you a mail{" "}
                        </li>
                        <li className="pull-right notification-time">
                          1 min ago
                        </li>
                      </ul>
                      <p>Urgent meeting for next proposal</p>
                    </div>
                  </div>
                </div>
                {/*notification end*/}
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* tasks */}
          <div className="agile-last-grids">
            <div className="col-md-4 agile-last-left">
              <div className="agile-last-grid">
                <div className="area-grids-heading">
                  <h3>Monthly</h3>
                </div>
                <div
                  id="graph7"
                  style={{
                    position: "relative",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <svg
                    height={342}
                    version="1.1"
                    width={322}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      top: "-0.0999755px",
                    }}
                  >
                    <desc
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                      Created with Raphaël 2.0.1
                    </desc>
                    <defs
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="19.175000190734863"
                      y="309.3999996185303"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        0
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M31.675000190734863,309.3999996185303H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="19.175000190734863"
                      y="238.2999997138977"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399993419647217"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M31.675000190734863,238.2999997138977H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="19.175000190734863"
                      y="167.19999980926514"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399999618530273"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        4
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M31.675000190734863,167.19999980926514H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="19.175000190734863"
                      y="96.09999990463257"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399998188018799"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        6
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M31.675000190734863,96.09999990463257H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="19.175000190734863"
                      y={25}
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399999618530273"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        8
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M31.675000190734863,25H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x={297}
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        04:00
                      </tspan>
                    </text>
                    <text
                      x="208.55833339691162"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        02:00
                      </tspan>
                    </text>
                    <text
                      x="120.11666679382324"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        00:00
                      </tspan>
                    </text>
                    <text
                      x="31.675000190734863"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        22:00
                      </tspan>
                    </text>
                    <path
                      fill="#a7b3bc"
                      stroke="none"
                      d="M31.675000190734863,96.09999990463257C53.78541684150696,131.64999985694885,98.00625014305115,220.52499973773956,120.11666679382324,238.2999997138977C142.22708344459534,256.07499969005585,186.44791674613953,264.9624996781349,208.55833339691162,238.2999997138977C230.66875004768372,211.6374997496605,274.8895833492279,78.32499992847443,297,25L297,309.3999996185303L31.675000190734863,309.3999996185303Z"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      fill="none"
                      stroke="#7a92a3"
                      d="M31.675000190734863,96.09999990463257C53.78541684150696,131.64999985694885,98.00625014305115,220.52499973773956,120.11666679382324,238.2999997138977C142.22708344459534,256.07499969005585,186.44791674613953,264.9624996781349,208.55833339691162,238.2999997138977C230.66875004768372,211.6374997496605,274.8895833492279,78.32499992847443,297,25"
                      strokeWidth={3}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="31.675000190734863"
                      cy="96.09999990463257"
                      r={4}
                      fill="#7a92a3"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="120.11666679382324"
                      cy="238.2999997138977"
                      r={4}
                      fill="#7a92a3"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="208.55833339691162"
                      cy="238.2999997138977"
                      r={4}
                      fill="#7a92a3"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx={297}
                      cy={25}
                      r={7}
                      fill="#7a92a3"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <path
                      fill="#2577b5"
                      stroke="none"
                      d="M31.675000190734863,202.74999976158142C53.78541684150696,211.6374997496605,98.00625014305115,224.9687497317791,120.11666679382324,238.2999997138977C142.22708344459534,251.6312496960163,186.44791674613953,309.3999996185303,208.55833339691162,309.3999996185303C230.66875004768372,300.5124996304512,274.8895833492279,202.74999976158142,297,167.19999980926514L297,309.3999996185303L31.675000190734863,309.3999996185303Z"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      fill="none"
                      stroke="#0b62a4"
                      d="M31.675000190734863,202.74999976158142C53.78541684150696,211.6374997496605,98.00625014305115,224.9687497317791,120.11666679382324,238.2999997138977C142.22708344459534,251.6312496960163,186.44791674613953,309.3999996185303,208.55833339691162,309.3999996185303C230.66875004768372,300.5124996304512,274.8895833492279,202.74999976158142,297,167.19999980926514"
                      strokeWidth={3}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="31.675000190734863"
                      cy="202.74999976158142"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="120.11666679382324"
                      cy="238.2999997138977"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="208.55833339691162"
                      cy="309.3999996185303"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx={297}
                      cy="167.19999980926514"
                      r={7}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                  </svg>
                  <div
                    className="morris-hover morris-default-style"
                    style={{ left: "189px", top: "82px" }}
                  >
                    <div className="morris-hover-row-label">
                      2013-03-31 04:00:00
                    </div>
                    <div
                      className="morris-hover-point"
                      style={{ color: "#0b62a4" }}
                    >
                      Y: 4
                    </div>
                    <div
                      className="morris-hover-point"
                      style={{ color: "#7A92A3" }}
                    >
                      Z: 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 agile-last-left agile-last-middle">
              <div className="agile-last-grid">
                <div className="area-grids-heading">
                  <h3>Daily</h3>
                </div>
                <div
                  id="graph8"
                  style={{
                    position: "relative",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <svg
                    height={342}
                    version="1.1"
                    width={322}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      left: "-0.125px",
                      top: "-0.0625px",
                    }}
                  >
                    <desc
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                      Created with Raphaël 2.0.1
                    </desc>
                    <defs
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="42.53750038146973"
                      y="270.5388084011903"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        0
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M55.03750038146973,270.5388084011903H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="42.53750038146973"
                      y="209.15410630089272"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.400004547657858"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        1,000
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M55.03750038146973,209.15410630089272H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="42.53750038146973"
                      y="147.76940420059515"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399991778414972"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2,000
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M55.03750038146973,147.76940420059515H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="42.53750038146973"
                      y="86.38470210029757"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399994267961148"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        3,000
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M55.03750038146973,86.38470210029757H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="42.53750038146973"
                      y={25}
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399999618530273"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        4,000
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M55.03750038146973,25H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="284.9018750190735"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-118.0147,418.2332)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-10
                      </tspan>
                    </text>
                    <text
                      x="260.70562505722046"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-130.1129,397.2787)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-15
                      </tspan>
                    </text>
                    <text
                      x="236.50937509536743"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-142.211,376.3241)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-16
                      </tspan>
                    </text>
                    <text
                      x="212.3131251335144"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-154.3091,355.3695)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-17
                      </tspan>
                    </text>
                    <text
                      x="188.11687517166138"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-166.4072,334.415)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-18
                      </tspan>
                    </text>
                    <text
                      x="163.92062520980835"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-178.5053,313.4604)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-19
                      </tspan>
                    </text>
                    <text
                      x="139.72437524795532"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-190.6035,292.5058)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-20
                      </tspan>
                    </text>
                    <text
                      x="115.5281252861023"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-202.7016,271.5513)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-29
                      </tspan>
                    </text>
                    <text
                      x="91.33187532424927"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-214.7997,250.5967)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-09-30
                      </tspan>
                    </text>
                    <text
                      x="67.13562536239624"
                      y="283.0388084011903"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(0.5,-0.866,0.866,0.5,-226.8978,229.6421)"
                    >
                      <tspan
                        dy="4.399971540533556"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        2016-10-01
                      </tspan>
                    </text>
                    <rect
                      x="58.062031626701355"
                      y="61.40112834547645"
                      width="7.573593735694885"
                      height="209.13768005571384"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="68.63562536239624"
                      y="230.0249050149939"
                      width="7.573593735694885"
                      height="40.513903386196404"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="82.25828158855438"
                      y="64.83867166309312"
                      width="7.573593735694885"
                      height="205.70013673809717"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="92.83187532424927"
                      y="231.92783078010314"
                      width="7.573593735694885"
                      height="38.61097762108716"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="106.45453155040741"
                      y="69.87221723531752"
                      width="7.573593735694885"
                      height="200.66659116587277"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="117.0281252861023"
                      y="232.6030625032064"
                      width="7.573593735694885"
                      height="37.93574589798391"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="130.65078151226044"
                      y="71.28406538362435"
                      width="7.573593735694885"
                      height="199.25474301756594"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="141.22437524795532"
                      y="229.9635203128936"
                      width="7.573593735694885"
                      height="40.5752880882967"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="154.84703147411346"
                      y="70.6088336605211"
                      width="7.573593735694885"
                      height="199.9299747406692"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="165.42062520980835"
                      y="229.5952121002918"
                      width="7.573593735694885"
                      height="40.94359630089849"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="179.0432814359665"
                      y="71.16129597942378"
                      width="7.573593735694885"
                      height="199.3775124217665"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="189.61687517166138"
                      y="232.05060018430373"
                      width="7.573593735694885"
                      height="38.48820821688656"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="203.23953139781952"
                      y="75.88791804114669"
                      width="7.573593735694885"
                      height="194.6508903600436"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="213.8131251335144"
                      y="230.0249050149939"
                      width="7.573593735694885"
                      height="40.513903386196404"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="227.43578135967255"
                      y="75.88791804114669"
                      width="7.573593735694885"
                      height="194.6508903600436"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="238.00937509536743"
                      y="229.04274978138915"
                      width="7.573593735694885"
                      height="41.49605861980115"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="251.63203132152557"
                      y="74.04637697813774"
                      width="7.573593735694885"
                      height="196.49243142305255"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="262.20562505722046"
                      y="230.27044382339508"
                      width="7.573593735694885"
                      height="40.26836457779521"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="275.8282812833786"
                      y="73.1869911487336"
                      width="7.573593735694885"
                      height="197.3518172524567"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#0b62a4"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                    <rect
                      x="286.4018750190735"
                      y="232.3575236948052"
                      width="7.573593735694885"
                      height="38.1812847063851"
                      r={0}
                      rx={0}
                      ry={0}
                      fill="#7a92a3"
                      stroke="none"
                      fillOpacity={1}
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        fillOpacity: 1,
                      }}
                    />
                  </svg>
                  <div
                    className="morris-hover morris-default-style"
                    style={{ left: "138.117px", top: "136px" }}
                  >
                    <div className="morris-hover-row-label">2016-09-18</div>
                    <div
                      className="morris-hover-point"
                      style={{ color: "#0b62a4" }}
                    >
                      Licensed: 3,248
                    </div>
                    <div
                      className="morris-hover-point"
                      style={{ color: "#7a92a3" }}
                    >
                      SORN: 627
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 agile-last-left agile-last-right">
              <div className="agile-last-grid">
                <div className="area-grids-heading">
                  <h3>Yearly</h3>
                </div>
                <div
                  id="graph9"
                  style={{
                    position: "relative",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <svg
                    height={342}
                    version="1.1"
                    width={322}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      left: "-0.25px",
                      top: "-0.0625px",
                    }}
                  >
                    <desc
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                      Created with Raphaël 2.0.1
                    </desc>
                    <defs
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="25.850000381469727"
                      y="309.3999996185303"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        0
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M38.35000038146973,309.3999996185303H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="25.850000381469727"
                      y="238.2999997138977"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399993419647217"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        10
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M38.35000038146973,238.2999997138977H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="25.850000381469727"
                      y="167.19999980926514"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399999618530273"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        20
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M38.35000038146973,167.19999980926514H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="25.850000381469727"
                      y="96.09999990463257"
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399998188018799"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        30
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M38.35000038146973,96.09999990463257H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x="25.850000381469727"
                      y={25}
                      textAnchor="end"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "end",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                    >
                      <tspan
                        dy="4.399999618530273"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        40
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#aaaaaa"
                      d="M38.35000038146973,25H297"
                      strokeWidth="0.5"
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <text
                      x={297}
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        X
                      </tspan>
                    </text>
                    <text
                      x="239.52222230699329"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        VIII
                      </tspan>
                    </text>
                    <text
                      x="182.04444461398654"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        VI
                      </tspan>
                    </text>
                    <text
                      x="124.56666692097983"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        IV
                      </tspan>
                    </text>
                    <text
                      x="67.08888922797308"
                      y="321.8999996185303"
                      textAnchor="middle"
                      font='10px "Arial"'
                      stroke="none"
                      fill="#888888"
                      style={{
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        textAnchor: "middle",
                        font: "12px sans-serif",
                      }}
                      fontSize="12px"
                      fontFamily="sans-serif"
                      fontWeight="normal"
                      transform="matrix(1,0,0,1,0,6.8)"
                    >
                      <tspan
                        dy="4.39998722076416"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        II
                      </tspan>
                    </text>
                    <path
                      fill="none"
                      stroke="#0b62a4"
                      d="M38.35000038146973,67.65999994277956C45.534722593095566,85.4349999189377,59.904167016347245,111.20874988436702,67.08888922797308,138.75999984741213C74.27361143959892,166.31124981045724,88.64305586285062,277.40499966144563,95.82777807447646,288.0699996471405C103.0125002861023,298.73499963283535,117.38194470935399,232.96749972105027,124.56666692097983,224.0799997329712C131.75138913260565,215.19249974489213,146.12083355585736,225.857499730587,153.30555576748318,216.96999974250792C160.490277979109,208.08249975442885,174.85972240236072,145.86999983787538,182.04444461398654,152.97999982833863C189.2291668256124,160.08999981880189,203.59861124886407,277.40499966144563,210.78333346048993,273.849999666214C217.96805567211578,270.29499967098235,232.33750009536743,130.76124985814096,239.52222230699329,124.5399998664856C246.70694451861914,118.31874987483025,261.0763889418708,217.85874974131585,268.26111115349664,224.0799997329712C275.4458333651225,230.30124972462656,289.81527778837415,186.7524997830391,297,174.3099997997284"
                      strokeWidth={3}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="38.35000038146973"
                      cy="67.65999994277956"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="67.08888922797308"
                      cy="138.75999984741213"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="95.82777807447646"
                      cy="288.0699996471405"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="124.56666692097983"
                      cy="224.0799997329712"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="153.30555576748318"
                      cy="216.96999974250792"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="182.04444461398654"
                      cy="152.97999982833863"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="210.78333346048993"
                      cy="273.849999666214"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="239.52222230699329"
                      cy="124.5399998664856"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx="268.26111115349664"
                      cy="224.0799997329712"
                      r={4}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                    <circle
                      cx={297}
                      cy="174.3099997997284"
                      r={7}
                      fill="#0b62a4"
                      stroke="#ffffff"
                      strokeWidth={1}
                      style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    />
                  </svg>
                  <div
                    className="morris-hover morris-default-style"
                    style={{ left: "253px", top: "107px" }}
                  >
                    <div className="morris-hover-row-label">X</div>
                    <div
                      className="morris-hover-point"
                      style={{ color: "#0b62a4" }}
                    >
                      value: 19
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* //tasks */}
          <div className="agileits-w3layouts-stats">
            <div className="col-md-4 stats-info widget">
              <div className="stats-info-agileits">
                <div className="stats-title">
                  <h4 className="title">Browser Stats</h4>
                </div>
                <div className="stats-body">
                  <ul className="list-unstyled">
                    <li>
                      GoogleChrome <span className="pull-right">85%</span>
                      <div className="progress progress-striped active progress-right">
                        <div className="bar green" style={{ width: "85%" }} />
                      </div>
                    </li>
                    <li>
                      Firefox <span className="pull-right">35%</span>
                      <div className="progress progress-striped active progress-right">
                        <div className="bar yellow" style={{ width: "35%" }} />
                      </div>
                    </li>
                    <li>
                      Internet Explorer <span className="pull-right">78%</span>
                      <div className="progress progress-striped active progress-right">
                        <div className="bar red" style={{ width: "78%" }} />
                      </div>
                    </li>
                    <li>
                      Safari <span className="pull-right">50%</span>
                      <div className="progress progress-striped active progress-right">
                        <div className="bar blue" style={{ width: "50%" }} />
                      </div>
                    </li>
                    <li>
                      Opera <span className="pull-right">80%</span>
                      <div className="progress progress-striped active progress-right">
                        <div
                          className="bar light-blue"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </li>
                    <li className="last">
                      Others <span className="pull-right">60%</span>
                      <div className="progress progress-striped active progress-right">
                        <div className="bar orange" style={{ width: "60%" }} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 stats-info stats-last widget-shadow">
              <div className="stats-last-agile">
                <table className="table stats-table ">
                  <thead>
                    <tr>
                      <th>S.NO</th>
                      <th>PRODUCT</th>
                      <th>STATUS</th>
                      <th>PROGRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="label label-success">In progress</span>
                      </td>
                      <td>
                        <h5>
                          85% <i className="fa fa-level-up" />
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Aliquam</td>
                      <td>
                        <span className="label label-warning">New</span>
                      </td>
                      <td>
                        <h5>
                          35% <i className="fa fa-level-up" />
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="label label-danger">Overdue</span>
                      </td>
                      <td>
                        <h5 className="down">
                          40% <i className="fa fa-level-down" />
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Aliquam</td>
                      <td>
                        <span className="label label-info">Out of stock</span>
                      </td>
                      <td>
                        <h5>
                          100% <i className="fa fa-level-up" />
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="label label-success">In progress</span>
                      </td>
                      <td>
                        <h5 className="down">
                          10% <i className="fa fa-level-down" />
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Aliquam</td>
                      <td>
                        <span className="label label-warning">New</span>
                      </td>
                      <td>
                        <h5>
                          38% <i className="fa fa-level-up" />
                        </h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </section>
        {/* footer */}
        <div className="footer">
          <div className="wthree-copyright">
            <p>
              © 2017 Visitors. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com">W3layouts</a>
            </p>
          </div>
        </div>
        {/* / footer */}
      </section>
      {/*main content end*/}
    </section>
  );
}
