/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

///// <reference types="next/navigation-types/compat/navigation" />

// Allow CSS imports under strict noUncheckedSideEffectImports
declare module '*.css' {
  const content: { readonly [className: string]: string } | string;
  export default content;
}
 NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/api-reference/config/typescript for more information.
