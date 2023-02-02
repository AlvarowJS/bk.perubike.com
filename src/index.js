import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Image LightBox
import SimpleReactLightbox from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout from "./components/layouts/main";

//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import contact from "./components/pages/contact/Contact";
import error from "./components/pages/404/404";



//Initializations All Css
import './index.css';
import './index.scss';
import PackageDetails from "./components/pages/package/PackageDetails";
import Packages from "./components/pages/package/Packages";

//Default Warning Error Hide
// console.log = console.warn = console.error = () => {};

/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

function Root (){
   return(
      <BrowserRouter basename={"/"}>
         <Switch>
            <Route exact path='/' component={defaultLayout} />
            <Layout>
               <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
               <Route path={`${process.env.PUBLIC_URL}/package`} component={Packages} />
               <Route path={`${process.env.PUBLIC_URL}/package-details/:id`} component={PackageDetails} />
               <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
               <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />
            </Layout>
         </Switch>
      </BrowserRouter>
   );
}

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Root />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);

