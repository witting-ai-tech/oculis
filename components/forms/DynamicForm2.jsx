"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/Button";

const DynamicForm2 = ({
  sections = [],
  onCancel,
  onSubmit,
  onFormDataChange,
  title,
  description,
  primaryAction,
  secondaryAction,
  handleFormSubmit,
}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (name, val) => {
    setValues((prev) => ({ ...prev, [name]: val }));
  };

  // Expiry state (shared across any field with type === 'expiry') keyed by field.name
  const [expiryState, setExpiryState] = useState({});
  const monthRefs = useRef({});
  const yearRefs = useRef({});

  const clampMonth = (v) => {
    if (!v) return "";
    let n = Number(v);
    if (isNaN(n)) return "";
    if (n <= 0) n = 1;
    if (n > 12) n = 12;
    return String(n).padStart(2, "0");
  };

  const handleRequiredValidation = () => {
    const next = {};
    sections.forEach((section) => {
      (section.fields || []).forEach((f) => {
        if (!f) return;
        const v = values[f.name];
        const empty =
          v === undefined || v === null || String(v).trim?.() === "";
        if (f.required && empty)
          next[f.name] = `${f.label || f.name} is required`;
      });
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleCancel = (e) => {
    e?.preventDefault?.();
    setValues({});
    setErrors({});
    onFormDataChange?.({});
    onCancel?.();
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    if (!handleRequiredValidation()) return;
    onFormDataChange?.(values);
    onSubmit?.(values);
    handleFormSubmit?.();
  };

  const renderField = (field) => {
    const error = errors[field.name];
    const requiredAsterisk = field.required ? (
      <span className="text-[#7D48DF]">*</span>
    ) : null;

    switch (field.type) {
      case "text":
      case "password":
      case "email": {
        return (
          <div className={` ${field.maxWidthClass || "max-w-[512px]"} w-full`}>
            {field.label && (
              <label className="text-sm" htmlFor={field.name}>
                <p className="font-medium text-[#414651]">
                  {field.label} {requiredAsterisk}
                </p>
              </label>
            )}
            <div className={field.leadingIcon ? "relative" : undefined}>
              {field.leadingIcon}
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder || ""}
                value={values?.[field.name] || ""}
                onChange={(e) => {
                  setField(field.name, e.target.value);
                  if (errors[field.name]) {
                    setErrors((er) => ({ ...er, [field.name]: undefined }));
                  }
                }}
                className={`peer  shadow-xs h-9 rounded-md border px-3 ${
                  field.leadingIcon ? "pl-10" : ""
                } outline-none focus:ring-2 border-[#D5D7DA] focus:ring-[#7D48DF] ${
                  error ? "border-red-400 focus:ring-red-300" : ""
                } ${field.label ? "mt-[6px]" : ""}`}
              />
            </div>
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>
        );
      }

      case "expiry": {
        const name = field.name;
        const mm = expiryState[name]?.mm || "";
        const yy = expiryState[name]?.yy || "";

        const onMonthChange = (e) => {
          const raw = e.target.value.replace(/\D/g, "").slice(0, 2);
          setExpiryState((s) => ({
            ...s,
            [name]: { ...(s[name] || {}), mm: raw },
          }));
          if (raw.length === 2) {
            setExpiryState((s) => ({
              ...s,
              [name]: {
                ...(s[name] || {}),
                mm: clampMonth(raw),
                yy: s[name]?.yy || "",
              },
            }));
            yearRefs.current?.[name]?.focus?.();
          }
        };
        const onMonthBlur = () =>
          setExpiryState((s) => ({
            ...s,
            [name]: {
              ...(s[name] || {}),
              mm: s[name]?.mm ? clampMonth(s[name].mm) : "",
            },
          }));

        const onYearChange = (e) => {
          const next = e.target.value.replace(/\D/g, "").slice(0, 4);
          setExpiryState((s) => ({
            ...s,
            [name]: { ...(s[name] || {}), yy: next },
          }));
        };
        const onYearKeyDown = (e) => {
          if (
            (e.key === "Backspace" || e.key === "ArrowLeft") &&
            yy.length === 0
          ) {
            monthRefs.current?.[name]?.focus?.();
          }
        };

        const combined = mm && yy ? `${yy}-${String(mm).padStart(2, "0")}` : "";
        // Push up combined value
        React.useEffect(() => {
          setField(name, combined);
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [mm, yy]);

        return (
          <div className={` ${field.maxWidthClass || "max-w-[122px]"}`}>
            {field.label && (
              <label className="text-sm" htmlFor={`${name}-mm`}>
                <p className="font-medium text-[#414651]">
                  {field.label} {requiredAsterisk}
                </p>
              </label>
            )}
            <div
              className={`shadow-xs h-9 rounded-md border px-3 flex items-center gap-2 bg-white focus-within:ring-2 border-[#D5D7DA] focus-within:ring-[#7D48DF] ${
                field.label ? "mt-[6px]" : ""
              }`}
            >
              <Input
                id={`${name}-mm`}
                ref={(el) => (monthRefs.current[name] = el)}
                inputMode="numeric"
                pattern="\d*"
                placeholder="MM"
                value={mm}
                onChange={onMonthChange}
                onBlur={onMonthBlur}
                className=" w-16 border-0 p-0 shadow-none text-base font-medium tracking-wide focus-visible:ring-0 focus-visible:outline-0"
              />
              <span className="select-none px-1 text-lg text-[#D0D5DD]">/</span>
              <Input
                id={`${name}-yy`}
                ref={(el) => (yearRefs.current[name] = el)}
                inputMode="numeric"
                pattern="\d*"
                placeholder="YYYY"
                value={yy}
                onChange={onYearChange}
                onKeyDown={onYearKeyDown}
                className=" w-24 border-0 p-0 shadow-none text-base font-medium tracking-wide focus-visible:ring-0 focus-visible:outline-0"
              />
            </div>
            <input type="hidden" name={name} value={combined} />
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>
        );
      }

      case "select": {
        const selected = values?.[field.name] ?? "";
        return (
          <div className={` ${field.maxWidthClass || "max-w-[512px]"} w-full`}>
            {field.label && (
              <label className="text-sm" htmlFor={field.name}>
                <p className="font-medium text-[#414651]">
                  {field.label} {requiredAsterisk}
                </p>
              </label>
            )}
            <Select
              value={selected}
              onValueChange={(v) => {
                setField(field.name, v);
                if (errors[field.name]) {
                  setErrors((er) => ({ ...er, [field.name]: undefined }));
                }
              }}
            >
              <SelectTrigger
                id={field.name}
                className={`w-full shadow-xs h-9 rounded-md border px-3 outline-none focus:ring-2 border-[#D5D7DA] focus:ring-[#7D48DF] ${
                  field.label ? "mt-[6px]" : ""
                }`}
              >
                <SelectValue placeholder={field.placeholder || "Select"} />
              </SelectTrigger>
              <SelectContent>
                {(field.options || []).map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.iconUrl && (
                      <Image
                        alt={opt.alt || opt.label}
                        src={opt.iconUrl}
                        width={20}
                        height={20}
                        style={{ marginRight: 8 }}
                      />
                    )}
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {field.required && (
              <input
                type="hidden"
                name={field.name}
                value={selected}
                required
              />
            )}
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div>
      {title && (
        <>
          <div className="mb-2">
            <h3 className="text-[18px] text-[#181D27] font-semibold">
              {title}
            </h3>
            <p className="text-sm text-[#535862]">{description}</p>
          </div>
          <Separator />
        </>
      )}
      <form className="text-[#181D27] pb-16 min-h-0" onSubmit={handleSubmit}>
        {sections.map((section, idx) => (
          <React.Fragment key={`section-${idx}`}>
            <div
              className={`my-5 flex flex-row min-h-0 ${
                section.itemsCenter ? "items-center" : ""
              } gap-8`}
            >
              <div className="text-sm w-[250px] min-[1025px]:w-[300px]  ">
                <p className="font-semibold text-[#414651] ">{section.title}</p>
                {section.description && (
                  <p className="text-[#535862]">{section.description}</p>
                )}
              </div>
              <div
                className={`${
                  section.layout === "two"
                    ? "grid grid-cols-2 gap-4 max-w-[512px]"
                    : ""
                } w-full flex-1 ${section.layout !== "two" ? "gap-3 " : ""}`}
              >
                {(section.fields || []).map((field) => (
                  <React.Fragment key={field.name}>
                    {renderField(field)}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {idx < sections.length - 1 && <Separator />}
          </React.Fragment>
        ))}

        <div className="w-full flex flex-row gap-3 justify-end mt-8 text-sm">
          {secondaryAction}

          <Button
            type="submit"
            className="w-fit bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
            onClick={handleSubmit}
          >
            {primaryAction || "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm2;
