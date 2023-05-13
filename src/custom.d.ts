declare module "*.jpg";
declare module "*.png";

declare namespace JSX {
  interface IntrinsicElements {
    section: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
