import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImmoTemplate from './ImmoTemplate'
import NewsTemplate from './NewsTemplate'
import BrandTemplate from './BrandTemplate'
import NewsPage from './EventsTemplate'
import navigation from './components/navigation/navigation.json';

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '13e7e907fa42f88c85fe5667da70363835adb5f9b55b73f6b4660be661cc8356',
  host: "preview.contentful.com"
})
//MHQ0SGIhmCYo6q2gGY2Yg
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: null,
      type: null,
      loaded: false,
      loading: false,
      error: false,
      language: getAllUrlParams().lang
    };
  }

  componentDidMount(){
    var object = this;
    object.setState({
      loading: true,
      error: false
    });
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
         type: "property"
       });
      }
   })

   function dataOtherSpace(object){
     var client2 = contentful.createClient({
       space: 'vlb1ben6vtp9',
       accessToken: '5b4c238a847d0699990cd252f39514fe031befa50b1a5b0424e663a4ec392398',
        host: "preview.contentful.com"
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
            error: false,
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
             error: false,
             type: "news"
           });
       }
       else if(entries.items[0].sys.contentType.sys.id=="brand"){
         var news = entries.items[0];
         news.node=news.fields;
         var AllNews = {
           edges: [news]
         }

           object.setState({
             object: AllNews,
             loaded: true,
             error: false,
             type: "brand"
           });
       }
       else if(entries.items[0].sys.contentType.sys.id=="event"){
           client2.getEntries({'content_type': "event", include: 10, locale: object.state.language || "nl-BE"})
           .then(function (entries) {
             var news = entries.items;
             for(var i = 0;i<news.length;i++){
               news[i].node=news[i].fields
             }
             var AllNews = {
               edges: news
             }
             console.log("events:", AllNews)
               object.setState({
                 object: AllNews,
                 loaded: true,
                 error: false,
                 type: "event"
               });
           })
       }
    })
    .catch(function(error){
      console.log("Error");
      object.setState({
        object: null,
        loaded: true,
        error: true,
        type: null
      })
    }
    );
   }
  }

  changeLanguage(language){
    console.log(language)
  }

  getData(){

  }

  render() {
      if(this.state.type=="property"){
        return(<ImmoTemplate obj={this.state.object} />)
      }
      else if(this.state.type=="news"){
        return(<NewsTemplate obj={this.state.object} />)
      }
      else if(this.state.type=="brand"){
        return(<BrandTemplate obj={this.state.object} />)
      }
      else if(this.state.type=="event"){
        return(<NewsPage obj={this.state.object} />)
      }
      else if(this.state.loaded ){
        return(<h2 className="previewText">Data is loading</h2>)
      }
      else if(this.state.error){
        return(<h2 className="previewText">Er deed zich een technische fout voor. Gelieve een preview te openen vanuit Contentful</h2>)
      }
    return (
        <h2 className="previewText">Data is loading</h2>
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
