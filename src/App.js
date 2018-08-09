import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImmoTemplate from './ImmoTemplate'
import NewsTemplate from './NewsTemplate'
import navigation from './components/navigation/navigation.json';

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '00776a927469f43f7646dedff5221ba86305d737741b46084ac5072e4c26acdc'
})
//MHQ0SGIhmCYo6q2gGY2Yg
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: null,
      type: null,
      loaded: false,
      error: null,
      language: getAllUrlParams().lang
    };
  }

  componentDidMount(){
    var object = this;
    console.log("component mounted", getAllUrlParams().id)
    client.getEntries({'sys.id': getAllUrlParams().id, include: 10, locale: object.state.language || "nl-BE"})
    .then(function (entries) {
       // log the file url of any linked assets on field `image`
       if(entries.items.length==0){
         //get data from other space
         console.log("data other space")
         dataOtherSpace(object);
         return;
       }
       console.log(entries)
       if(entries.items[0].sys.contentType.sys.id=="property"){
       var pand = entries.items[0];
       pand.node=pand.fields;
       var panden = {
         edges: [pand]
       }

         object.setState({
           object: panden,
           loaded: true,
           type: "property"
         });
      }
   })

   function dataOtherSpace(object){
     var client2 = contentful.createClient({
       space: 'vlb1ben6vtp9',

       accessToken: '6800fe70f7440fabd2a9a7427c01e3408de658699174fb89e92a32946374f6ef'
     })

     client2.getEntries({'sys.id': getAllUrlParams().id, include: 10, locale: object.state.language || "nl-BE"})
     .then(function (entries) {
        // log the file url of any linked assets on field `image`
        if(entries.items.length==0){
          //get data from other space
          return;
        }
        console.log(entries)
        if(entries.items[0].sys.contentType.sys.id=="property"){
        var pand = entries.items[0];
        pand.node=pand.fields;
        var panden = {
          edges: [pand]
        }

          object.setState({
            object: panden,
            loaded: true,
            type: "property"
          });
       }
       else if(entries.items[0].sys.contentType.sys.id=="news"){
         var news = entries.items[0];
         news.node=news.fields;
         var AllNews = {
           edges: [news]
         }

           object.setState({
             object: AllNews,
             loaded: true,
             type: "news"
           });
       }
    })
   }
  }

  changeLanguage(language){
    console.log(language)
  }

  getData(){

  }

  render() {
      if(!this.state.object){
        return(
        <div className="loading">Loading or error</div>
        )
      }
      if(this.state.type=="property"){
        return(<ImmoTemplate obj={this.state.object} />)
      }
      if(this.state.type=="news"){
        return(<NewsTemplate obj={this.state.object} />)
      }
    return (

      <div className="App">



      </div>
    );
  }
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue;

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

export default App;
