// // // // import { useEffect, useState } from "react";
// // // // import { useSocket } from "@/context/socket";
// // // // import usePeer from "@/hooks/usePeer";
// // // // import useMediaStream from "@/hooks/useMediaStream";
// // // // import usePlayer from "@/hooks/usePlayer";
// // // // import Player from "@/component/Player";
// // // // import styles from '@/styles/room.module.css'
// // // // import { useRouter } from "next/router";
// // // // import Bottom from "@/component/Bottom";
// // // // import { cloneDeep } from "lodash";
// // // // import CopySection from "@/component/CopySection";
// // // // const Room = ()=>{
// // // //     const socket = useSocket()
// // // //     const {roomId} = useRouter().query;
// // // //   const {peer,myId} = usePeer()
// // // //   const {stream} = useMediaStream()
// // // //   const {players,setPlayers,playerHighlighted,nonHighlightedPlayers,toggleAudio,toggleVideo,leaveRoom}= usePlayer(myId,roomId,peer)
// // // //   const[users,setUsers] = useState([])
// // // //   useEffect(()=>{
// // // //     if(!socket ||!peer ||!stream)return;
// // // //     const handleUserConnected = (newUser) =>{
// // // //       console.log(`user connected in room with userId ${newUser}`)

// // // //       const call = peer.call(newUser,stream)
// // // //       call.on('stream',(incomingStream)=>{
// // // //         console.log(`incoming stream from ${newUser}`)
// // // //         setPlayers((prev)=>({
// // // //           ...prev,
// // // //           [newUser]:{
// // // //             url:incomingStream,
// // // //             muted:true,
// // // //             playing:true
// // // //           }
// // // //         }))
// // // //         setUsers((prev)=>({
// // // //           ...prev,
// // // //           [newUser]:call
// // // //         }))
// // // //       })
// // // //     }
// // // //     socket.on('user-connected',handleUserConnected)
// // // //     return ()=>{
// // // //       socket.off('user-connected',handleUserConnected)
// // // //     }
// // // //   },[socket,peer,stream,setPlayers])

// // // //   useEffect(() => {
// // // //     if (!socket) return;
// // // //     const handleToggleAudio = (userId) => {
// // // //       console.log(`user with id ${userId} toggled audio`);
// // // //       setPlayers((prev) => {
// // // //         const copy = cloneDeep(prev);
// // // //         copy[userId].muted = !copy[userId].muted;
// // // //         return { ...copy };
// // // //       });
// // // //     };

// // // //     const handleToggleVideo = (userId) => {
// // // //       console.log(`user with id ${userId} toggled video`);
// // // //       setPlayers((prev) => {
// // // //         const copy = cloneDeep(prev);
// // // //         copy[userId].playing = !copy[userId].playing;
// // // //         return { ...copy };
// // // //       });
// // // //     };

// // // //     const handleUserLeave = (userId) => {
// // // //       console.log(`user ${userId} is leaving the room`);
// // // //       users[userId]?.close()
// // // //       const playersCopy = cloneDeep(players);
// // // //       delete playersCopy[userId];
// // // //       setPlayers(playersCopy);
// // // //     }
// // // //     socket.on("user-toggle-audio", handleToggleAudio);
// // // //     socket.on("user-toggle-video", handleToggleVideo);
// // // //     socket.on("user-leave", handleUserLeave);
// // // //     return () => {
// // // //       socket.off("user-toggle-audio", handleToggleAudio);
// // // //       socket.off("user-toggle-video", handleToggleVideo);
// // // //       socket.off("user-leave", handleUserLeave);
// // // //     };
// // // //   }, [players, setPlayers, socket]);

// // // //   useEffect(()=>{
// // // //     if(!peer || !stream) return
// // // //     peer.on('call',(call)=>{
// // // //       const{peer:callerId} = call;
// // // //       call.answer(stream)
// // // //       call.on('stream',(incomingStream)=>{
// // // //         console.log(`incoming stream from ${callerId}`)
// // // //         setPlayers((prev)=>({
// // // //           ...prev,
// // // //           [callerId]:{
// // // //             url:stream,
// // // //             muted:true,
// // // //             playing:true
// // // //           }
// // // //         }))
// // // //         setUsers((prev)=>({
// // // //           ...prev,
// // // //           [callerId]:call
// // // //         }))
// // // //       })
// // // //     })
// // // //   },[peer,stream,setPlayers])

// // // //   useEffect(() => {
// // // //     if (!stream || !myId) return;
// // // //     console.log(`setting my stream ${myId}`);
// // // //     setPlayers((prev) => ({
// // // //       ...prev,
// // // //       [myId]: {
// // // //         url: stream,
// // // //         muted: true,
// // // //         playing: true,
// // // //       },
// // // //     }));
// // // //   }, [myId, setPlayers, stream]);
// // // //   return(<>
// // // //   <div className={styles.activePlayerContainer}>
// // // //     {playerHighlighted && (<Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing}
// // // //     isActive
// // // //     />)}
// // // //   </div>
// // // //   <div className={styles.inActivePlayerContainer}>
// // // //   {Object.keys(nonHighlightedPlayers).map((playerId)=>{
// // // //       const {url,muted,playing} = nonHighlightedPlayers[playerId]
// // // //       return <Player key={playerId}url={stream} muted={muted} playing={playing} isActive={false} />
// // // //     })}
// // // //   </div>
// // // //     <CopySection roomId={roomId} />
// // // //     <Bottom muted={playerHighlighted?.muted} playing={playerHighlighted?.playing} toggleAudio={toggleAudio} toggleVideo={toggleVideo}
// // // //     leaveRoom={leaveRoom}/>
    
// // // //     </>)
// // // // }
// // // // export default Room;



// // // import { useEffect, useState } from "react";
// // // import { useSocket } from "@/context/socket";
// // // import usePeer from "@/hooks/usePeer";
// // // import useMediaStream from "@/hooks/useMediaStream";
// // // import usePlayer from "@/hooks/usePlayer";
// // // import Player from "@/component/Player";
// // // import styles from '@/styles/room.module.css';
// // // import { useRouter } from "next/router";
// // // import Bottom from "@/component/Bottom";
// // // import { cloneDeep } from "lodash";
// // // import CopySection from "@/component/CopySection";

