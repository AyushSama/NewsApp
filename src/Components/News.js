import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    articles = [];
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading: true,
            page : 1
        }
    }
    //https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=1&pageSize=9
    async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page}&pageSize=9`;
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(40);
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults ,
            loading : false
        })
        this.props.setProgress(100);
    }  

    fetchMoreData = async()=>{
        this.setState({page : this.state.page +1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20313ae838524d839e7bf6cc7845b2ea&page=${this.state.page}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parsedData.articles),
            totalResults : parsedData.totalResults ,
            loading : false
        })
    }

  render() {
    return (
      <>
          <h1 className="text-center my-3">Nooze - Get our Top Headlines Here</h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.totalResults>=this.state.articles.length}
            loader={<Spinner/>}
            >
              <div className="container"><div className="row my-5">
              { this.state.articles.map((ele)=>{
                  return (
                      <div className="col-md-4 my-2" key={ele.url}>
                          <NewsItem title={ele.title} description={ele.description} imageurl={ele.urlToImage} newsurl={ele.url} author={ele.author} time={ele.publishedAt} source = {ele.source.name}/>
                      </div>
                  )
              })} 
            </div> </div>
          </InfiniteScroll>
      </>
    );
  }
}
