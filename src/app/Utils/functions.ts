export const InputWidth = (inputValue: string, long?: boolean): string => {
  if (inputValue.length === 0) {
    return "2px";
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    // Canvas not supported, fallback to default width
    return "12px";
  }

  const getTextWidth = (text: string): number => {
    context.font = "16px Arial";
    return (
      Math.round(context.measureText(text).width) +
      (/[A-Z]/.test(text) ? -1 : 1) +
      (/^[0-9]+$/.test(text) ? -1 : 0) //cuz numbers and uppercase are a little bit bigger
    );
  };

  const totalWidth = inputValue
    .split("")
    .reduce((width, char) => width + getTextWidth(char), 0);

  const maxWidth = long ? 400 : 250;
  const calculatedWidth = Math.min(totalWidth, maxWidth);

  return `${calculatedWidth + 5}px`;
};

export function calculateAge(birthDateString: string): string {
  const [day, month, year] = birthDateString.split("-");
  const birthDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  ); // Subtract 1 from month since months are 0-indexed in JavaScript
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return `${age} Years`;
}