// // // const Room = () => {
// // //   const socket = useSocket();
// // //   const { roomId } = useRouter().query;
// // //   const { peer, myId } = usePeer();
// // //   const { stream, screenStream, getScreenStream } = useMediaStream();
// // //   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
// // //   const [users, setUsers] = useState([]);

// // //   useEffect(() => {
// // //     if (!socket || !peer || !stream) return;

// // //     const handleUserConnected = (newUser) => {
// // //       console.log(`user connected in room with userId ${newUser}`);

// // //       const call = peer.call(newUser, stream);
// // //       call.on('stream', (incomingStream) => {
// // //         console.log(`incoming stream from ${newUser}`);
// // //         setPlayers((prev) => ({
// // //           ...prev,
// // //           [newUser]: {
// // //             url: incomingStream,
// // //             muted: true,
// // //             playing: true,
// // //           },
// // //         }));
// // //         setUsers((prev) => ({
// // //           ...prev,
// // //           [newUser]: call,
// // //         }));
// // //       });
// // //     };

// // //     socket.on('user-connected', handleUserConnected);
// // //     return () => {
// // //       socket.off('user-connected', handleUserConnected);
// // //     };
// // //   }, [socket, peer, stream, setPlayers]);

// // //   useEffect(() => {
// // //     if (!socket) return;

// // //     const handleToggleAudio = (userId) => {
// // //       console.log(`user with id ${userId} toggled audio`);
// // //       setPlayers((prev) => {
// // //         const copy = cloneDeep(prev);
// // //         copy[userId].muted = !copy[userId].muted;
// // //         return { ...copy };
// // //       });
// // //     };

// // //     const handleToggleVideo = (userId) => {
// // //       console.log(`user with id ${userId} toggled video`);
// // //       setPlayers((prev) => {
// // //         const copy = cloneDeep(prev);
// // //         copy[userId].playing = !copy[userId].playing;
// // //         return { ...copy };
// // //       });
// // //     };

// // //     const handleUserLeave = (userId) => {
// // //       console.log(`user ${userId} is leaving the room`);
// // //       users[userId]?.close();
// // //       const playersCopy = cloneDeep(players);
// // //       delete playersCopy[userId];
// // //       setPlayers(playersCopy);
// // //     };

// // //     socket.on("user-toggle-audio", handleToggleAudio);
// // //     socket.on("user-toggle-video", handleToggleVideo);
// // //     socket.on("user-leave", handleUserLeave);
// // //     return () => {
// // //       socket.off("user-toggle-audio", handleToggleAudio);
// // //       socket.off("user-toggle-video", handleToggleVideo);
// // //       socket.off("user-leave", handleUserLeave);
// // //     };
// // //   }, [players, setPlayers, socket]);

// // //   useEffect(() => {
// // //     if (!peer || !stream) return;
// // //     peer.on('call', (call) => {
// // //       const { peer: callerId } = call;
// // //       call.answer(stream);
// // //       call.on('stream', (incomingStream) => {
// // //         console.log(`incoming stream from ${callerId}`);
// // //         setPlayers((prev) => ({
// // //           ...prev,
// // //           [callerId]: {
// // //             url: incomingStream,
// // //             muted: true,
// // //             playing: true,
// // //           },
// // //         }));
// // //         setUsers((prev) => ({
// // //           ...prev,
// // //           [callerId]: call,
// // //         }));
// // //       });
// // //     });
// // //   }, [peer, stream, setPlayers]);

// // //   useEffect(() => {
// // //     if (!stream || !myId) return;
// // //     console.log(`setting my stream ${myId}`);
// // //     setPlayers((prev) => ({
// // //       ...prev,
// // //       [myId]: {
// // //         url: stream,
// // //         muted: true,
// // //         playing: true,
// // //       },
// // //     }));
// // //   }, [myId, setPlayers, stream]);

// // //   const startScreenShare = async () => {
// // //     const screenStream = await getScreenStream();
// // //     if (screenStream) {
// // //       console.log('Started screen sharing');
// // //       setPlayers((prev) => ({
// // //         ...prev,
// // //         [myId]: {
// // //           url: screenStream,
// // //           muted: true,
// // //           playing: true,
// // //         },
// // //       }));
// // //       peer.call(roomId, screenStream);
// // //     }
// // //   };

// // //   const stopScreenShare = () => {
// // //     if (screenStream) {
// // //       screenStream.getTracks().forEach((track) => track.stop());
// // //       console.log('Stopped screen sharing');
// // //       setPlayers((prev) => ({
// // //         ...prev,
// // //         [myId]: {
// // //           url: stream,
// // //           muted: true,
// // //           playing: true,
// // //         },
// // //       }));
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <div className={styles.activePlayerContainer}>
// // //         {playerHighlighted && (
// // //           <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
// // //         )}
// // //       </div>
// // //       <div className={styles.inActivePlayerContainer}>
// // //         {Object.keys(nonHighlightedPlayers).map((playerId) => {
// // //           const { url, muted, playing } = nonHighlightedPlayers[playerId];
// // //           return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
// // //         })}
// // //       </div>
// // //       <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
// // //         Start Screen Share
// // //       </button>
// // //       <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
// // //         Stop Screen Share
// // //       </button>
// // //       <CopySection roomId={roomId} />
// // //       <Bottom
// // //         muted={playerHighlighted?.muted}
// // //         playing={playerHighlighted?.playing}
// // //         toggleAudio={toggleAudio}
// // //         toggleVideo={toggleVideo}
// // //         leaveRoom={leaveRoom}
// // //       />
// // //     </>
// // //   );
// // // };

// // // export default Room;


