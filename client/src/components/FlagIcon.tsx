import React from "react";

type CountryCode = "US" | "CN" | "ID" | "HK";

interface FlagIconProps {
  code: CountryCode;
  className?: string;
  size?: number;
}

const FlagIcon: React.FC<FlagIconProps> = ({ code, className = "", size }) => {
  const src = `/images/flags/${code.toLowerCase()}.svg`;
  const style: React.CSSProperties = size
    ? { width: size, height: size * 0.67, objectFit: "cover", borderRadius: 2, display: "inline-block", verticalAlign: "middle" }
    : { objectFit: "cover", borderRadius: 2, display: "inline-block", verticalAlign: "middle" };

  return (
    <img
      src={src}
      alt={`${code} flag`}
      className={className}
      style={style}
      loading="lazy"
    />
  );
};

export default FlagIcon;
