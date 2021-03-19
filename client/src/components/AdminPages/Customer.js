// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardImg,
//   CardHeader,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardActions,
//   CardSubtitle,
//   Button,
//   CardGroup,
//   Table,
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
// } from "reactstrap";
// import base_Url from "../../Api/Homeapi";
// // import SideBar from "../shared/SideBar/SideBar";
//  import "./AdminStyles.css";
//  var Customertableorders = [
//     {
//         TableNo : 1,
//         Orderstatus : "Food prepartion not storted"
//     },
//     {
//         TableNo : 2,
//         Orderstatus : "Food prepared"
//     },
// ]
// var Customerparcelorder = [
//     {
//         ParcelNo : 1,
//         Orderstatus : "Food prepartion not storted"
//     },
//     {
//         ParcelNo : 2,
//         Orderstatus : "Food prepared"
//     },
// ]
// const Example = (props) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);
  
//     const next = () => {
//       if (animating) return;
//       const nextIndex = activeIndex === Customertableorders.length - 1 ? 0 : activeIndex + 1;
//       setActiveIndex(nextIndex);
//     }
  
//     const previous = () => {
//       if (animating) return;
//       const nextIndex = activeIndex === 0 ? Customertableorders.length - 1 : activeIndex - 1;
//       setActiveIndex(nextIndex);
//     }
  
//     const goToIndex = (newIndex) => {
//       if (animating) return;
//       setActiveIndex(newIndex);
//     }
// // const Customer = () => {
// //   const [data, setData] = useState({});
// //   useEffect(() => {
// //     axios
// //       .get(`${base_Url}`)
// //       .then((response) => {
// //         //success call
// //         console.log(response);
// //         setData(response.data);
// //         // console.log( response.data )
// //         //  setTables(response.data.Tables.data)
// //       })
// //       .catch((error) => {
// //         //for error happen
// //         console.log(error);
// //       });
// //   }, []);
  
// const slides = Customertableorders.map((Customertableorder) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={Customertableorder.TableNo}
//       >
//          <Card body outline color="info"
//                     style={{
//                         maxwidth: '100%',
//                         height: "20rem",
//                         color: 'black',
//                         fontFamily: "Times New Roman, Times, serif",
//                         margin: '1rem',
//                         borderStyle: 'groove',
//                         borderWidth: '3px',
//                         borderRadius: '7px',
//                         boxShadow: '20px 20px 50px grey',
//                         backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`
//                     }}>
//                     <h5>
//                         <CardHeader style={{
//                             backgroundColor: "white", borderStyle: 'groove',
//                             borderWidth: '3px',
//                             borderRadius: '7px', padding: "3px", margin: "0px"
//                         }}>
//                             <CardTitle style={{fontSize: "40px"}}>{Customertableorder.TableNo}</CardTitle>
//                         </CardHeader>
//                     </h5>
//                     <CardBody>

//                         <hr></hr>
//                         <p style={{fontSize: "40px"}}>{Customertableorder.Orderstatus}</p>
//                     </CardBody>
//                 </Card>
//         {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
//       </CarouselItem>
//     );
//   });

//     return (
       
//         <div className="inner-container"style={{ marginRight: "7rem" }}>
//             <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//     >
//       <CarouselIndicators Customertableorders={Customertableorders} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>

      
//                 {/* <Card body outline color="info"
//                     style={{
//                         maxwidth: '100%',
//                         height: "20rem",
//                         color: 'black',
//                         fontFamily: "Times New Roman, Times, serif",
//                         margin: '1rem',
//                         borderStyle: 'groove',
//                         borderWidth: '3px',
//                         borderRadius: '7px',
//                         boxShadow: '20px 20px 50px grey',
//                         backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`
//                     }}>
//                     <h5>
//                         <CardHeader style={{
//                             backgroundColor: "white", borderStyle: 'groove',
//                             borderWidth: '3px',
//                             borderRadius: '7px', padding: "3px", margin: "0px"
//                         }}>
//                             <CardTitle style={{fontSize: "40px"}}>Table 1</CardTitle>
//                         </CardHeader>
//                     </h5>
//                     <CardBody>