// // import { useEffect, useState } from "react";
// // import { useSocket } from "@/context/socket";
// // import usePeer from "@/hooks/usePeer";
// // import useMediaStream from "@/hooks/useMediaStream";
// // import usePlayer from "@/hooks/usePlayer";
// // import Player from "@/component/Player";
// // import styles from '@/styles/room.module.css';
// // import { useRouter } from "next/router";
// // import Bottom from "@/component/Bottom";
// // import { cloneDeep } from "lodash";
// // import CopySection from "@/component/CopySection";

// // const Room = () => {
// //   const socket = useSocket();
// //   const { roomId } = useRouter().query;
// //   const { peer, myId } = usePeer();
// //   const { stream, screenStream, getScreenStream } = useMediaStream();
// //   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     if (!socket || !peer || !stream) return;

// //     const handleUserConnected = (newUser) => {
// //       console.log(`user connected in room with userId ${newUser}`);

// //       const call = peer.call(newUser, stream);
// //       call.on('stream', (incomingStream) => {
// //         console.log(`incoming stream from ${newUser}`);
// //         setPlayers((prev) => ({
// //           ...prev,
// //           [newUser]: {
// //             url: incomingStream,
// //             muted: true,
// //             playing: true,
// //           },
// //         }));
// //         setUsers((prev) => ({
// //           ...prev,
// //           [newUser]: call,
// //         }));
// //       });
// //     };

// //     socket.on('user-connected', handleUserConnected);
// //     return () => {
// //       socket.off('user-connected', handleUserConnected);
// //     };
// //   }, [socket, peer, stream, setPlayers]);

// //   useEffect(() => {
// //     if (!socket) return;

// //     const handleToggleAudio = (userId) => {
// //       console.log(`user with id ${userId} toggled audio`);
// //       setPlayers((prev) => {
// //         const copy = cloneDeep(prev);
// //         copy[userId].muted = !copy[userId].muted;
// //         return { ...copy };
// //       });
// //     };

// //     const handleToggleVideo = (userId) => {
// //       console.log(`user with id ${userId} toggled video`);
// //       setPlayers((prev) => {
// //         const copy = cloneDeep(prev);
// //         copy[userId].playing = !copy[userId].playing;
// //         return { ...copy };
// //       });
// //     };

// //     const handleUserLeave = (userId) => {
// //       console.log(`user ${userId} is leaving the room`);
// //       users[userId]?.close();
// //       const playersCopy = cloneDeep(players);
// //       delete playersCopy[userId];
// //       setPlayers(playersCopy);
// //     };

// //     socket.on("user-toggle-audio", handleToggleAudio);
// //     socket.on("user-toggle-video", handleToggleVideo);
// //     socket.on("user-leave", handleUserLeave);
// //     return () => {
// //       socket.off("user-toggle-audio", handleToggleAudio);
// //       socket.off("user-toggle-video", handleToggleVideo);
// //       socket.off("user-leave", handleUserLeave);
// //     };
// //   }, [players, setPlayers, socket]);

// //   useEffect(() => {
// //     if (!peer || !stream) return;
// //     peer.on('call', (call) => {
// //       const { peer: callerId } = call;
// //       call.answer(stream);
// //       call.on('stream', (incomingStream) => {
// //         console.log(`incoming stream from ${callerId}`);
// //         setPlayers((prev) => ({
// //           ...prev,
// //           [callerId]: {
// //             url: incomingStream,
// //             muted: true,
// //             playing: true,
// //           },
// //         }));
// //         setUsers((prev) => ({
// //           ...prev,
// //           [callerId]: call,
// //         }));
// //       });
// //     });
// //   }, [peer, stream, setPlayers]);

// //   useEffect(() => {
// //     if (!stream || !myId) return;
// //     console.log(`setting my stream ${myId}`);
// //     setPlayers((prev) => ({
// //       ...prev,
// //       [myId]: {
// //         url: stream,
// //         muted: true,
// //         playing: true,
// //       },
// //     }));
// //   }, [myId, setPlayers, stream]);

// //   const startScreenShare = async () => {
// //     const screenStream = await getScreenStream();
// //     if (screenStream) {
// //       console.log('Started screen sharing');
// //       setPlayers((prev) => ({
// //         ...prev,
// //         [myId]: {
// //           url: screenStream,
// //           muted: true,
// //           playing: true,
// //         },
// //       }));
// //       peer.call(roomId, screenStream);
// //     }
// //   };

// //   const stopScreenShare = () => {
// //     if (screenStream) {
// //       screenStream.getTracks().forEach((track) => track.stop());
// //       console.log('Stopped screen sharing');
// //       setPlayers((prev) => ({
// //         ...prev,
// //         [myId]: {
// //           url: stream,
// //           muted: true,
// //           playing: true,
// //         },
// //       }));
// //     }
// //   };

// //   return (
// //     <>
// //       <div className={styles.activePlayerContainer}>
// //         {playerHighlighted && (
// //           <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
// //         )}
// //       </div>
// //       <div className={styles.inActivePlayerContainer}>
// //         {Object.keys(nonHighlightedPlayers).map((playerId) => {
// //           const { url, muted, playing } = nonHighlightedPlayers[playerId];
// //           return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
// //         })}
// //       </div>
// //       <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
// //         Start Screen Share
// //       </button>
// //       <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
// //         Stop Screen Share
// //       </button>
// //       <CopySection roomId={roomId} />
// //       <Bottom
// //         muted={playerHighlighted?.muted}
// //         playing={playerHighlighted?.playing}
// //         toggleAudio={toggleAudio}
// //         toggleVideo={toggleVideo}
// //         leaveRoom={leaveRoom}
// //       />
// //     </>
// //   );
// // };

// // export default Room;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { cloneDeep } from "lodash";
// import { useSocket } from "@/context/socket";
// import usePeer from "@/hooks/usePeer";
// import useMediaStream from "@/hooks/useMediaStream";
// import usePlayer from "@/hooks/usePlayer";
// import Player from "@/component/Player";
// import Bottom from "@/component/Bottom";
// import CopySection from "@/component/CopySection";
// import Chat from "@/component/Chat";
// import styles from "@/styles/room.module.css";

