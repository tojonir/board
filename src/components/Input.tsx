import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import { forwardRef, useRef, useState } from "react";

interface InputProps {
  label?: string;
  type?: string;
  leftIcon?: IconDefinition;
  required?: boolean;
  validate?: (value: string) => string;
  min?: number;
  max?: number;
  multyple?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type, leftIcon, required, validate, min = 4, max = 8, multyple },
    ref
  ) => {
    const barRef = useRef<HTMLDivElement>(null);
    const [inputType, setInputType] = useState<string>(type ? type : "text");
    const [value, setValue] = useState<string>("");
    const [comboValue, setComboValue] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const barAnimation = (show: boolean) => {
      anime({
        targets: barRef.current,
        width: show ? "100%" : "0%",
        easing: "linear",
        duration: 200,
      });
    };
    const focus = () => {
      setError(null);
      barAnimation(true);
    };
    const blur = () => {
      barAnimation(false);
      if (required && value === "") {
        setError("required");
      }
    };
    const change = (value: string) => {
      if (value.length <= max) setValue(value);
      setError(value.length < min ? `${min} characters at least` : null);
      validate && setError(validate(value));
    };
    return (
      <div className="mx-3 my-2">
        <div
          className={`flex items-center w-full border-b ${
            error && "border-b-red-600"
          } pb-2 pr-2`}
        >
          {multyple && (
            <div className="flex">
              {comboValue.map((value, i) => (
                <div
                  key={i}
                  className="flex items-center border px-3 text-gray-400 rounded-[20px] mr-1"
                >
                  <span>{value}</span>
                  <FontAwesomeIcon
                    icon={solid("x")}
                    className="text-[10px] ml-1 cursor-pointer"
                    onClick={() =>
                      setComboValue([...comboValue.filter((v) => v !== value)])
                    }
                  />
                </div>
              ))}
            </div>
          )}
          {leftIcon && (
            <FontAwesomeIcon
              icon={leftIcon}
              className="text-gray-400 ml-1 mr-2"
            />
          )}
          <input
            ref={ref}
            placeholder={label}
            className="w-full outline-none text-gray-600 p-1"
            onFocus={() => focus()}
            onBlur={() => {
              blur();
            }}
            type={inputType}
            autoComplete="new-password"
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter" && multyple) {
                setComboValue([
                  ...comboValue.filter((v) => v !== value),
                  value,
                ]);
                setValue("");
              }
            }}
            onChange={(e) => change(e.target.value)}
          />
          {type === "password" && (
            <FontAwesomeIcon
              icon={
                inputType === "text" ? regular("eye-slash") : regular("eye")
              }
              onClick={() =>
                setInputType(inputType === "text" ? "password" : "text")
              }
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          )}
        </div>
        <div
          ref={barRef}
          className="h-[2px] bg-blue-300 rounded-[2px]"
          style={{ width: "0%" }}
        />
        {error && (
          <p className="text-[12px] text-right text-red-600 py-1">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;
