import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { IconButton } from '@/core/components/shared/icon-button/IconButton';


export const ThemeToggle = ({ className }: { className?: string }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const classes = className && className.trim().length > 0 ? className : '';

  return (
    <IconButton icon={(computedColorScheme === 'light' ? IconMoon : IconSun )}
                ariaLabel='Toggle color scheme'
                className='me-2'
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} />
  );
}
