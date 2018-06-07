import React,{Component} from "react"
import ReactDom from "react-dom"

export default class Resume extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{
					"title" : "Pchome电脑之家",
					"text" : "负责业务：Pchome电脑之家，Kdslife论坛，爱玩论坛，Pchome产品库",
					"info1" : "工作职责：前端部门管理，it垂直产业线产品团队管理，人员招聘，绩效评估考核，代码coding，汇报对象技术总监",
					"info2" : "技术选型：PC：html+jquery",
					"color" : "#ff6e5f"
				},
				{
					"title" : "家家户户",
					"text" : "负责业务：家家户户官网，建材商城，家具商城，家家户户各区域分站，客服系统",
					"info1" : "主要职责：前端部门管理，人员招聘，绩效评估开合，核心代码coding，前端部署策略coding，汇报对象技术总监",
					"info2" : "技术选型：PC：angularjs1.x+jquery+grunt/html+jquery+grunt",
					"color" : "#a3ff5f"
				},
				{
					"title" : "久游网络",
					"text" : "负责业务：劲舞团游戏商城，劲舞团游戏内挂，劲舞团YY合作平台对接，劲舞团官网",
					"info1" : "主要职责：劲舞团内部技术部门管理，项目进度把控，人员招聘，前端架构代码coding，前端部署策略coding，人员资源协调，汇报对象项目组副总裁",
					"info2" : "技术选型：PC官网商城：html+jquery、PC活动：react+webpack",
					"color" : "#fffd5f"
				},
				{
					"title" : "新新贷",
					"text" : "负责业务：新新贷官网，新新贷理财产品，新新贷银行存管，进件平台",
					"info1" : "主要职责：新项目技术选型，打包策略coding，ui组件coding，前端规范",
					"info2" : "技术选型：PC：require+gulp+angularjs/require+gulp+html+jquery，H5：react+webpack",
					"color" : "#5fdbff"
				}
			]
		}
	}
	render(){
		const that = this
		let dataArray = []
		this.state.data.forEach(function(item,index){
			dataArray.push(<li key={index} style={{background:item.color}}><dl><dt>{item.title}</dt><dd>{item.text}</dd><dd>{item.info1}</dd><dd>{item.info2}</dd></dl></li>)
		})
		return(
			<div className="mainCon" id="resume">
				<ul>
					{dataArray}
				</ul>
			</div>
		)
	}
}