// const Room = () => {
//   const socket = useSocket();
//   const { roomId } = useRouter().query;
//   const { peer, myId } = usePeer();
//   const { stream, screenStream, getScreenStream } = useMediaStream();
//   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!socket || !peer || !stream) return;

//     const handleUserConnected = (newUser) => {
//       console.log(`User connected in room with userId ${newUser}`);
//       const call = peer.call(newUser, stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${newUser}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [newUser]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [newUser]: call,
//         }));
//       });
//     };

//     socket.on('user-connected', handleUserConnected);
//     return () => {
//       socket.off('user-connected', handleUserConnected);
//     };
//   }, [socket, peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleToggleAudio = (userId) => {
//       console.log(`User with id ${userId} toggled audio`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].muted = !copy[userId].muted;
//         return { ...copy };
//       });
//     };

//     const handleToggleVideo = (userId) => {
//       console.log(`User with id ${userId} toggled video`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].playing = !copy[userId].playing;
//         return { ...copy };
//       });
//     };

//     const handleUserLeave = (userId) => {
//       console.log(`User ${userId} is leaving the room`);
//       users[userId]?.close();
//       const playersCopy = cloneDeep(players);
//       delete playersCopy[userId];
//       setPlayers(playersCopy);
//     };

//     socket.on("user-toggle-audio", handleToggleAudio);
//     socket.on("user-toggle-video", handleToggleVideo);
//     socket.on("user-leave", handleUserLeave);
//     return () => {
//       socket.off("user-toggle-audio", handleToggleAudio);
//       socket.off("user-toggle-video", handleToggleVideo);
//       socket.off("user-leave", handleUserLeave);
//     };
//   }, [players, setPlayers, socket]);

//   useEffect(() => {
//     if (!peer || !stream) return;
//     peer.on('call', (call) => {
//       const { peer: callerId } = call;
//       call.answer(stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${callerId}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [callerId]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [callerId]: call,
//         }));
//       });
//     });
//   }, [peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!stream || !myId) return;
//     console.log(`Setting my stream ${myId}`);
//     setPlayers((prev) => ({
//       ...prev,
//       [myId]: {
//         url: stream,
//         muted: true,
//         playing: true,
//       },
//     }));
//   }, [myId, setPlayers, stream]);

//   const startScreenShare = async () => {
//     const screenStream = await getScreenStream();
//     if (screenStream) {
//       console.log('Started screen sharing');
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: screenStream,
//           muted: true,
//           playing: true,
//         },
//       }));
//       peer.call(roomId, screenStream);
//     }
//   };

//   const stopScreenShare = () => {
//     if (screenStream) {
//       screenStream.getTracks().forEach((track) => track.stop());
//       console.log('Stopped screen sharing');
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: stream,
//           muted: true,
//           playing: true,
//         },
//       }));
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-1">
//         <div className="flex-1">
//           <div className={styles.activePlayerContainer}>
//             {playerHighlighted && (
//               <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
//             )}
//           </div>
//           <div className={styles.inActivePlayerContainer}>
//             {Object.keys(nonHighlightedPlayers).map((playerId) => {
//               const { url, muted, playing } = nonHighlightedPlayers[playerId];
//               return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
//             })}
//           </div>
//         </div>
//         <div className="w-1/3 border-l border-gray-300">
//           <Chat roomId={roomId} />
//         </div>
//       </div>
//       <div className="flex justify-center mt-2">
//         <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
//           Start Screen Share
//         </button>
//         <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
//           Stop Screen Share
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Room;


// pages/room.js

// pages/room.js

// pages/room.js

// pages/room.js

// pages/room.js

// pages/room.js

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { cloneDeep } from "lodash";
// import { useSocket } from "@/context/socket";
// import usePeer from "@/hooks/usePeer";
// import useMediaStream from "@/hooks/useMediaStream";
// import usePlayer from "@/hooks/usePlayer";
// import Player from "@/component/Player";
// import Bottom from "@/component/Bottom";
// import CopySection from "@/component/CopySection";
// import Chat from "@/component/Chat";
// import styles from "@/styles/room.module.css";

// const Room = () => {
//   const socket = useSocket();
//   const { roomId } = useRouter().query;
//   const { peer, myId } = usePeer();
//   const { stream, screenStream, getScreenStream } = useMediaStream();
//   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
//   const [users, setUsers] = useState([]);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [isScreenSharing, setIsScreenSharing] = useState(false);

//   useEffect(() => {
//     if (!socket || !peer || !stream) return;

//     socket.emit('join-room', roomId);

//     const handleUserConnected = (newUser) => {
//       console.log(`User connected in room with userId ${newUser}`);
//       const call = peer.call(newUser, stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${newUser}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [newUser]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [newUser]: call,
//         }));
//       });
//     };

//     socket.on('user-connected', handleUserConnected);
//     return () => {
//       socket.off('user-connected', handleUserConnected);
//     };
//   }, [socket, peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleToggleAudio = (userId) => {
//       console.log(`User with id ${userId} toggled audio`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].muted = !copy[userId].muted;
//         return { ...copy };
//       });
//     };

//     const handleToggleVideo = (userId) => {
//       console.log(`User with id ${userId} toggled video`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].playing = !copy[userId].playing;
//         return { ...copy };
//       });
//     };

//     const handleUserLeave = (userId) => {
//       console.log(`User ${userId} is leaving the room`);
//       users[userId]?.close();
//       const playersCopy = cloneDeep(players);
//       delete playersCopy[userId];
//       setPlayers(playersCopy);
//     };

//     socket.on("user-toggle-audio", handleToggleAudio);
//     socket.on("user-toggle-video", handleToggleVideo);
//     socket.on("user-leave", handleUserLeave);
//     return () => {
//       socket.off("user-toggle-audio", handleToggleAudio);
//       socket.off("user-toggle-video", handleToggleVideo);
//       socket.off("user-leave", handleUserLeave);
//     };
//   }, [players, setPlayers, socket]);

