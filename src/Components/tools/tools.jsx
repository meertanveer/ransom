// App.jsx
import { useState } from 'react';
import Encryption from './encrypt';
import Alteration from './alter';
import Delection from './erase';
import UserDatabase from './userdata';

// Tool Components
const Encrypt = () => <Encryption />;
const Alter = () => <Alteration />;
const Erase = () => <Delection />;
const UserData = () => <UserDatabase />;

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { name: 'Encrypt', component: <Encrypt /> },
    { name: 'Alter', component: <Alter /> },
    { name: 'Erase', component: <Erase /> },
    { name: 'User Data', component: <UserData /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar Menu */}
      <div className="w-1/4 bg-gray-800 text-white">
        <h2 className="text-lg font-bold p-4 border-b border-gray-700">Menu</h2>
        <ul>
          {tools.map((tool, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer hover:bg-gray-700 ${
                selectedTool === tool.name ? 'bg-gray-700' : ''
              }`}
              onClick={() => setSelectedTool(tool.name)}
            >
              {tool.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 flex items-center justify-center">
        {selectedTool ? (
          tools.find((tool) => tool.name === selectedTool).component
        ) : (
          <p className="text-gray-500">Select a tool from the menu</p>
        )}
      </div>
    </div>
  );
};

export default Tools;
