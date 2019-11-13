
import './App.css';

import React, { Component } from 'react'

const API = 'https://api.github.com/users';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: 'twitter', 
       name: '',
       avatar:'',
       location: '',
       repositories:'',
       followers: '',
       following: '',
       homeUrl:'',
       notFound:''

    }
  }
  fetchProfile(username){
    let url = API+'/'+ username;
    fetch(url)
    .then((res)=> res.json())
    .then((data) => {
      this.setState({
        username:data.login,
        name:data.name,
        avatar:data.avatar_url,
        location:data.location,
        repos:data.public_repos,
        followers:data.followers,
        following:data.following,
        homeUrl:data.html_url,
        notFound:data.message,
      })
    })
    .catch((error)=> console.log('Oops! The shop is closed'))
  }
  
  componentDidMount(){
    this.fetchProfile(this.state.username);

  }

  render() {
    return (
      <div>
      <section id="card">
        <SearchProfile fetchProfile ={this.fetchProfile.bind(this)}/>
        <Profile data={this.state}/>
      </section>
      </div>
    )
  }
}


class SearchProfile extends Component {
  render() {
    return (
      <div className="search--box">
        <form onSubmit={this.handelForm.bind(this)}>
          <label>
            <input type="search" ref={(ref) => this.search=ref}
             placeholder="Please type username + Enter type romal10"/>

          </label>
        </form>
      </div>
    )
  }
  handelForm(e){
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchProfile(username);
    this.search.value = '';


  }
}


export class Profile extends Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    if (data.notFound==='Not Found') {

   
    return (
      <div className="notfound">
        <h2>Oops!</h2>
        <p>Sorry This page is not Found</p>
      </div>

    ) 
  }else

    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href = {data.homeUrl} target="_blank" title={data.name }> 
           <img src={data.avatar}/></a>
           <h2>
             <a href ={data.homeUrl || 'I Live in NYC'} target="_blank">{data.name}</a>
           </h2>
           <h3>{data.location || 'I Live in NYC'}</h3>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number of Followers"><i>{data.followers}</i><span>Followers</span></a>
            </li>
            <li>
              <a href={repositories} target="_blank" title="Number of Repository"><i>{data.repos}</i><span>Repositories</span></a>
            </li>
            <li>
              <a href={following} target="_blank" title="Number of Following"><i>{data.following}</i><span>Following</span></a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}


export {SearchProfile}
