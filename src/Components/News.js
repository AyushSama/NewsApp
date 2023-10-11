import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

    articles = [];
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading: false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=apple&from=2023-10-10&to=2023-10-10&sortBy=popularity&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=1&pageSize=30";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults 
        })
    }
    
    handlePrev = async() =>{
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-10-10&to=2023-10-10&sortBy=popularity&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page-1}&pageSize=30`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page-1 
        })
    }
    handleNext = async() =>{
        let max = Math.ceil(this.state.totalResults/30);
        if(this.state.page+1 <= max){
            let url = `https://newsapi.org/v2/everything?q=apple&from=2023-10-10&to=2023-10-10&sortBy=popularity&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page+1}&pageSize=30`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            articles : parsedData.articles,
            page : this.state.page+1 
        })
        }
        
    }

    

  render() {
    return (
      <div>
        <div className="container my-4">
          <h1>Get our Top Headlines Here</h1>
          <div className="row my-5">
            {this.state.articles.map((ele)=>{
                return (
                    <div className="col-md-4 my-2" key={ele.url}>
                        <NewsItem title={ele.title} description={ele.description} imageurl={ele.urlToImage} newsurl={ele.url}/>
                    </div>
                )
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-danger">Prev</button>
          <button type="button" onClick={this.handleNext} className="btn btn-success">Next</button>
          </div>
        </div>
      </div>
    );
  }
}
