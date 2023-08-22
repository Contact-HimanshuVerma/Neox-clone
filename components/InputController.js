import React from "react";
import { Controller } from "react-hook-form";

export default function InputController({
  name,
  label,
  type,
  control,
  rules,
  className,
}) {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="flex flex-col p-1">
          <label className="font-openSans">{label}</label>
          <input
            onChange={field.onChange}
            className={`${className} rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50`}
            type={type}
          />

          {fieldState.error && (
            <label className="text-red-600 text-xs py-1">
              {fieldState.error.message}
            </label>
          )}
        </div>
      )}
    />
  );
}
