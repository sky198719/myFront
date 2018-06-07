import React,{Component} from "react"
import ReactDom from "react-dom"
import $ from "jquery"
import pic1 from "./img/pic1.jpg"
import pic2 from "./img/pic2.jpg"
import pic3 from "./img/pic3.jpg"
import pic4 from "./img/pic4.jpg"
import pic5 from "./img/pic5.jpg"

export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			"data" : [
				{
					"pic" : pic1,
					"title" : "",
					"text" : "基于node环境下的前端自动化构建",
					"color" : "#93fff9"
				},
				{
					"pic" : pic2,
					"title" : "",
					"text" : "react、angularjs1.x",
					"color" : "#ff93f6"
				},
				{
					"pic" : pic3,
					"title" : "",
					"text" : "grunt、gulp、webpack4",
					"color" : "#93ffa2"
				},
				{
					"pic" : pic4,
					"title" : "",
					"text" : "css、less",
					"color" : "#ff6a7c"
				},
				{
					"pic" : pic5,
					"title" : "",
					"text" : "html、html5",
					"color" : "#fcfb9e"
				},
			]
		}
	}
	componentDidMount(){
		$('#home').find('li').hover(function(){
			$(this).find('div').stop().animate({'left':'0%'},200)
		},function(){
			$(this).find('div').stop().animate({'left':'-100%'},200)
		})
	}
	render(){
		const that = this
		let dataArray = []
		this.state.data.forEach(function(item,index){
			dataArray.push(<li key={index} style={{background:item.color}}><p><span><img src={item.pic} /></span></p><div>{item.text}</div></li>)
		})
		return(
			<div className="mainCon" id="home">
				<ul>
					{dataArray}
				</ul>
			</div>
		)
	}
}