//   useEffect(() => {
//     if (!peer || !stream) return;
//     peer.on('call', (call) => {
//       const { peer: callerId } = call;
//       call.answer(stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${callerId}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [callerId]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [callerId]: call,
//         }));
//       });
//     });
//   }, [peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!stream || !myId) return;
//     console.log(`Setting my stream ${myId}`);
//     setPlayers((prev) => ({
//       ...prev,
//       [myId]: {
//         url: stream,
//         muted: true,
//         playing: true,
//       },
//     }));
//   }, [myId, setPlayers, stream]);

//   const startScreenShare = async () => {
//     const screenStream = await getScreenStream();
//     if (screenStream) {
//       console.log('Started screen sharing');
//       setIsScreenSharing(true);
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: screenStream,
//           muted: true,
//           playing: true,
//         },
//       }));
//       // Notify others about screen sharing
//       Object.keys(users).forEach((userId) => {
//         const call = peer.call(userId, screenStream);
//         call.on('stream', (incomingStream) => {
//           setPlayers((prev) => ({
//             ...prev,
//             [userId]: {
//               url: incomingStream,
//               muted: true,
//               playing: true,
//             },
//           }));
//         });
//       });
//     }
//   };

//   const stopScreenShare = () => {
//     if (screenStream) {
//       screenStream.getTracks().forEach((track) => track.stop());
//       console.log('Stopped screen sharing');
//       setIsScreenSharing(false);
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: stream,
//           muted: true,
//           playing: true,
//         },
//       }));
//       // Notify others to switch back to normal stream
//       Object.keys(users).forEach((userId) => {
//         const call = peer.call(userId, stream);
//         call.on('stream', (incomingStream) => {
//           setPlayers((prev) => ({
//             ...prev,
//             [userId]: {
//               url: incomingStream,
//               muted: true,
//               playing: true,
//             },
//           }));
//         });
//       });
//     }
//   };

//   const toggleChat = () => {
//     setIsChatOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-1">
//         <div className="flex-1 p-4 relative">
//           <div className={styles.activePlayerContainer}>
//             {playerHighlighted && (
//               <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
//             )}
//           </div>
//           <div className={styles.inActivePlayerContainer}>
//             {Object.keys(nonHighlightedPlayers).map((playerId) => {
//               const { url, muted, playing } = nonHighlightedPlayers[playerId];
//               return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
//             })}
//           </div>
//           <button
//             onClick={toggleChat}
//             className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             {isChatOpen ? "Close Chat" : "Open Chat"}
//           </button>
//         </div>
//         {isChatOpen && (
//           <div className="w-1/3 bg-white border-l border-gray-200">
//             <Chat roomId={roomId} />
//           </div>
//         )}
//       </div>
//       <div className="absolute bottom-4 left-4 flex space-x-2">
//         {!isScreenSharing ? (
//           <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
//             Start Screen Share
//           </button>
//         ) : (
//           <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded">
//             Stop Screen Share
//           </button>
//         )}
//       </div>
//       <CopySection roomId={roomId} />
//       <Bottom
//         muted={playerHighlighted?.muted}
//         playing={playerHighlighted?.playing}
//         toggleAudio={toggleAudio}
//         toggleVideo={toggleVideo}
//         leaveRoom={leaveRoom}
//       />
//     </div>
//   );
// };

// export default Room;

// pages/room.js

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { cloneDeep } from "lodash";
// import { useSocket } from "@/context/socket";
// import usePeer from "@/hooks/usePeer";
// import useMediaStream from "@/hooks/useMediaStream";
// import usePlayer from "@/hooks/usePlayer";
// import Player from "@/component/Player";
// import Bottom from "@/component/Bottom";
// import CopySection from "@/component/CopySection";
// import Chat from "@/component/Chat";
// import styles from "@/styles/room.module.css";

// const Room = () => {
//   const socket = useSocket();
//   const { roomId } = useRouter().query;
//   const { peer, myId } = usePeer();
//   const { stream, screenStream, getScreenStream } = useMediaStream();
//   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
//   const [users, setUsers] = useState([]);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [isScreenSharing, setIsScreenSharing] = useState(false);

//   useEffect(() => {
//     if (!socket || !peer || !stream) return;

//     socket.emit('join-room', roomId);

//     const handleUserConnected = (newUser) => {
//       console.log(`User connected in room with userId ${newUser}`);
//       const call = peer.call(newUser, stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${newUser}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [newUser]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [newUser]: call,
//         }));
//       });
//     };

//     socket.on('user-connected', handleUserConnected);
//     return () => {
//       socket.off('user-connected', handleUserConnected);
//     };
//   }, [socket, peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleToggleAudio = (userId) => {
//       console.log(`User with id ${userId} toggled audio`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].muted = !copy[userId].muted;
//         return { ...copy };
//       });
//     };

//     const handleToggleVideo = (userId) => {
//       console.log(`User with id ${userId} toggled video`);
//       setPlayers((prev) => {
//         const copy = cloneDeep(prev);
//         copy[userId].playing = !copy[userId].playing;
//         return { ...copy };
//       });
//     };

//     const handleUserLeave = (userId) => {
//       console.log(`User ${userId} is leaving the room`);
//       users[userId]?.close();
//       const playersCopy = cloneDeep(players);
//       delete playersCopy[userId];
//       setPlayers(playersCopy);
//     };

//     socket.on("user-toggle-audio", handleToggleAudio);
//     socket.on("user-toggle-video", handleToggleVideo);
//     socket.on("user-leave", handleUserLeave);
//     return () => {
//       socket.off("user-toggle-audio", handleToggleAudio);
//       socket.off("user-toggle-video", handleToggleVideo);
//       socket.off("user-leave", handleUserLeave);
//     };
//   }, [players, setPlayers, socket]);

//   useEffect(() => {
//     if (!peer || !stream) return;
//     peer.on('call', (call) => {
//       const { peer: callerId } = call;
//       call.answer(stream);
//       call.on('stream', (incomingStream) => {
//         console.log(`Incoming stream from ${callerId}`);
//         setPlayers((prev) => ({
//           ...prev,
//           [callerId]: {
//             url: incomingStream,
//             muted: true,
//             playing: true,
//           },
//         }));
//         setUsers((prev) => ({
//           ...prev,
//           [callerId]: call,
//         }));
//       });
//     });
//   }, [peer, stream, setPlayers]);

