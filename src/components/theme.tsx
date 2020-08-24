import { defineComponent, provide, reactive, CSSProperties, inject, watch } from 'vue'
import jss from 'jss'
import preset from 'jss-preset-default'
import defaultUnit from 'jss-plugin-default-unit'
import jssGlobal from 'jss-plugin-global'
// const defaultUnit = require('./jss-unit')
// console.log(defaultUnit)
import * as CSS from 'csstype';
jss.setup(preset())
// jss.setup()

const defaultUnitOptions = {
  'line-height': 'px',
  'font-size': 'px'
};

// const options: any = {
//   'line-height': 'rem',
//   'font-size': 'rem',
//   width: val => `${val / 2}px`
// }

jss.use(jssGlobal())
jss.use(defaultUnit())
type JSSFontface = CSS.FontFace & { fallbacks?: CSS.FontFace[] };
type PropsFunc<Props extends object, T> = (props: Props) => T;
/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends CSS.Properties<number | string> {
    '@font-face'?: JSSFontface | JSSFontface[];
  }
  
export type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
  };
  
export interface CreateCSSProperties<Props extends object = {}>
  extends BaseCreateCSSProperties<Props> {
  // Allow pseudo selectors and media queries
  [k: string]:
    | BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>]
    | CreateCSSProperties<Props>;
}

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
export type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<
  ClassKey,
  // JSS property bag
  | CSSProperties
  // JSS property bag where values are based on props
  | CreateCSSProperties<Props>
  // JSS property bag based on props
  | PropsFunc<Props, CreateCSSProperties<Props>>
>;

export type StyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (
    theme: Theme
  ) => StyleRules<Props, ClassKey>;
export type Styles<Theme, Props extends object, ClassKey extends string = string> =
  | StyleRules<Props, ClassKey>
  | StyleRulesCallback<Theme, Props, ClassKey>;


const maps = new Map();

const useStyle = (sty: any, key: string) => {


    const theme: any = inject('theme-color')
    // const _sty = reactive(sty)
    console.log(21312)
    if(!maps.get(key)) {
      let classes
      if(theme) {
        watch(theme, () => {
            const result = sty(theme);
            const jssResult = jss.createStyleSheet(result, {
              
            }).attach();
            console.log('----------')
            // jssResult.update
            classes = jssResult.classes
        }, { immediate: true })
      } else {
        const result = sty(theme);
        const jssResult = jss.createStyleSheet(result, {
          
        }).attach();
        // jssResult.update
        classes = jssResult.classes
      }
        
      maps.set(key, classes)
      return classes
    } else {
      return maps.get(key)
    }

}



const makeStyles = <Theme, ClassKey extends string = string>(
    style: Styles<Theme, {}, ClassKey>,
  ): (props?: any) => ClassNameMap<ClassKey> => {
    return (key: any) => useStyle(style, key);
}


function createStyle<ClassKey extends string, Props extends {}>(styles: StyleRules<Props, ClassKey>): StyleRules<Props, ClassKey> {
    return styles
}


const ThemeProvide = defineComponent((props: { styles?: BaseCreateCSSProperties }, content) => {
    
    const parentStyle: any = inject('theme-color')||{};

    const reactiveStyle = reactive({...parentStyle, ...props.styles})

    provide('theme-color', reactiveStyle);
    return () => < >
        {content.slots.default && content.slots.default()}
    </>
})

ThemeProvide.props = {
    styles: Object
}

export { ThemeProvide, useStyle, createStyle, makeStyles } 