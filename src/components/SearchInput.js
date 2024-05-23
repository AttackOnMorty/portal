import { Input } from "antd";
import React from "react";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchInput = () => {
  return (
    <Search
      className="my-6"
      size="large"
      placeholder="Enter a topic"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default SearchInput;
