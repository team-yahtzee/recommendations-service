import React, {Component} from 'react';
import Slider from "react-slick";

var cards = [
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", 
  "title":"Burgundy Flemming", 
  "subtitle":"Advertising"},
 {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", 
  "title":"Nigel Nigel", 
  "subtitle":"Sound & Vision"},
 {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"}
];
class Article extends Component {
  constructor(props) {
    super(props)
  }
  render() {
   var image = this.props.data.image,
       title = this.props.data.title,
       subtitle = this.props.data.subtitle;
   return (
     <figure className="snip1584">
       <img src={image} />
       <figcaption>
         <h3>{title}</h3>
         <h5>{subtitle}</h5>
       </figcaption><a href="#"></a>
     </figure>
   )
 }
}

class News extends Component {
  constructor(props) {
    super(props)
  }
  render() {
   var data = this.props.data;
   var newsTemplate;
   var settings = {
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
   }
   if (data.length > 0) {
     newsTemplate = data.map(function(item, index) {
       return (
           <div key={index}>
             <Article data={item} />
           </div>
       )
     })
   } else {
     newsTemplate = <p>Please add some cards</p>
   }
   return (
     <div className='news'>
       <Slider {...settings}>{newsTemplate}</Slider>
       <strong className={'news__count ' + (data.length > 0 ? '':'none') }>
         Total cards: {data.length}
       </strong>
     </div>
   );
 }
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
   
    return (
      <div className='app'>
        <h3>Cards</h3>
        <News data={cards} />
      </div>
    );
  }

}




// import React, {Component} from 'react';
// import Slide from './Slide.jsx'
// import LeftArrow from './LeftArrow.jsx'
// import RightArrow from './RightArrow.jsx'


// export default class Slider extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       images: [
//         "https://airbnb-recommendations.s3.amazonaws.com/ezgif.com-webp-to-jpg.jpg",
//         'https://airbnb-recommendations.s3.amazonaws.com/7301e3ee-3a30-495a-a1d5-8e3aee6173db.jpg',
//         'https://airbnb-recommendations.s3.amazonaws.com/b11351c8-0345-45d6-a6d9-f0389e56f1c1.jpg',
//         'https://airbnb-recommendations.s3.amazonaws.com/e18fecfa-2510-4790-9cbf-4fdb127b4c16.jpg',
//         'https://airbnb-recommendations.s3.amazonaws.com/7301e3ee-3a30-495a-a1d5-8e3aee6173db.jpg' 
//       ],
//       currentIndex: 0,
//       translateValue: 0
//     }
//   }

//   goToPrevSlide() {
//     if(this.state.currentIndex === 0)
//       return;
    
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex - 1,
//       translateValue: prevState.translateValue + this.slideWidth()
//     }))
//   }

//   goToNextSlide() {
//     // Exiting the method early if we are at the end of the images array.
//     // We also want to reset currentIndex and translateValue, so we return
//     // to the first image in the array.
//     if(this.state.currentIndex === this.state.images.length-1)
//       return;

    
//     // This will not run if we met the if condition above
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1,
//       translateValue: prevState.translateValue + -(this.slideWidth())
//     }));
//   }

//   slideWidth() {
//      return document.querySelector('.slide').clientWidth
//   }

//   render() {
//     return (
//       <div className="slider">

//         <div className="slider-wrapper"
//           style={{
//             transform: `translateX(${this.state.translateValue}px)`,
//             transition: 'transform ease-out 0.45s'
//           }}>
//             {
//               this.state.images.map((image, i) => (
//                 <Slide key={i} image={image} />
//               ))
//             }
//         </div>

//         <LeftArrow
//          goToPrevSlide={this.goToPrevSlide.bind(this)}
//         />

//         <RightArrow
//          goToNextSlide={this.goToNextSlide.bind(this)}
//         />
//       </div>
//     );
//   }
// }

