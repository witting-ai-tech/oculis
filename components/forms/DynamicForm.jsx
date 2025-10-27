import React, { useState } from "react";
import FileUpload from "../FileUpload";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DynamicForm = ({
  formData,
  title,
  description,
  onFormDataChange,
  formDataState,
}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const toArray = (row) => (Array.isArray(row) ? row : [row]);
  const setField = (name, val) => setValues((v) => ({ ...v, [name]: val }));

  const validate = () => {
    const nextErrors = {};
    // flatten fields
    const allFields = formData.flatMap((row) =>
      Array.isArray(row) ? row : [row]
    );
    allFields.forEach((f) => {
      if (!f) return;
      const v = values[f.name];
      const isEmpty =
        f.type === "file"
          ? !v
          : v === undefined || v === null || String(v).trim() === "";
      if (f.required && isEmpty) {
        nextErrors[f.id] = `${f.label || f.name} is required`;
      }
    });
    setErrors(nextErrors);
    console.log("Validation errors:", nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onFormDataChange?.(values);
    console.log("Form submitted:", formDataState);
    setValues({});
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setValues({});
    setErrors({});
    onFormDataChange?.({});
  };

  return (
    <div className="mb-8 shadow-xs rounded-[8px] border border-[#D5D7DA] py-3 px-[14px]">
      <div>
        <h3 className="text-[18px] text-[#181D27] font-semibold">{title}</h3>
        <p className="text-sm text-[#535862]">{description}</p>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        {formData.map((row, rowIdx) => {
          const fields = toArray(row);
          return (
            <div
              key={`row-${rowIdx}`}
              className="w-full flex flex-row gap-8 mb-4"
            >
              {fields.map((field, colIdx) => {
                const key = field.name ?? `${rowIdx}-${colIdx}`;
                const requiredMark = field.required ? (
                  <span className="text-[#7D48DF]">*</span>
                ) : null;

                switch (field.type) {
                  case "text":
                    return (
                      <div
                        key={key}
                        className="max-w-[384px] w-full flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {field.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field.label} {requiredMark}
                          </label>
                        )}

                        <Input
                          name={field.name}
                          type="text"
                          required={field.required}
                          placeholder={field.placeholder || ""}
                          className={`shadow-xs h-9 rounded-md border px-3 outline-none focus:ring-2 ${
                            errors[field.id]
                              ? "border-red-400 focus:ring-red-300"
                              : "border-[#D5D7DA] focus:ring-[#7D48DF]"
                          }`}
                          onChange={(e) => {
                            setField(field.name, e.target.value);
                            if (errors[field.id]) {
                              setErrors((er) => ({
                                ...er,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                        />
                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}
                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );
                  case "date":
                    return (
                      <div
                        key={key}
                        className="flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {field.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field.label} {requiredMark}
                          </label>
                        )}

                        <Input
                          name={field.name}
                          type="month"
                          required={field.required}
                          defaultValue="2025-06"  // YYYY-MM
                          className={`shadow-xs h-9 rounded-md border px-3 outline-none focus:ring-2 ${
                            errors[field.id]
                              ? "border-red-400 focus:ring-red-300"
                              : "border-[#D5D7DA] focus:ring-[#7D48DF]"
                          }`}
                          onChange={(e) => {
                            setField(field.name, e.target.value);
                            if (errors[field.id]) {
                              setErrors((er) => ({
                                ...er,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                        />
                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}
                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );
                  case "select":
                    return (
                      <div
                        key={key}
                        className="max-w-[384px] w-full flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {field.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field.label} {requiredMark}
                          </label>
                        )}

                        <Select
                          value={values[field.name] ?? ""}
                          onValueChange={(val) => {
                            setField(field.name, val);
                            if (errors[field.id]) {
                              setErrors((er) => ({
                                ...er,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                        >
                          <SelectTrigger
                            required={field.required}
                            className={`w-full shadow-xs ${
                              errors[field.id]
                                ? "border-red-400 ring-1 ring-red-300"
                                : ""
                            }`}
                          >
                            <SelectValue
                              placeholder={field.placeholder || "Select…"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {(field.options || []).map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}
                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );

                  case "file":
                    return (
                      <div
                        key={key}
                        className="max-w-[384px] w-full flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {field.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field.label} {requiredMark}
                          </label>
                        )}

                        <FileUpload
                          name={field.name}
                          required={field.required}
                          value={values[field.name] ?? null}
                          // accept only images here; change as needed
                          accept={field.accept || ".svg,.png,.jpg,.jpeg,.gif"}
                          maxSizeMB={field.maxSizeMB || 5}
                          maxWidth={field.maxWidth ?? 800}
                          maxHeight={field.maxHeight ?? 400}
                          helpText={
                            field.helpText ||
                            "SVG, PNG, JPG or GIF (max. 800×400px)"
                          }
                          error={errors[field.id]}
                          onChange={(file, fileError) => {
                            if (fileError) {
                              setField(field.name, null);
                              setErrors((er) => ({
                                ...er,
                                [field.id]: fileError,
                              }));
                            } else {
                              setField(field.name, file);
                              if (errors[field.id]) {
                                setErrors((er) => ({
                                  ...er,
                                  [field.id]: undefined,
                                }));
                              }
                            }
                          }}
                        />
                      </div>
                    );
                  case "radio-group":
                    return (
                      <div
                        key={key}
                        className="max-w-[384px] w-full flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {field?.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field?.label} {requiredMark}
                          </label>
                        )}
                        <RadioGroup
                          defaultValue={null}
                          onChange={(e) => {
                            setField(field.name, e.target.value);
                            if (errors[field.id]) {
                              setErrors((er) => ({
                                ...er,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                        >
                          <div className="flex flex-row gap-4">
                            {field.options.map((option, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={option.value}
                                  id={option.value}
                                />
                                <Label htmlFor={option.value}>
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>

                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}

                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );
                  case "radio-group-vertical":
                    return (
                      <div
                        key={key}
                        className="max-w-[768px] w-full flex flex-col gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}
                        {field?.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field?.label} {requiredMark}
                          </label>
                        )}
                        <RadioGroup
                          defaultValue={null}
                          onChange={(e) => {
                            setField(field.name, e.target.value);
                            if (errors[field.id]) {
                              setErrors((er) => ({
                                ...er,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                        >
                          <div className="flex flex-col gap-4">
                            {field.options.map((option, index) => (
                              <div
                                key={index}
                                className="w-full flex space-x-3 border border-[#E9EAEB] rounded-[12px] p-4"
                              >
                                <RadioGroupItem
                                  value={option.value}
                                  id={option.value}
                                />
                                <Label
                                  htmlFor={option.value}
                                  className="text-[#414651] flex flex-col items-start"
                                >
                                  {option.label}
                                  <p className="text-[#535862] text-sm">
                                    {option.description}
                                  </p>
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>

                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}

                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );
                  case "checkbox":
                    return (
                      <div
                        key={key}
                        className="max-w-[768px] w-full flex flex-row gap-[6px]"
                      >
                        {field?.heading && (
                          <div className="my-2">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            <p className="text-sm text-[#535862]">
                              {field.subHeading}
                            </p>
                          </div>
                        )}

                        {/* Optional top label */}
                        {field?.label && (
                          <label
                            htmlFor={`${field.id}-checkbox`}
                            className="text-sm font-medium text-[#414651]"
                          >
                            {field.label} {requiredMark}
                          </label>
                        )}

                        <div className="p-3 pl-6">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id={field.id}
                              checked={!!values[field.name]}
                              onCheckedChange={(checked) => {
                                setField(field.name, !!checked);
                                if (errors[field.id]) {
                                  setErrors((er) => ({
                                    ...er,
                                    [field.id]: undefined,
                                  }));
                                }
                              }}
                            />

                            <div className="flex flex-col">
                              {field.helperText && (
                                <p className="text-sm text-[#535862]">
                                  {field.helperText}
                                </p>
                              )}
                              {errors[field.id] && (
                                <span className="text-xs text-red-500">
                                  {errors[field.id]}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case "checkbox-group": {
                    const selected = Array.isArray(values[field.name])
                      ? values[field.name]
                      : [];
                    const toggle = (val) => {
                      setValues((prev) => {
                        const curr = Array.isArray(prev[field.name])
                          ? prev[field.name]
                          : [];
                        const exists = curr.includes(val);
                        const next = exists
                          ? curr.filter((v) => v !== val)
                          : [...curr, val];
                        return { ...prev, [field.name]: next };
                      });
                      if (errors[field.id]) {
                        setErrors((er) => ({ ...er, [field.id]: undefined }));
                      }
                    };

                    return (
                      <div
                        key={key}
                        className="max-w-[768px] w-full flex flex-col gap-2"
                      >
                        {/* Optional heading/subheading block */}
                        {field.heading && (
                          <div className="my-1">
                            <h3 className="text-[18px] text-[#181D27] font-semibold">
                              {field.heading}
                            </h3>
                            {field.subHeading && (
                              <p className="text-sm text-[#535862]">
                                {field.subHeading}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Group label */}
                        {field.label && (
                          <label className="text-sm font-medium text-[#414651]">
                            {field.label}{" "}
                            {field.required && (
                              <span className="text-[#7D48DF]">*</span>
                            )}
                          </label>
                        )}

                        {/* Options inline */}
                        <div className="flex items-center gap-10 pt-1">
                          {(field.options || []).map((opt) => {
                            const checked = selected.includes(opt.value);
                            return (
                              <label
                                key={opt.value}
                                htmlFor={`${field.id}-${opt.value}`}
                                className="flex items-center gap-2 cursor-pointer select-none"
                              >
                                <Checkbox
                                  id={`${field.id}-${opt.value}`}
                                  checked={checked}
                                  onCheckedChange={() => toggle(opt.value)}
                                />
                                <span className="text-sm text-[#181D27]">
                                  {opt.label}
                                </span>
                              </label>
                            );
                          })}
                        </div>

                        {/* Helper + error */}
                        {field.helperText && (
                          <p className="text-sm text-[#535862]">
                            {field.helperText}
                          </p>
                        )}
                        {errors[field.id] && (
                          <span className="text-xs text-red-500">
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    );
                  }

                  default:
                    return null;
                }
              })}
            </div>
          );
        })}

        <div className="w-full flex flex-row gap-3 justify-end mt-8 text-sm">
          <button
            type="button"
            className="btn-shadow py-[10px] px-[14px] rounded-[8px] bg-[#FFF]  font-semibold hover:opacity-90"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-shadow py-[10px] px-[14px] rounded-[8px] bg-[#7D48DF] text-white font-semibold hover:opacity-90"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
