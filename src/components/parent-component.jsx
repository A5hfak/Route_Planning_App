// import React, { useState } from "react";
// import { Navbars, Sidebar } from "./index";

// const SidebarComponent = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
// const [message, setMessage] = useState("");

// useEffect(() => {
//   // Fetch the data from the Spring Boot backend API
//   fetch("http://localhost:8080/test") // Replace with your Spring Boot API URL
//     .then((response) => response.text())
//     .then((data) => setMessage(data))
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

// <div className="App">
//   <header className="App-header">
//     <h1>React Frontendasdfasd </h1>
//     <p>{message ? message : 'Loading...'}</p> {/* Display the fetched message */}
//   </header>
// </div>

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar />
//       <div
//         style={{
//           flexGrow: 1,
//           padding: "20px",
//           transition: "margin-left 0.3s ease",
//           marginLeft: sidebarOpen ? "250px" : "70px",
//           marginTop: "-20px",
//         }}
//       >
//         <Navbars />
//         <div style={{ paddingTop: "70px" }}>
//           <h1>Main Content Area</h1>
//           <p>
//             This is your main content area. The sidebar can be toggled using the
//             burger icon.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
