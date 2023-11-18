function pickChakraRandomColor(variant = '') {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink'
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];

  return color + variant;
}

export default pickChakraRandomColor;