import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Modal } from "antd";

interface AuthUser {
  name: string;
  picture: string;
}

const ProfileMenu = () => {
  const [auth, setAuth] = useState<AuthUser | null>({
    name: "Mafruza",
    picture: "https://i.pravatar.cc/100",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showLogoutModal = () => {
    setIsModalVisible(true);
  };

  const handleLogout = () => {
    setAuth(null); 
    setIsModalVisible(false);
  };

  const cancelLogout = () => {
    setIsModalVisible(false);
  };

  const menu = [
    {
      key: "logout",
      label: (
        <span onClick={showLogoutModal} className="text-red-500">
          Logout
        </span>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {auth ? (
        <Dropdown menu={{ items: menu }} placement="bottomRight" arrow>
          <img
            src={auth.picture}
            alt={auth.name}
            className="w-8 h-8 rounded-full cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </Dropdown>
      ) : (
        <NavLink to="/login">
          <Button type="primary" danger className="outline-none border-none text-white rounded">
            Login
          </Button>
        </NavLink>
      )}

      <Modal
        title="Are you sure you want to logout?"
        open={isModalVisible}
        onOk={handleLogout}
        onCancel={cancelLogout}
        okText="Yes"
        cancelText="No"
      />
    </div>
  );
};

export default React.memo(ProfileMenu);
