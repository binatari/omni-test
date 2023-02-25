import { MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { api } from "../src/queries";

const SelectFilter = ({ label, placeholder, filter, path, type, onChange, value }) => {
  const [options, setOptions] = useState([]);

  const getLabel = (data) => {
    switch (type) {
      case "age":
        return {...data, label:data.age};
      case "state":
        return  {...data, label:data.name};
      case "gender":
        return {...data, label:data.gender};
      case "level":
        return {...data, label:data.level};
      default:
        return data;
    }
  };


  const getOptions = async () => {
    const response = await api
      .get(path)
      .then((res) => {
        console.log(res.data.data);
        const label = res.data.data.map((item)=>{
          return getLabel(item)
        })
        setOptions(label)
      })
      .catch((err) => console.log(err));
  };



  useEffect(() => {
    getOptions();
  }, [path]);


  return (
    <TextField
      label={label}
      fullWidth
      value={value}
      onChange={onChange}
      name={type}
      placeholder={placeholder}
      select
    >
      {options.map((option, i) => (
        <MenuItem key={i} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectFilter;