//   useEffect(() => {
//     if (!stream || !myId) return;
//     console.log(`Setting my stream ${myId}`);
//     setPlayers((prev) => ({
//       ...prev,
//       [myId]: {
//         url: stream,
//         muted: true,
//         playing: true,
//       },
//     }));
//   }, [myId, setPlayers, stream]);

//   const startScreenShare = async () => {
//     const screenStream = await getScreenStream();
//     if (screenStream) {
//       console.log('Started screen sharing');
//       setIsScreenSharing(true);
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: screenStream,
//           muted: true,
//           playing: true,
//         },
//       }));
//       // Notify others about screen sharing
//       Object.keys(users).forEach((userId) => {
//         const call = peer.call(userId, screenStream);
//         call.on('stream', (incomingStream) => {
//           setPlayers((prev) => ({
//             ...prev,
//             [userId]: {
//               url: incomingStream,
//               muted: true,
//               playing: true,
//             },
//           }));
//         });
//       });
//     }
//   };

//   const stopScreenShare = () => {
//     if (screenStream) {
//       screenStream.getTracks().forEach((track) => track.stop());
//       console.log('Stopped screen sharing');
//       setIsScreenSharing(false);
//       setPlayers((prev) => ({
//         ...prev,
//         [myId]: {
//           url: stream,
//           muted: true,
//           playing: true,
//         },
//       }));
//       // Notify others to switch back to normal stream
//       Object.keys(users).forEach((userId) => {
//         const call = peer.call(userId, stream);
//         call.on('stream', (incomingStream) => {
//           setPlayers((prev) => ({
//             ...prev,
//             [userId]: {
//               url: incomingStream,
//               muted: true,
//               playing: true,
//             },
//           }));
//         });
//       });
//     }
//   };

//   const toggleChat = () => {
//     setIsChatOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-1">
//         <div className="flex-1 p-4 relative">
//           <div className={styles.activePlayerContainer}>
//             {playerHighlighted && (
//               <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
//             )}
//           </div>
//           <div className={styles.inActivePlayerContainer}>
//             {Object.keys(nonHighlightedPlayers).map((playerId) => {
//               const { url, muted, playing } = nonHighlightedPlayers[playerId];
//               return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
//             })}
//           </div>
//           <button
//             onClick={toggleChat}
//             className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             {isChatOpen ? "Close Chat" : "Open Chat"}
//           </button>
//         </div>
//         {isChatOpen && (
//           <div className="w-1/3 bg-white border-l border-gray-200">
//             <Chat roomId={roomId} />
//           </div>
//         )}
//       </div>
//       <div className="absolute bottom-4 left-4 flex space-x-2">
//         {!isScreenSharing ? (
//           <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
//             Start Screen Share
//           </button>
//         ) : (
//           <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded">
//             Stop Screen Share
//           </button>
//         )}
//       </div>
//       <CopySection roomId={roomId} />
//       <Bottom
//         muted={playerHighlighted?.muted}
//         playing={playerHighlighted?.playing}
//         toggleAudio={toggleAudio}
//         toggleVideo={toggleVideo}
//         leaveRoom={leaveRoom}
//       />
//     </div>
//   );
// };

// export default Room;

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/router";
// // import { cloneDeep } from "lodash";
// // import { useSocket } from "@/context/socket";
// // import usePeer from "@/hooks/usePeer";
// // import useMediaStream from "@/hooks/useMediaStream";
// // import usePlayer from "@/hooks/usePlayer";
// // import Player from "@/component/Player";
// // import Bottom from "@/component/Bottom";
// // import CopySection from "@/component/CopySection";
// // import Chat from "@/component/Chat";
// // import styles from "@/styles/room.module.css";

// // const Room = () => {
// //   const socket = useSocket();
// //   const { roomId } = useRouter().query;
// //   const { peer, myId } = usePeer();
// //   const { stream, screenStream, getScreenStream } = useMediaStream();
// //   const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
// //   const [users, setUsers] = useState([]);
// //   const [isChatOpen, setIsChatOpen] = useState(false);
// //   const [isScreenSharing, setIsScreenSharing] = useState(false);
// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     if (!socket || !peer || !stream) return;

// //     socket.emit('join-room', roomId);

// //     const handleUserConnected = (newUser) => {
// //       console.log(`User connected in room with userId ${newUser}`);
// //       const call = peer.call(newUser, stream);
// //       call.on('stream', (incomingStream) => {
// //         console.log(`Incoming stream from ${newUser}`);
// //         setPlayers((prev) => ({
// //           ...prev,
// //           [newUser]: {
// //             url: incomingStream,
// //             muted: false, // Ensure unmuted by default
// //             playing: true,
// //           },
// //         }));
// //         setUsers((prev) => ({
// //           ...prev,
// //           [newUser]: call,
// //         }));
// //       });
// //     };

// //     socket.on('user-connected', handleUserConnected);

// //     const handleReceiveMessage = (message) => {
// //       setMessages((prevMessages) => [...prevMessages, message]);
// //     };

// //     socket.on('receive-message', handleReceiveMessage);

// //     return () => {
// //       socket.off('user-connected', handleUserConnected);
// //       socket.off('receive-message', handleReceiveMessage);
// //     };
// //   }, [socket, peer, stream, setPlayers]);

// //   useEffect(() => {
// //     if (!socket) return;

// //     const handleToggleAudio = (userId) => {
// //       console.log(`User with id ${userId} toggled audio`);
// //       setPlayers((prev) => {
// //         const copy = cloneDeep(prev);
// //         copy[userId].muted = !copy[userId].muted;
// //         return { ...copy };
// //       });
// //     };

// //     const handleToggleVideo = (userId) => {
// //       console.log(`User with id ${userId} toggled video`);
// //       setPlayers((prev) => {
// //         const copy = cloneDeep(prev);
// //         copy[userId].playing = !copy[userId].playing;
// //         return { ...copy };
// //       });
// //     };

