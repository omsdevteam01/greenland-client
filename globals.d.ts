// Type declarations for CSS imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Type declarations for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Type declarations for SCSS
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// Type declarations for images
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}