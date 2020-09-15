import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "./components/Main/Main";
import Tech from "./components/Tech/Tech";

const Routes = ()=>(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/tech" component={Tech}/>
    </Switch>
);

export default Routes;