// //     const handleUserLeave = (userId) => {
// //       console.log(`User ${userId} is leaving the room`);
// //       users[userId]?.close();
// //       const playersCopy = cloneDeep(players);
// //       delete playersCopy[userId];
// //       setPlayers(playersCopy);
// //     };

// //     socket.on("user-toggle-audio", handleToggleAudio);
// //     socket.on("user-toggle-video", handleToggleVideo);
// //     socket.on("user-leave", handleUserLeave);

// //     return () => {
// //       socket.off("user-toggle-audio", handleToggleAudio);
// //       socket.off("user-toggle-video", handleToggleVideo);
// //       socket.off("user-leave", handleUserLeave);
// //     };
// //   }, [players, setPlayers, socket]);

// //   useEffect(() => {
// //     if (!peer || !stream) return;

// //     peer.on('call', (call) => {
// //       const { peer: callerId } = call;
// //       call.answer(stream);
// //       call.on('stream', (incomingStream) => {
// //         console.log(`Incoming stream from ${callerId}`);
// //         setPlayers((prev) => ({
// //           ...prev,
// //           [callerId]: {
// //             url: incomingStream,
// //             muted: false, // Ensure unmuted by default
// //             playing: true,
// //           },
// //         }));
// //         setUsers((prev) => ({
// //           ...prev,
// //           [callerId]: call,
// //         }));
// //       });
// //     });

// //     return () => {
// //       peer.off('call');
// //     };
// //   }, [peer, stream, setPlayers]);

// //   useEffect(() => {
// //     if (!stream || !myId) return;
// //     console.log(`Setting my stream ${myId}`);
// //     setPlayers((prev) => ({
// //       ...prev,
// //       [myId]: {
// //         url: stream,
// //         muted: false, // Ensure unmuted by default
// //         playing: true,
// //       },
// //     }));
// //   }, [myId, setPlayers, stream]);

// //   const startScreenShare = async () => {
// //     const screenStream = await getScreenStream();
// //     if (screenStream) {
// //       console.log('Started screen sharing');
// //       setIsScreenSharing(true);
// //       setPlayers((prev) => ({
// //         ...prev,
// //         [myId]: {
// //           url: screenStream,
// //           muted: false, // Ensure unmuted by default
// //           playing: true,
// //         },
// //       }));
// //       // Notify others about screen sharing
// //       Object.keys(users).forEach((userId) => {
// //         const call = peer.call(userId, screenStream);
// //         call.on('stream', (incomingStream) => {
// //           setPlayers((prev) => ({
// //             ...prev,
// //             [userId]: {
// //               url: incomingStream,
// //               muted: false, // Ensure unmuted by default
// //               playing: true,
// //             },
// //           }));
// //         });
// //       });
// //     }
// //   };

// //   const stopScreenShare = () => {
// //     if (screenStream) {
// //       screenStream.getTracks().forEach((track) => track.stop());
// //       console.log('Stopped screen sharing');
// //       setIsScreenSharing(false);
// //       setPlayers((prev) => ({
// //         ...prev,
// //         [myId]: {
// //           url: stream,
// //           muted: false, // Ensure unmuted by default
// //           playing: true,
// //         },
// //       }));
// //       // Notify others to switch back to normal stream
// //       Object.keys(users).forEach((userId) => {
// //         const call = peer.call(userId, stream);
// //         call.on('stream', (incomingStream) => {
// //           setPlayers((prev) => ({
// //             ...prev,
// //             [userId]: {
// //               url: incomingStream,
// //               muted: false, // Ensure unmuted by default
// //               playing: true,
// //             },
// //           }));
// //         });
// //       });
// //     }
// //   };

// //   const sendMessage = (message) => {
// //     if (message.trim() === '') return;
// //     const newMessage = { id: myId, text: message };
// //     socket.emit('send-message', { roomId, newMessage });
// //     setMessages((prevMessages) => [...prevMessages, newMessage]);
// //   };

// //   const toggleChat = () => {
// //     setIsChatOpen((prev) => !prev);
// //   };

// //   return (
// //     <div className="flex flex-col h-screen">
// //       <div className="flex flex-1">
// //         <div className="flex-1 p-4 relative">
// //           <div className={styles.activePlayerContainer}>
// //             {playerHighlighted && (
// //               <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
// //             )}
// //           </div>
// //           <div className={styles.inActivePlayerContainer}>
// //             {Object.keys(nonHighlightedPlayers).map((playerId) => {
// //               const { url, muted, playing } = nonHighlightedPlayers[playerId];
// //               return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
// //             })}
// //           </div>
// //           <button
// //             onClick={toggleChat}
// //             className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
// //           >
// //             {isChatOpen ? "Close Chat" : "Open Chat"}
// //           </button>
// //         </div>
// //         {isChatOpen && (
// //           <div className="w-1/3 bg-white border-l border-gray-200">
// //             <Chat roomId={roomId} messages={messages} sendMessage={sendMessage} />
// //           </div>
// //         )}
// //       </div>
// //       <div className="absolute bottom-4 left-4 flex space-x-2">
// //         {!isScreenSharing ? (
// //           <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
// //             Start Screen Share
// //           </button>
// //         ) : (
// //           <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded">
// //             Stop Screen Share
// //           </button>
// //         )}
// //       </div>
// //       <CopySection roomId={roomId} />
// //       <Bottom
// //         muted={playerHighlighted?.muted}
// //         playing={playerHighlighted?.playing}
// //         toggleAudio={toggleAudio}
// //         toggleVideo={toggleVideo}
// //         leaveRoom={leaveRoom}
// //       />
// //     </div>
// //   );
// // };

// // export default Room;



import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cloneDeep } from "lodash";
import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import useMediaStream from "@/hooks/useMediaStream";
import usePlayer from "@/hooks/usePlayer";
import Player from "@/component/Player";
import Bottom from "@/component/Bottom";
import CopySection from "@/component/CopySection";
import Chat from "@/component/Chat";
import styles from "@/styles/room.module.css";

