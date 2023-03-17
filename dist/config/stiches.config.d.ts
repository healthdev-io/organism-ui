/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary100: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary600WithLoading: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary600WithLoading: string;
        neutralWhite: string;
        neutralBlack: string;
        miscDisabled: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary100: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary600WithLoading: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary600WithLoading: string;
        neutralWhite: string;
        neutralBlack: string;
        miscDisabled: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary100: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary600WithLoading: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary600WithLoading: string;
        neutralWhite: string;
        neutralBlack: string;
        miscDisabled: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            primary100: string;
            primary600: string;
            primary700: string;
            primary800: string;
            primary600WithLoading: string;
            secondary600: string;
            secondary700: string;
            secondary800: string;
            secondary600WithLoading: string;
            neutralWhite: string;
            neutralBlack: string;
            miscDisabled: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary100: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary600WithLoading: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary600WithLoading: string;
        neutralWhite: string;
        neutralBlack: string;
        miscDisabled: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            primary100: string;
            primary600: string;
            primary700: string;
            primary800: string;
            primary600WithLoading: string;
            secondary600: string;
            secondary700: string;
            secondary800: string;
            secondary600WithLoading: string;
            neutralWhite: string;
            neutralBlack: string;
            miscDisabled: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        primary100: import("@stitches/react/types/theme").Token<"primary100", string, "colors", "">;
        primary600: import("@stitches/react/types/theme").Token<"primary600", string, "colors", "">;
        primary700: import("@stitches/react/types/theme").Token<"primary700", string, "colors", "">;
        primary800: import("@stitches/react/types/theme").Token<"primary800", string, "colors", "">;
        primary600WithLoading: import("@stitches/react/types/theme").Token<"primary600WithLoading", string, "colors", "">;
        secondary600: import("@stitches/react/types/theme").Token<"secondary600", string, "colors", "">;
        secondary700: import("@stitches/react/types/theme").Token<"secondary700", string, "colors", "">;
        secondary800: import("@stitches/react/types/theme").Token<"secondary800", string, "colors", "">;
        secondary600WithLoading: import("@stitches/react/types/theme").Token<"secondary600WithLoading", string, "colors", "">;
        neutralWhite: import("@stitches/react/types/theme").Token<"neutralWhite", string, "colors", "">;
        neutralBlack: import("@stitches/react/types/theme").Token<"neutralBlack", string, "colors", "">;
        miscDisabled: import("@stitches/react/types/theme").Token<"miscDisabled", string, "colors", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        primary100?: string | number | boolean | undefined;
        primary600?: string | number | boolean | undefined;
        primary700?: string | number | boolean | undefined;
        primary800?: string | number | boolean | undefined;
        primary600WithLoading?: string | number | boolean | undefined;
        secondary600?: string | number | boolean | undefined;
        secondary700?: string | number | boolean | undefined;
        secondary800?: string | number | boolean | undefined;
        secondary600WithLoading?: string | number | boolean | undefined;
        neutralWhite?: string | number | boolean | undefined;
        neutralBlack?: string | number | boolean | undefined;
        miscDisabled?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        primary100?: string | number | boolean | undefined;
        primary600?: string | number | boolean | undefined;
        primary700?: string | number | boolean | undefined;
        primary800?: string | number | boolean | undefined;
        primary600WithLoading?: string | number | boolean | undefined;
        secondary600?: string | number | boolean | undefined;
        secondary700?: string | number | boolean | undefined;
        secondary800?: string | number | boolean | undefined;
        secondary600WithLoading?: string | number | boolean | undefined;
        neutralWhite?: string | number | boolean | undefined;
        neutralBlack?: string | number | boolean | undefined;
        miscDisabled?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary100: string;
            primary600: string;
            primary700: string;
            primary800: string;
            primary600WithLoading: string;
            secondary600: string;
            secondary700: string;
            secondary800: string;
            secondary600WithLoading: string;
            neutralWhite: string;
            neutralBlack: string;
            miscDisabled: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {};
};
