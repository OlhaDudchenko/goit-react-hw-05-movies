import { useState } from "react";
import { Button, Input } from "./SearchBar.styled";

export function SearchBar({ onSubmit }) {
  const [SearchValue, setSearchValue] = useState("");

  const handleInputValue = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleOnSubmitform = (event) => {
    event.preventDefault();

    if (SearchValue.trim() === "") {
      alert("Enter the search request !");
      return;
    }
    onSubmit(SearchValue);
    setSearchValue("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmitform}>
        <label>
          <span>Movie: </span>
          <Input
            type="text"
            name="movie"
            onChange={handleInputValue}
            value={SearchValue}
          />
        </label>
        <Button type="submit">Search</Button>
      </form>
    </>
  );
}
