export * from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    primaryRed: string;
    bg: string;
  }
}

type IconType = {
  class?: string;
  color?: string;
};

type Watcher = {
  id: string;
  name: string;
  image: string;
  addProfile?: boolean;
};

type ThemeType = {
  primaryRed: string;
  bg: string;
};
