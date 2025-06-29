import { Anchor, createTheme } from '@mantine/core';
import { THEME_ENUM } from '@/core/constants/theme.constant'
import { LayoutType } from '@/core/@core-types/theme'

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
    }
}

/* mantine core theme */
export const localTheme = createTheme({
  defaultRadius: '0.25rem',
  components: {
    Anchor:Anchor.extend({
        defaultProps: {
            fz:"inherit"
        }
     })
  }
});