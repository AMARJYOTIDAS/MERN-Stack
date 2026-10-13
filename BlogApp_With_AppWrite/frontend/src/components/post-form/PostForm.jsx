import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../Appwrite/configure";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm();
  return <div></div>;
}

export default PostForm;