//                         <hr></hr>
//                         <CardTitle>{data.Waiters}</CardTitle>
//                         <p style={{fontSize: "40px"}}></p>
//                     </CardBody>
//                 </Card> */}
            
//             {/* <CardGroup >
//                 <Card body outline color="info" style={{
//                     maxwidth: '100%',
//                     height: "20rem",
//                     color: 'black',
//                     fontFamily: "Times New Roman, Times, serif",
//                     margin: '1rem',
//                     borderStyle: 'groove',
//                     borderWidth: '3px',
//                     borderRadius: '7px',
//                     boxShadow: '20px 20px 50px grey',
//                     backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
//                 }}>
//                     <h5>
//                         <CardHeader style={{
//                             backgroundColor: "white", borderStyle: 'groove',
//                             borderWidth: '3px',
//                             borderRadius: '7px', padding: "3px", margin: "0px"
//                         }}>
//                             <CardTitle style={{fontSize: "40px"}}>Parcel 1</CardTitle>
//                         </CardHeader>
//                     </h5> 
//                     <CardBody>

//                         <hr></hr>
//                         <CardTitle>Hello</CardTitle>
//                         <p style={{fontSize: "40px"}}>Parcel ready</p>
//                     </CardBody>
//                 </Card>

//             </CardGroup>
//             <div className="inner-container"style={{ marginRight: "7rem" }}>
//       <CardGroup >
//                 <Card body outline color="info"
//                     style={{
//                         maxwidth: '100%',
//                         height: "20rem",
//                         color: 'black',
//                         fontFamily: "Times New Roman, Times, serif",
//                         margin: '1rem',
//                         borderStyle: 'groove',
//                         borderWidth: '3px',
//                         borderRadius: '7px',
//                         boxShadow: '20px 20px 50px grey',
//                         backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`
//                     }}>
//                     <h5>
//                         <CardHeader style={{
//                             backgroundColor: "white", borderStyle: 'groove',
//                             borderWidth: '3px',
//                             borderRadius: '7px', padding: "3px", margin: "0px"
//                         }}>
//                             <CardTitle style={{fontSize: "40px"}}>Table 1</CardTitle>
//                         </CardHeader>
//                     </h5>
//                     <CardBody>

//                         <hr></hr>
//                         <CardTitle>Hello</CardTitle>
//                         <p style={{fontSize: "40px"}}>Food prepartion not storted</p>
//                     </CardBody>
//                 </Card>
//             </CardGroup>
//             <CardGroup >
//                 <Card body outline color="info" style={{
//                     maxwidth: '100%',
//                     height: "20rem",
//                     color: 'black',
//                     fontFamily: "Times New Roman, Times, serif",
//                     margin: '1rem',
//                     borderStyle: 'groove',
//                     borderWidth: '3px',
//                     borderRadius: '7px',
//                     boxShadow: '20px 20px 50px grey',
//                     backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
//                 }}>
//                     <h5>
//                         <CardHeader style={{
//                             backgroundColor: "white", borderStyle: 'groove',
//                             borderWidth: '3px',
//                             borderRadius: '7px', padding: "3px", margin: "0px"
//                         }}>
//                             <CardTitle style={{fontSize: "40px"}}>Parcel 1</CardTitle>
//                         </CardHeader>
//                     </h5> 
//                     <CardBody>

//                         <hr></hr>
//                         <CardTitle>Hello</CardTitle>
//                         <p style={{fontSize: "40px"}}>Parcel ready</p>
//                     </CardBody>
//                 </Card>

//             </CardGroup>
//         </div>
//         </div>
//          */}
// </div>
//     )
// }

// export default Example;