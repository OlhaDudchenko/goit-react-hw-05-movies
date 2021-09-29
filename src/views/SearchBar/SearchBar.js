import { useState } from "react";
import { Button, Input, Form } from "./SearchBar.styled";
import { FiSearch } from "react-icons/fi";

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
      <Form onSubmit={handleOnSubmitform}>
        <label>
          <Input
            type="text"
            name="movie"
            onChange={handleInputValue}
            value={SearchValue}
            placeholder="Movie"
          />
        </label>

        <Button type="submit">
          <FiSearch />
        </Button>
      </Form>
    </>
  );
}
