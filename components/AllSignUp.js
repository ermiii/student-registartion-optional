// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { ButtonToolbar, Button,  } from "react-bootstrap";

// const Styles = styled.div`
// .btn:link,
// .btn:visited{
//   text-decoration: none;
//   text-transform:uppercase;
//   position:relative;
//   top:0;
//   left:0;
//   padding:20px 40px;
//   border-radius:100px;
//   display:inline-block;
//   transition: all .5s;
// }

// .btn-white{
//   background:#fff;
//   color:#000;
// }

// .btn:hover{
//    box-shadow:0px 10px 10px rgba(0,0,0,0.2);
//    transform : translateY(-3px);
// }

// .btn:active{
//   box-shadow:0px 5px 10px rgba(0,0,0,0.2)
//   transform:translateY(-1px);
// }

// .btn-bottom-animation-1{
//   animation:comeFromBottom 1s ease-out .8s;
// }

// .btn::after{

//   text-decoration: none;
//   text-transform:uppercase;
//   position:absolute;
//   width:100%;
//   height:100%;
//   top:0;
//   left:0;
//   border-radius:100px;
//   display:inline-block;
//   z-index:-1;
//   transition: all .5s;
// }



// .btn-animation-1:hover::after {
//     transform: scaleX(1.4) scaleY(1.6);
//     opacity: 0;
// }

// @keyframes comeFromBottom{
//   0%{
//     opacity:0;
//     transform:translateY(40px);
//   } 
//   100%{
//     opacity:1;
//     transform:translateY(0);
//   }
// }


//  `;

// export class AllsignUp extends Component {
//   render() {
//     return (
//       <Styles>
//         <ButtonToolbar>
//           <NavLink className="nav" to="/SignUpAdmins">
//             <Button
//               className='btn btn btn-white btn-animation-1 pull-bottom"'
//               variant="primary"
//               size="lg"
//             >
//               Admins
//             </Button>
//           </NavLink>
//           <NavLink className="nav" to="/SignUpStudent">
//             <Button
//               className='btn btn btn-white btn-animation-1"'
//               variant="secondary"
//               size="lg"
//             >
//               Student
//             </Button>
//           </NavLink>
//           <NavLink className="nav" to="/SignUpMentors">
//             {" "}
//             <Button
//               className='btn btn btn-white btn-animation-1"'
//               variant="secondary"
//               size="lg"
//             >
//               Mentors
//             </Button>
//           </NavLink>
//         </ButtonToolbar>
//       </Styles>
//     );
//   }
// }

// export default AllsignUp;
