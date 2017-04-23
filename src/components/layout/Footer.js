/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react'

export default class Footer extends React.Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="site-footer-legal">© 2017 <a href="http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202">Remark</a></div>
        <div className="site-footer-right">
          Crafted with <i className="red-600 icon md-favorite"></i> by <a href="http://themeforest.net/user/amazingSurge">amazingSurge</a>
        </div>
        {/*<!-- Core  -->*/}
        <script src="./global/vendor/babel-external-helpers/babel-external-helpers.js"></script>
        <script src="./global/vendor/jquery/jquery.js"></script>
        <script src="./global/vendor/tether/tether.js"></script>
        <script src="./global/vendor/bootstrap/bootstrap.js"></script>
        <script src="./global/vendor/animsition/animsition.js"></script>
        <script src="./global/vendor/mousewheel/jquery.mousewheel.js"></script>
        <script src="./global/vendor/asscrollbar/jquery-asScrollbar.js"></script>
        <script src="./global/vendor/asscrollable/jquery-asScrollable.js"></script>
        <script src="./global/vendor/waves/waves.js"></script>
        {/*<!-- Plugins -->*/}
        <script src="./global/vendor/switchery/switchery.min.js"></script>
        <script src="./global/vendor/intro-js/intro.js"></script>
        <script src="./global/vendor/screenfull/screenfull.js"></script>
        <script src="./global/vendor/slidepanel/jquery-slidePanel.js"></script>
        <script src="./global/vendor/chartist/chartist.min.js"></script>
        <script src="./global/vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.min.js"></script>
        <script src="./global/vendor/jvectormap/jquery-jvectormap.min.js"></script>
        <script src="./global/vendor/jvectormap/maps/jquery-jvectormap-world-mill-en.js"></script>
        <script src="./global/vendor/matchheight/jquery.matchHeight-min.js"></script>
        <script src="./global/vendor/peity/jquery.peity.min.js"></script>
        {/*<!-- Scripts -->*/}
        <script src="./global/js/State.js"></script>
        <script src="./global/js/Component.js"></script>
        <script src="./global/js/Plugin.js"></script>
        <script src="./global/js/Base.js"></script>
        <script src="./global/js/Config.js"></script>
        <script src="../assets/js/Section/Menubar.js"></script>
        <script src="../assets/js/Section/Sidebar.js"></script>
        <script src="../assets/js/Section/PageAside.js"></script>
        <script src="../assets/js/Plugin/menu.js"></script>
        {/*<!-- Config -->*/}
        <script src="./global/js/config/colors.js"></script>
        <script src="./assets/js/config/tour.js"></script>
        <script>
        Config.set('assets', '../assets');
        </script>
        {/*<!-- Page -->*/}
        <script src="../assets/js/Site.js"></script>
        <script src="./global/js/Plugin/asscrollable.js"></script>
        <script src="./global/js/Plugin/slidepanel.js"></script>
        <script src="./global/js/Plugin/switchery.js"></script>
        <script src="./global/js/Plugin/matchheight.js"></script>
        <script src="./global/js/Plugin/jvectormap.js"></script>
        <script src="./global/js/Plugin/peity.js"></script>
        <script src="./assets/examples/js/dashboard/v1.js"></script>
        <link rel="stylesheet" media="screen" href="//handsontable.com/dist/handsontable.full.css" />
      </footer>
    );
  }
}

