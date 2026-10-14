import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../Appwrite/configure";
import { generatePath, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const field = file.$id;
        data.featuredImage = field;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  return;
}
<form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
  <div className="w-2/3 px-2">
    <input
      label="Title"
      placeholder="Title"
      className="mb-4"
      {...register("title", { required: true })}
    />
    <input
      label="Slug"
      placeholder="Slug"
      className="mb-4"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), {
          shouldValidateL: true,
        });
      }}
    />
    <RTE
      label="Content :"
      name="content"
      control={control}
      defaultValue={getValues("content")}
    />
  </div>
  <div className="w-1/3 px-2">
    <input
      label="Featured image"
      type="file"
      className="mb-4"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />
    {post && (
      <div className="w-full mb-4">
        <img
          src={appwriteService.getFilePreview(post.getfeaturedImage)}
          alt={post.title}
          className="rounded-lg"
        />
      </div>
    )}
    <select
      options={["active", "inactive"]}
      label="Status"
      className="mb-4"
      {...register("status", { required: true })}
    />
    <Button
      type="submit"
      bgColor={post ? "bg-green-500" : undefined}
      className="w-full"
    >
      {post ? "update" : "submit"}
    </Button>
  </div>
</form>;
export default PostForm;
