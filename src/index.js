import React,{Component} from "react"
import ReactDOM from "react-dom"
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import $ from "jquery"
import less from "./index.less"
import Indexnav from "./indexNav/index.js"
import Home from "./home/index.js"
import Resume from "./resume/index.js"
import Works from "./works/index.js"
import Ui from "./ui/index.js"

ReactDOM.render(
	(
		<div>
			<HashRouter>
				<Indexnav>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/resume" component={Resume} />
					<Route path="/works" component={Works} />
					<Route path="/ui" component={Ui} />
				</Indexnav>
			</HashRouter>
		</div>
	),
	document.getElementById('main')
)