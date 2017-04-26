import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Tabs2, Tab2 } from "@blueprintjs/core";
import { toJS } from 'mobx'
import Layout from './layout/Layout'

@inject("store") @observer

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
	}
	componentDidMount() {
		
	}

	render() {
		const store = this.store
		return (
			<Layout>
		  {/*<!-- Page -->*/}
		  <div className="page">
		    <div className="page-content container-fluid">
		      <div className="row" data-plugin="matchHeight" data-by-row="true">
		        <div className="col-xl-3 col-md-6">
		          {/*<!-- Widget Linearea One-->*/}
		          <div className="card card-shadow" id="widgetLineareaOne">
		            <div className="card-block p-20 p-t-10">
		              <div className="clearfix">
		                <div className="grey-800 pull-xs-left p-y-10">
		                  <i className="icon md-account grey-600 font-size-24 vertical-align-bottom m-r-5"></i>                  User
		                </div>
		                <span className="pull-xs-right grey-700 font-size-30">1,253</span>
		              </div>
		              <div className="m-b-20 grey-500">
		                <i className="icon md-long-arrow-up green-500 font-size-16"></i> 15%
		                From this yesterday
		              </div>
		              <div className="ct-chart h-50"></div>
		            </div>
		          </div>
		          {/*<!-- End Widget Linearea One -->*/}
		        </div>
		        <div className="col-xl-3 col-md-6">
		          {/*<!-- Widget Linearea Two -->*/}
		          <div className="card card-shadow" id="widgetLineareaTwo">
		            <div className="card-block p-20 p-t-10">
		              <div className="clearfix">
		                <div className="grey-800 pull-xs-left p-y-10">
		                  <i className="icon md-flash grey-600 font-size-24 vertical-align-bottom m-r-5"></i>                  VISITS
		                </div>
		                <span className="pull-xs-right grey-700 font-size-30">2,425</span>
		              </div>
		              <div className="m-b-20 grey-500">
		                <i className="icon md-long-arrow-up green-500 font-size-16"></i> 34.2%
		                From this week
		              </div>
		              <div className="ct-chart h-50"></div>
		            </div>
		          </div>
		          {/*<!-- End Widget Linearea Two -->*/}
		        </div>
		        <div className="col-xl-3 col-md-6">
		          {/*<!-- Widget Linearea Three -->*/}
		          <div className="card card-shadow" id="widgetLineareaThree">
		            <div className="card-block p-20 p-t-10">
		              <div className="clearfix">
		                <div className="grey-800 pull-xs-left p-y-10">
		                  <i className="icon md-chart grey-600 font-size-24 vertical-align-bottom m-r-5"></i>                  Total Clicks
		                </div>
		                <span className="pull-xs-right grey-700 font-size-30">1,864</span>
		              </div>
		              <div className="m-b-20 grey-500">
		                <i className="icon md-long-arrow-down red-500 font-size-16"></i> 15%
		                From this yesterday
		              </div>
		              <div className="ct-chart h-50"></div>
		            </div>
		          </div>
		          {/*<!-- End Widget Linearea Three -->*/}
		        </div>
		        <div className="col-xl-3 col-md-6">
		          {/*<!-- Widget Linearea Four -->*/}
		          <div className="card card-shadow" id="widgetLineareaFour">
		            <div className="card-block p-20 p-t-10">
		              <div className="clearfix">
		                <div className="grey-800 pull-xs-left p-y-10">
		                  <i className="icon md-view-list grey-600 font-size-24 vertical-align-bottom m-r-5"></i>                  Items
		                </div>
		                <span className="pull-xs-right grey-700 font-size-30">845</span>
		              </div>
		              <div className="m-b-20 grey-500">
		                <i className="icon md-long-arrow-up green-500 font-size-16"></i> 18.4%
		                From this yesterday
		              </div>
		              <div className="ct-chart h-50"></div>
		            </div>
		          </div>
		          {/*<!-- End Widget Linearea Four -->*/}
		        </div>
		        <div className="clearfix"></div>
		        <div className="col-xxl-6 col-lg-6">
		          {/*<!-- Widget Jvmap -->*/}
		          <div className="card card-shadow" id="widgetCurrentChart">
		            <div className="p-30 white bg-green-500">
		              <div className="font-size-20 m-b-20">The current chart</div>
		              <div className="ct-chart h-200">
		              </div>
		            </div>
		            <div className="bg-white p-30 font-size-14">
		              <div className="counter counter-lg text-xs-left">
		                <div className="counter-label m-b-5">Approve rate are above average</div>
		                <div className="counter-number-group">
		                  <span className="counter-number">12,673</span>
		                  <span className="counter-number-related text-uppercase font-size-14">pcs</span>
		                </div>
		              </div>
		              <button type="button" className="btn-raised btn btn-info btn-floating">
		                <i className="icon md-plus" aria-hidden="true"></i>
		              </button>
		            </div>
		          </div>
		          {/*<!-- End Widget Jvmap -->*/}
		        </div>
		        <div className="col-xxl-6 col-lg-6">
		          {/*<!-- Widget Current Chart -->*/}
		          <div className="card card-shadow" id="widgetCurrentChart">
		            <div className="p-30 white bg-green-500">
		              <div className="font-size-20 m-b-20">The current chart</div>
		              <div className="ct-chart h-200">
		              </div>
		            </div>
		            <div className="bg-white p-30 font-size-14">
		              <div className="counter counter-lg text-xs-left">
		                <div className="counter-label m-b-5">Approve rate are above average</div>
		                <div className="counter-number-group">
		                  <span className="counter-number">12,673</span>
		                  <span className="counter-number-related text-uppercase font-size-14">pcs</span>
		                </div>
		              </div>
		              <button type="button" className="btn-raised btn btn-info btn-floating">
		                <i className="icon md-plus" aria-hidden="true"></i>
		              </button>
		            </div>
		          </div>
		          {/*<!-- End Widget Current Chart -->*/}
		        </div>
		        <div className="col-xl-4 col-lg-6">
		          {/*<!-- Widget User list -->*/}
		          <div className="card" id="widgetUserList">
		            <div className="card-header cover overlay">
		              <img className="cover-image h-200" src="../assets//examples/images/dashboard-header.jpg"
		              alt="..." />
		              <div className="overlay-panel vertical-align overlay-background">
		                <div className="vertical-align-middle">
		                  <a className="avatar avatar-100 pull-xs-left m-r-20" href="javascript:void(0)">
		                    <img src="../../global/portraits/5.jpg" alt="" />
		                  </a>
		                  <div className="pull-xs-left">
		                    <div className="font-size-20">Robin Ahrens</div>
		                    <p className="m-b-20 text-nowrap">
		                      <span className="text-break">machidesign@gmail</span>
		                    </p>
		                    <div className="text-nowrap font-size-18">
		                      <a href="" className="white m-r-10">
		                        <i className="icon bd-twitter"></i>
		                      </a>
		                      <a href="" className="white m-r-10">
		                        <i className="icon bd-facebook"></i>
		                      </a>
		                      <a href="" className="white">
		                        <i className="icon bd-dribbble"></i>
		                      </a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="card-block p-y-0">
		              <ul className="list-group list-group-full list-group-dividered m-b-0">
		                <li className="list-group-item">
		                  <div className="media">
		                    <div className="media-left">
		                      <a className="avatar avatar-lg" href="javascript:void(0)">
		                        <img className="img-responsive" src="../../global/portraits/1.jpg" alt="..." />
		                      </a>
		                    </div>
		                    <div className="media-body">
		                      <h4 className="media-heading">Herman Beck</h4>
		                      <small>San Francisco</small>
		                    </div>
		                  </div>
		                </li>
		                <li className="list-group-item">
		                  <div className="media">
		                    <div className="media-left">
		                      <a className="avatar avatar-lg" href="javascript:void(0)">
		                        <img className="img-responsive" src="../../global/portraits/2.jpg" alt="..." />
		                      </a>
		                    </div>
		                    <div className="media-body">
		                      <h4 className="media-heading">Mary Adams</h4>
		                      <small>Salt Lake City, Utah</small>
		                    </div>
		                  </div>
		                </li>
		                <li className="list-group-item">
		                  <div className="media">
		                    <div className="media-left">
		                      <a className="avatar avatar-lg" href="javascript:void(0)">
		                        <img className="img-responsive" src="../../global/portraits/3.jpg" alt="..." />
		                      </a>
		                    </div>
		                    <div className="media-body">
		                      <h4 className="media-heading">Caleb Richards</h4>
		                      <small>Basking Ridge, NJ</small>
		                    </div>
		                  </div>
		                </li>
		              </ul>
		              <button type="button" className="btn-raised btn btn-danger btn-floating">
		                <i className="icon md-plus" aria-hidden="true"></i>
		              </button>
		            </div>
		          </div>
		          {/*<!-- End Widget User list -->*/}
		        </div>
		        <div className="col-xl-4 col-lg-6">
		          {/*<!-- Widget Chat -->*/}
		          <div className="card card-shadow" id="chat">
		            <div className="card-header bg-white p-x-0">
		              <a className="pull-xs-left" href="javascript:void(0)">
		                <i className="icon md-chevron-left" aria-hidden="true"></i>
		              </a>
		              <div className="text-xs-right">
		                Conversation with
		                <span className="hidden-xs-down">June Lane</span>
		                <a className="avatar m-l-10" data-toggle="tooltip" href="#" data-placement="right"
		                title="June Lane">
		                  <img src="../../global/portraits/4.jpg" alt="..." />
		                </a>
		              </div>
		            </div>
		            <div className="card-block">
		              <div className="chats">
		                <div className="chat chat-left">
		                  <div className="chat-avatar">
		                    <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title="">
		                      <img src="../../global/portraits/5.jpg" alt="Edward Fletcher" />
		                    </a>
		                  </div>
		                  <div className="chat-body">
		                    <div className="chat-content" data-toggle="tooltip" title="11:37:08 am">
		                      <p>Good morning, sir.</p>
		                      <p>What can I do for you?</p>
		                    </div>
		                  </div>
		                </div>
		                <div className="chat">
		                  <div className="chat-avatar">
		                    <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title="">
		                      <img src="../../global/portraits/4.jpg" alt="June Lane"/>
		                    </a>
		                  </div>
		                  <div className="chat-body">
		                    <div className="chat-content" data-toggle="tooltip" title="11:39:57 am">
		                      <p>Well, I am just looking around.</p>
		                    </div>
		                  </div>
		                </div>
		                <div className="chat chat-left">
		                  <div className="chat-avatar">
		                    <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title="">
		                      <img src="../../global/portraits/5.jpg" alt="Edward Fletcher" />
		                    </a>
		                  </div>
		                  <div className="chat-body">
		                    <div className="chat-content" data-toggle="tooltip" title="11:40:10 am">
		                      <p>If necessary, please ask me.</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="card-footer bg-white">
		              <form>
		                <div className="input-group form-material">
		                  <span className="input-group-btn">
		                    <a href="javascript: void(0)" className="btn btn-pure btn-default icon md-camera"></a>
		                  </span>
		                  <input className="form-control" type="text" placeholder="Type message here ..." />
		                  <span className="input-group-btn">
		                    <button className="btn btn-pure btn-default icon md-mail-send" type="button"></button>
		                  </span>
		                </div>
		              </form>
		            </div>
		          </div>
		          {/*<!-- End Widget Chat -->*/}
		        </div>
		        <div className="col-xl-4 col-lg-6">
		          {/*<!-- Widget Info -->*/}
		          <div className="card card-shadow">
		            <div className="card-header cover overlay">
		              <div className="cover-background h-200" style={{backgroundImage: "url('../../global/photos/placeholder.png')"}}></div>
		            </div>
		            <div className="card-block p-x-30 p-y-20" style={{height:"calc(100% - 250px)"}}>
		              <div className="m-b-10" style={{marginTop: "-70px"}}>
		                <a className="avatar avatar-100 bg-white img-bordered" href="javascript:void(0)">
		                  <img src="../../global/portraits/2.jpg" alt="" />
		                </a>
		              </div>
		              <div className="m-b-20">
		                <div className="font-size-20">Caleb Richards</div>
		                <div className="font-size-14 grey-500">
		                  <span>2 hours ago</span> |
		                  <span>Comments 20</span>
		                </div>
		              </div>
		              <p>
		                Lorem ipsum dolLorem ip sum dolor sit amet, consectetur adipiscing elit. Integer
		                nec odio. Praesent libero.or sit amet, consectetur adipiscing elit.
		                Integer nec odio. Praesent libero.
		              </p>
		            </div>
		          </div>
		          {/*<!-- End Widget Info -->*/}
		        </div>
		        <div className="clearfix"></div>
		        <div className="col-xxl-5 col-lg-6">
		          {/*<!-- Panel Projects -->*/}
		          <div className="panel" id="projects">
		            <div className="panel-heading">
		              <h3 className="panel-title">Projects</h3>
		            </div>
		            <div className="table-responsive">
		              <table className="table table-striped">
		                <thead>
		                  <tr>
		                    <td>Projects</td>
		                    <td>Completed</td>
		                    <td>Date</td>
		                    <td>Actions</td>
		                  </tr>
		                </thead>
		                <tbody>
		                  <tr>
		                    <td>The sun climbing plan</td>
		                    <td>
		                      <span data-plugin="peityPie" data-skin="red">7/10</span>
		                    </td>
		                    <td>Jan 1, 2017</td>
		                    <td>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Edit">
		                        <i className="icon md-wrench" aria-hidden="true"></i>
		                      </button>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Delete">
		                        <i className="icon md-close" aria-hidden="true"></i>
		                      </button>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>Lunar probe project</td>
		                    <td>
		                      <span data-plugin="peityPie" data-skin="blue">3/10</span>
		                    </td>
		                    <td>Feb 12, 2017</td>
		                    <td>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Edit">
		                        <i className="icon md-wrench" aria-hidden="true"></i>
		                      </button>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Delete">
		                        <i className="icon md-close" aria-hidden="true"></i>
		                      </button>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>Dream successful plan</td>
		                    <td>
		                      <span data-plugin="peityPie" data-skin="green">9/10</span>
		                    </td>
		                    <td>Apr 9, 2017</td>
		                    <td>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Edit">
		                        <i className="icon md-wrench" aria-hidden="true"></i>
		                      </button>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Delete">
		                        <i className="icon md-close" aria-hidden="true"></i>
		                      </button>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>Office automatization</td>
		                    <td>
		                      <span data-plugin="peityPie" data-skin="orange">5/10</span>
		                    </td>
		                    <td>May 15, 2017</td>
		                    <td>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Edit">
		                        <i className="icon md-wrench" aria-hidden="true"></i>
		                      </button>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Delete">
		                        <i className="icon md-close" aria-hidden="true"></i>
		                      </button>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>Open strategy</td>
		                    <td>
		                      <span data-plugin="peityPie" data-skin="brown">2/10</span>
		                    </td>
		                    <td>Jun 2, 2017</td>
		                    <td>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Edit">
		                        <i className="icon md-wrench" aria-hidden="true"></i>
		                      </button>
		                      <button type="button" className="btn btn-sm btn-icon btn-pure btn-default" data-toggle="tooltip"
		                      data-original-title="Delete">
		                        <i className="icon md-close" aria-hidden="true"></i>
		                      </button>
		                    </td>
		                  </tr>
		                </tbody>
		              </table>
		            </div>
		          </div>
		          {/*<!-- End Panel Projects -->*/}
		        </div>
		        <div className="col-xxl-7 col-lg-6">
		          {/*<!-- Panel Projects Status -->*/}
		          <div className="panel" id="projects-status">
		            <div className="panel-heading">
		              <h3 className="panel-title">
		                Projects Status
		                <span className="tag tag-pill tag-info">5</span>
		              </h3>
		            </div>
		            <div className="table-responsive">
		              <table className="table table-striped">
		                <thead>
		                  <tr>
		                    <td>ID</td>
		                    <td>Project</td>
		                    <td>Status</td>
		                    <td className="text-left">Progress</td>
		                  </tr>
		                </thead>
		                <tbody>
		                  <tr>
		                    <td>619</td>
		                    <td>The sun climbing plan</td>
		                    <td>
		                      <span className="tag tag-primary">Developing</span>
		                    </td>
		                    <td>
		                      <span data-plugin="peityLine">5,3,2,-1,-3,-2,2,3,5,2</span>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>620</td>
		                    <td>Lunar probe project</td>
		                    <td>
		                      <span className="tag tag-warning">Design</span>
		                    </td>
		                    <td>
		                      <span data-plugin="peityLine">1,-1,0,2,3,1,-1,1,4,2</span>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>621</td>
		                    <td>Dream successful plan</td>
		                    <td>
		                      <span className="tag tag-info">Testing</span>
		                    </td>
		                    <td>
		                      <span data-plugin="peityLine">2,3,-1,-3,-1,0,2,4,5,3</span>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>622</td>
		                    <td>Office automatization</td>
		                    <td>
		                      <span className="tag tag-danger">Canceled</span>
		                    </td>
		                    <td>
		                      <span data-plugin="peityLine">1,-2,0,2,4,5,3,2,4,2</span>
		                    </td>
		                  </tr>
		                  <tr>
		                    <td>623</td>
		                    <td>Open strategy</td>
		                    <td>
		                      <span className="tag tag-default">Reply waiting</span>
		                    </td>
		                    <td>
		                      <span data-plugin="peityLine">4,2,-1,-3,-2,1,3,5,2,4</span>
		                    </td>
		                  </tr>
		                </tbody>
		              </table>
		            </div>
		          </div>
		          {/*<!-- End Panel Projects Stats -->*/}
		        </div>
		      </div>
		    </div>
		  </div>
		  {/*<!-- End Page -->*/}
		</Layout>
		)
	}

}