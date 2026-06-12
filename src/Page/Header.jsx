import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //  const userAviable=sessionStorage.getItem("userName")

  const [userAvailable, setUserAvailable] = useState(null);

  // Re-check sessionStorage whenever route changes
  useEffect(() => {
    const user = sessionStorage.getItem("userName");
    setUserAvailable(user);
  }, [location]);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99,
        width: "100%",
      }}
    >
      <header
        style={{
          backgroundColor: "#282c34",
          padding: "10px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px" }}>My Website</h1>
        <nav>
          <span onClick={() => navigate("/")}>Home</span>
          <a
            href="#about"
            style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
          >
            Contact
          </a>
          {userAvailable && (
            <span style={{ marginRight: "10px" }}>
              <FaShoppingCart />
              <span
                className="count"
                style={{
                  background: "red",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "0px 3px",
                  marginLeft: "-4px",
                }}
              >
                0
              </span>
            </span>
          )}
          {!userAvailable ? (
            <span
              onClick={() => navigate("/login")}
              style={{
                color: "white",
                margin: "0 10px",
                textDecoration: "none",
              }}
            >
              Login
            </span>
          ) : (
            <span
              style={{ textTransform: "uppercase" }}
              onClick={() => {
                navigate("/login");
                sessionStorage.clear();
              }}
            >
              {userAvailable}
              <IoIosLogOut />
            </span>
          )}

          {!userAvailable && (
            <span onClick={() => navigate("/signout")}>New User</span>
          )}

          {/* {userAvailable&&(<span>{userAvailable}</span>)} */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
