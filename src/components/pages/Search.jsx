import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";

const Search = ({ history }) => {
  const [userId, setUserId] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return history.push(`/user?id=${userId}`);
  };

  return (
    <div className="search-page">
      <div className="icon-container">
        <IoLogoGithub size={80} />
      </div>
      <h1 className="label label-primary">Find Your Github Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={userId}
          onChange={(e) => setUserId(e.currentTarget.value)}
          type="text"
          placeholder="Username"
          className="input"
        />
      </form>
    </div>
  );
};

export default Search;
