export const palette = {
  lightblue_1: "#dae7ed",
  lightblue_2: "#c4e5f5",
  lightblue_3: "#afdbf0",
  lightblue_4: "#e9f1f5",
  lightred_1: "#faeded",
  lightred_2: "#f7dada",
  lightred_3: "#facdcd",
  lightred_4: "#f7b7b7",
  lightgreen_1: "#e3f2dc",
  lightgreen_2: "#bfe0c9",
  lightgreen_3: "#bfe6ac",
  lightgreen_4: "#bfe0d6",
  lightyellow_1: "#f6f7d5",
  lightyellow_2: "#f7f3c8",
  lightyellow_3: "#f7ecc8",
  lightyellow_4: "#f0eeaf",
  lightpurple_1: "#ede4f2",
  lightpurple_2: "#ecdcf5",
  lightpurple_3: "#dec7eb",
  lightpurple_4: "#e3d2fc",
};

export const getRandomColor = () => {
  const colors = Object.keys(palette);
  return palette[colors[(colors.length * Math.random()) << 0]];
};
