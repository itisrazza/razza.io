// esbuild handles CSS/image imports at bundle time; declare them so TypeScript
// doesn't error on these imports.
declare module "*.css" {}
declare module "*.png" {
  const src: string;
  export default src;
}
