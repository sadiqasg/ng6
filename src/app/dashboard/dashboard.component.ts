import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	LineChart = [];
	BarChart=[];

  constructor() { }

  ngOnInit() {
  	// line chart 
  	this.LineChart = new Chart('lineChart', {
  		type: 'line',
  		data: {
  			labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  			datasets: [{
  				label: 'daily sales',
  				data: [30, 20, 65, 70, 75, 12, 15, 20, 30, 50, 10, 19, 30, 20, 90],
  				fill: false,
  				lineTension: 0.2,
  				borderColor: 'green',
  				borderWidth: 1
  			}]
  		},
  		options: {
  			title: {
  				text: '',
  				display: false
  			}
  		},
  		scales: {
  			yAxes: [{
  				ticks: {
  					beginAtZero: true
  				}
  			}]
  		}
  	})
  
	// bar chart 
  	this.BarChart = new Chart('barChart', {
  		type: 'bar',
  		data: {
  			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  			datasets: [{
  				label: 'total sales',
  				data: [30, 20, 65, 70, 75, 12, 15, 20, 30, 50, 10, 19, 30, 20, 90],
  				fill: false,
  				lineTension: 0.2,
  				borderColor: 'rgba(0,255,0,0.5)',
  				borderWidth: 1
  			}]
  		},
  		options: {
  			title: {
  				text: '',
  				display: false
  			}
  		},
  		scales: {
  			xAxes: [{
  				stacked: true
  			}],
  			yAxes: [{
  				stacked: true,
  				ticks: {
  					beginAtZero: true
  				}
  			}]
  		}
  	})

  	// line chart2 
  	this.LineChart = new Chart('lineChart2', {
  		type: 'line',
  		data: {
  			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  			datasets: [{
  				label: 'expenses',
  				data: [30, 20, 65, 70, 75, 12, 15, 20, 30, 50, 10, 19, 30, 20, 90],
  				fill: false,
  				lineTension: 0.2,
  				borderColor: 'yellow',
  				borderWidth: 1
  			}]
  		},
  		options: {
  			title: {
  				text: '',
  				display: false
  			}
  		},
  		scales: {
  			yAxes: [{
  				ticks: {
  					beginAtZero: true
  				}
  			}]
  		}
  	})

  }

}