const Room = () => {
  const socket = useSocket();
  const { roomId } = useRouter().query;
  const { peer, myId } = usePeer();
  const { stream, screenStream, getScreenStream } = useMediaStream();
  const { players, setPlayers, playerHighlighted, nonHighlightedPlayers, toggleAudio, toggleVideo, leaveRoom } = usePlayer(myId, roomId, peer);
  const [users, setUsers] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  useEffect(() => {
    if (!socket || !peer || !stream) return;

    socket.emit('join-room', roomId);

    const handleUserConnected = (newUser) => {
      console.log(`User connected in room with userId ${newUser}`);
      const call = peer.call(newUser, stream);
      call.on('stream', (incomingStream) => {
        console.log(`Incoming stream from ${newUser}`);
        setPlayers((prev) => ({
          ...prev,
          [newUser]: {
            url: incomingStream,
            muted: true,
            playing: true,
          },
        }));
        setUsers((prev) => ({
          ...prev,
          [newUser]: call,
        }));
      });
    };

    socket.on('user-connected', handleUserConnected);
    return () => {
      socket.off('user-connected', handleUserConnected);
    };
  }, [socket, peer, stream, setPlayers]);

  useEffect(() => {
    if (!socket) return;

    const handleToggleAudio = (userId) => {
      console.log(`User with id ${userId} toggled audio`);
      setPlayers((prev) => {
        const copy = cloneDeep(prev);
        copy[userId].muted = !copy[userId].muted;
        return { ...copy };
      });
    };

    const handleToggleVideo = (userId) => {
      console.log(`User with id ${userId} toggled video`);
      setPlayers((prev) => {
        const copy = cloneDeep(prev);
        copy[userId].playing = !copy[userId].playing;
        return { ...copy };
      });
    };

    const handleUserLeave = (userId) => {
      console.log(`User ${userId} is leaving the room`);
      users[userId]?.close();
      const playersCopy = cloneDeep(players);
      delete playersCopy[userId];
      setPlayers(playersCopy);
    };

    const handleReceiveMessage = ({ roomId: receivedRoomId, newMessage }) => {
      if (receivedRoomId === roomId) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };

    socket.on("user-toggle-audio", handleToggleAudio);
    socket.on("user-toggle-video", handleToggleVideo);
    socket.on("user-leave", handleUserLeave);
    socket.on("receive-message", handleReceiveMessage);

    return () => {
      socket.off("user-toggle-audio", handleToggleAudio);
      socket.off("user-toggle-video", handleToggleVideo);
      socket.off("user-leave", handleUserLeave);
      socket.off("receive-message", handleReceiveMessage);
    };
  }, [players, setPlayers, socket, roomId]);

  useEffect(() => {
    if (!peer || !stream) return;
    peer.on('call', (call) => {
      const { peer: callerId } = call;
      call.answer(stream);
      call.on('stream', (incomingStream) => {
        console.log(`Incoming stream from ${callerId}`);
        setPlayers((prev) => ({
          ...prev,
          [callerId]: {
            url: incomingStream,
            muted: true,
            playing: true,
          },
        }));
        setUsers((prev) => ({
          ...prev,
          [callerId]: call,
        }));
      });
    });
  }, [peer, stream, setPlayers]);

  useEffect(() => {
    if (!stream || !myId) return;
    console.log(`Setting my stream ${myId}`);
    setPlayers((prev) => ({
      ...prev,
      [myId]: {
        url: stream,
        muted: true,
        playing: true,
      },
    }));
  }, [myId, setPlayers, stream]);

  const startScreenShare = async () => {
    const screenStream = await getScreenStream();
    if (screenStream) {
      console.log('Started screen sharing');
      setIsScreenSharing(true);
      setPlayers((prev) => ({
        ...prev,
        [myId]: {
          url: screenStream,
          muted: true,
          playing: true,
        },
      }));
      // Notify others about screen sharing
      Object.keys(users).forEach((userId) => {
        const call = peer.call(userId, screenStream);
        call.on('stream', (incomingStream) => {
          setPlayers((prev) => ({
            ...prev,
            [userId]: {
              url: incomingStream,
              muted: true,
              playing: true,
            },
          }));
        });
      });
    }
  };

  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      console.log('Stopped screen sharing');
      setIsScreenSharing(false);
      setPlayers((prev) => ({
        ...prev,
        [myId]: {
          url: stream,
          muted: true,
          playing: true,
        },
      }));
      // Notify others to switch back to normal stream
      Object.keys(users).forEach((userId) => {
        const call = peer.call(userId, stream);
        call.on('stream', (incomingStream) => {
          setPlayers((prev) => ({
            ...prev,
            [userId]: {
              url: incomingStream,
              muted: true,
              playing: true,
            },
          }));
        });
      });
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div className="flex-1 p-4 relative">
          <div className={styles.activePlayerContainer}>
            {playerHighlighted && (
              <Player url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} isActive />
            )}
          </div>
          <div className={styles.inActivePlayerContainer}>
            {Object.keys(nonHighlightedPlayers).map((playerId) => {
              const { url, muted, playing } = nonHighlightedPlayers[playerId];
              return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />;
            })}
          </div>
          <button
            onClick={toggleChat}
            className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            {isChatOpen ? "Close Chat" : "Open Chat"}
          </button>
        </div>
        {isChatOpen && (
          <div className="w-1/3 bg-white border-l border-gray-200">
            <Chat roomId={roomId} />
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {!isScreenSharing ? (
          <button onClick={startScreenShare} className="bg-blue-500 text-white py-2 px-4 rounded">
            Start Screen Share
          </button>
        ) : (
          <button onClick={stopScreenShare} className="bg-red-500 text-white py-2 px-4 rounded">
            Stop Screen Share
          </button>
        )}
      </div>
      <CopySection roomId={roomId} />
      <Bottom
        muted={playerHighlighted?.muted}
        playing={playerHighlighted?.playing}
        toggleAudio={toggleAudio}
        toggleVideo={toggleVideo}
        leaveRoom={leaveRoom}
      />
    </div>
  );
};

export default Room;
