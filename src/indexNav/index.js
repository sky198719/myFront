import React,{Component} from "react"
import ReactDom from 'react-dom'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import $ from "jquery"

export default class Indexnav extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data: [
				{
					"title" : "首页",
					"url" : "/home",
					"id" : "home"
				},
				{
					"title" : "个人履历",
					"url" : "/resume",
					"id" : "resume"
				},
				{
					"title" : "作品展示",
					"url" : "/works",
					"id" : "works"
				},
				{
					"title" : "UI组件库",
					"url" : "/ui",
					"id" : "ui"
				}
			],
			currentPage: '',
		}
	}
	componentDidMount(){
		const time = 1500
		let count = 0
		$.each($('.indexNav').find('li'),function(){
			count += 0.1;
			$(this).animate({'margin-left':'15px'},count * time)
		})
		this.setState({
			currentPage : $('.mainCon').attr('id')
		})
	}
	handleClick(page){
		this.setState({
			currentPage : page
		})
	}
	render() {
		const that = this
		const dataArray = []
		let style = ''
		this.state.data.forEach(function(item,index){
			style = that.state.currentPage == item.id ? 'current' : ''
			dataArray.push(<li key={index} className={style} onClick={() => that.handleClick(item.id)}><Link to={item.url} replace>{item.title}</Link></li>)
		})
		return(
			<div>
				<ul className="indexNav">
					{dataArray}
				</ul>
				{this.props.children}
			</div>
		)
	}

}