import { Anchor, Button, createTheme } from '@mantine/core';
import { THEME_ENUM } from '@/constants/theme.constant';
import { LayoutType } from '@/@core-types/theme';
import buttontClasses from '@/assets/styles/components/button.module.css';


export type ThemeConfig = {
    panelExpand: boolean
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */
export const themeConfig: ThemeConfig = {
    panelExpand: false,
    layout: {
        type: THEME_ENUM.LAYOUT_TYPE_CLASSIC,
        sideNavCollapse: false,
    },
}

/* mantine core theme */
export const theme = createTheme({
  defaultRadius: '0.25rem',
  components: {
    Anchor:Anchor.extend({
        defaultProps: {
            fz:"inherit"
        }
    }),
    Button: Button.extend({
        classNames: buttontClasses
    })
  }
});