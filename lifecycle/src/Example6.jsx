// import React, { useEffect, useRef, useState } from "react";

// const Example6 = () => {
//   const [boxes, setBoxes] = useState([]);
//   const [start, setStart] = useState(false);
//   const boxIndex = useRef(0);
//   useEffect(() => {
//     // create 50 array elements
//     // let newArray = [];
//     // for (let i = 0; i < 50; i++) {
//     //   newArray.push({ bgColor: "" });
//     // }
//     // setBoxes(newArray);

//     setBoxes(
//       Array.from({ length: 50 }).map((e) => {
//         bgColor: "";
//       })
//     );
//   }, []);
//   useEffect(() => {
//     let interval;
//     if (start) {
//       interval = setInterval(() => {
//         let newArray = boxes.map((ele, index) => {
//           if (index === boxIndex.current) {
//             ele.bgColor = "red";
//           }
//           return ele;
//         });
//         setBoxes(newArray);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     // cleanup function
//     return () => {
//       clearInterval(interval);
//     };
//   }, [start]);
//   return (
//     <>
//       <div
//         className="buttons"
//         style={{ textAlign: "center", margin: "20px 0px 40px 0px" }}
//       >
//         <button onClick={() => setStart(true)} className="btn btn-success">
//           Start
//         </button>
//         <button
//           onClick={() => setStart(false)}
//           className="btn btn-danger"
//           style={{ margin: "0px 25px" }}
//         >
//           Stop
//         </button>
//         <button className="btn btn-warning">Reset</button>
//       </div>
//       <div
//         className="boxes"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(10, auto)",
//           margin: "20px 10px",
//           gap: "20px 10px",
//         }}
//       >
//         {boxes.map((ele, index) => {
//           return (
//             <div
//               key={index}
//               style={{
//                 height: "80px",
//                 width: "80px",
//                 borderRadius: "5px",
//                 boxShadow: "0 0 5px black",
//                 backgroundColor: ele?.bgColor,
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Example6;

import React, { useEffect, useRef, useState } from "react";

const Example6 = () => {
  const [boxes, setBoxes] = useState([]);
  const [start, setStart] = useState(false);
  const boxIndex = useRef(0);

  useEffect(() => {
    setBoxes(
      Array.from({ length: 50 }).map((e, index) => {
        return { bgColor: "" };
      })
    );
  }, []);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        if (boxIndex.current == 50) {
          boxIndex.current = 0;
          let newArray = boxes.map((ele) => {
            return { gColor: "" };
          });
          setBoxes([...newArray]);
        }
        let newArray = boxes.map((ele, index) => {
          if (index === boxIndex.current) {
            ele.bgColor = "red";
          }
          return ele;
        });
        setBoxes(newArray);
        boxIndex.current = boxIndex.current + 1;
      }, 100);
    } else {
      clearInterval(interval);
    }
    // cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <>
      <div
        className="buttons"
        style={{ textAlign: "center", margin: "20px 0px 40px 0px" }}
      >
        <button onClick={() => setStart(true)} className="btn btn-success">
          Start
        </button>
        <button
          onClick={() => setStart(false)}
          className="btn btn-danger"
          style={{ margin: "0px 25px" }}
        >
          Stop
        </button>
        <button className="btn btn-warning">Reset</button>
      </div>
      <div
        className="boxes"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, auto)",
          margin: "20px 10px",
          gap: "20px 10px",
        }}
      >
        {boxes.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "5px",
                boxShadow: "0 0 5px black",
                backgroundColor: ele?.bgColor,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Example6;
