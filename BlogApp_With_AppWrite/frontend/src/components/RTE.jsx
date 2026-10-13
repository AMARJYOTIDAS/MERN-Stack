import React from "react";
import { Editer } from "@tinmce/tinymce-react";
import { controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editer
            initialvalue={defaultValue}
            init={{
              initialvalue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatatime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft alignright aligncenter alignjustify |  bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial, sans-serif, font-size:14px}",
            }}
            onEditorchange={onchange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
