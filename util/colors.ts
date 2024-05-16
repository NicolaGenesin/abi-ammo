export const getColorNumbers = (value: number | string, inverse: boolean) => {
  if (value === "") {
    return;
  }

  const tmpValue = inverse ? -Number(value) : Number(value);

  if (tmpValue > 0) {
    return "#4cf057";
  } else if (tmpValue < 0) {
    return "#cf0b04";
  } else if (tmpValue === 0) {
    return "gray.500";
  }
};

export const getColor = (value: string | number) => {
  if (value === 0) {
    return "gray.300";
  }
  if (!value) {
    return "";
  }

  // return green color if value contains '+'
  if (value === "") {
    return "vulcan.900";
  }

  // if value contains the character '+', return green
  if (value?.toString().includes("+")) {
    return "#4cf057";
  } else if (value?.toString().includes("-")) {
    return "#cf0b04";
  }
  if (value?.toString().toLowerCase().includes("medium")) {
    return "orange";
  }
  if (value?.toString().toLowerCase().includes("low")) {
    return "#cf0b04";
  }
  if (value?.toString().toLowerCase().includes("high")) {
    return "#4cf057";
  }

  return "tarkovYellow.100";
};
