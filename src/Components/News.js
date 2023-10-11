import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page}&pageSize=9`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults ,
            loading : false
        })
    }
    
    handlePrev = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page-1}&pageSize=9`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page-1 ,
            loading : false
        })
    }
    handleNext = async() =>{
        let max = Math.ceil(this.state.totalResults/9);
        if(this.state.page+1 <= max){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page+1}&pageSize=9`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            articles : parsedData.articles,
            page : this.state.page+1 ,
            loading : false
        })
        }
        
    }

    

  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-center">Nooze - Get our Top Headlines Here</h1>
          {this.state.loading && <Spinner/>}
          <div className="row my-5">
            { this.state.articles.map((ele)=>{
                return (
                    <div className="col-md-4 my-2" key={ele.url}>
                        <NewsItem title={ele.title} description={ele.description} imageurl={ele.urlToImage} newsurl={ele.url} author={ele.author} time={ele.publishedAt} source = {ele.source.name}/>
                    </div>
                )
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-danger">Prev</button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/9)} onClick={this.handleNext} className="btn btn-success">Next</button>
          </div>
        </div>
      </div>
    );
  }
}
