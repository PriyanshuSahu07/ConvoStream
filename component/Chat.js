// // components/Chat.js

// import { useState, useEffect } from 'react';
// import { useSocket } from '@/context/socket';

// const Chat = ({ roomId }) => {
//   const socket = useSocket();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleReceiveMessage = (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };

//     socket.on('receive-message', handleReceiveMessage);

//     return () => {
//       socket.off('receive-message', handleReceiveMessage);
//     };
//   }, [socket]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (message.trim() === '') return;

//     const newMessage = { id: socket.id, text: message };
//     socket.emit('send-message', roomId, newMessage);
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setMessage('');
//   };

//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.id === socket.id ? 'text-right' : 'text-left'}`}>
//             <span className={`inline-block px-4 py-2 rounded ${msg.id === socket.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage} className="p-2 flex items-center border-t border-gray-300">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message"
//           className="flex-1 p-2 border border-gray-300 rounded mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;


// components/Chat.js

// components/Chat.js

// import { useState, useEffect } from 'react';
// import { useSocket } from '@/context/socket';

// const Chat = ({ roomId }) => {
//   const socket = useSocket();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleReceiveMessage = (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };

//     socket.on('receive-message', handleReceiveMessage);

//     return () => {
//       socket.off('receive-message', handleReceiveMessage);
//     };
//   }, [socket]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (message.trim() === '') return;

//     const newMessage = { id: socket.id, text: message };
//     socket.emit('send-message', roomId, newMessage);
//     setMessage('');
//   };

//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.id === socket.id ? 'text-right' : 'text-left'}`}>
//             <span className={`inline-block px-4 py-2 rounded ${msg.id === socket.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage} className="p-2 flex items-center border-t border-gray-300">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message"
//           className="flex-1 p-2 border border-gray-300 rounded mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;


// import { useState, useEffect } from 'react';
// import { useSocket } from '@/context/socket';

// const Chat = ({ roomId }) => {
//   const socket = useSocket();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleReceiveMessage = (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };

//     socket.on('receive-message', handleReceiveMessage);

//     return () => {
//       socket.off('receive-message', handleReceiveMessage);
//     };
//   }, [socket]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (message.trim() === '') return;

//     const newMessage = { id: socket.id, text: message };
//     socket.emit('send-message', newMessage); // Emit with message only, roomId should be handled on the server side
//     setMessage('');
//   };

//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.id === socket.id ? 'text-right' : 'text-left'}`}>
//             <span className={`inline-block px-4 py-2 rounded ${msg.id === socket.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage} className="p-2 flex items-center border-t border-gray-300">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message"
//           className="flex-1 p-2 border border-gray-300 rounded mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;



// components/Chat.js

import { useState, useEffect } from 'react';
import { useSocket } from '@/context/socket';

const Chat = ({ roomId }) => {
  const socket = useSocket();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const handleReceiveMessage = ({ newMessage }) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on('receive-message', handleReceiveMessage);

    return () => {
      socket.off('receive-message', handleReceiveMessage);
    };
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = { id: socket.id, text: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Add locally for immediate feedback
    socket.emit('send-message', { roomId, newMessage });
    setMessage('');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.id === socket.id ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-4 py-2 rounded ${msg.id === socket.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-2 flex items-center border-t border-gray-300">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message" // Ensure placeholder is shown while typing
          className="flex-1 p-2 border border-gray-300 rounded mr-2 text-black" // Set text color to black
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
