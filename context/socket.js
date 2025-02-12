// import { createContext,useEffect,useState,useContext } from "react";   
// import {io} from "socket.io-client"
// const SocketContext = createContext(null);
// export const useSocket = ()=>{
//     const socket = useContext(SocketContext)
//     return socket
// }
// export const SocketProvider = (props)=>{
//     const {children} = props;
//     const[socket,setSocket] = useState(null);
//     useEffect(()=>{
//         const connection = io();
//         setSocket(connection);
//     },[]);
//     socket?.on('connect_error',async(err)=>{
//         console.log("Error establishing socket",err)
//         await fetch('/api/socket')
//     })
//     return(
//         <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//     )
// }

import { createContext, useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    setSocket(connection);

    connection.on('connect_error', async (err) => {
      console.log("Error establishing socket", err);
      await fetch('/api/socket');
    });

    return () => {
      connection.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
