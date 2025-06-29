import { Anchor, Button, createTheme } from '@mantine/core';
import buttontClasses from '@/assets/styles/components/button.module.css';

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