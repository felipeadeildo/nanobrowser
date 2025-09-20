import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../utils';

export type ButtonProps = {
  theme?: 'light' | 'dark';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export function Button({ theme, variant = 'primary', className, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'py-1 px-4 rounded shadow transition-all',
        {
          // Primary variant - usando cores da Lamyada
          'bg-primary-800 hover:bg-primary-700 text-white hover:scale-105':
            variant === 'primary' && !disabled && theme !== 'dark',
          'bg-primary-700 hover:bg-primary-600 text-white hover:scale-105':
            variant === 'primary' && !disabled && theme === 'dark',
          'bg-secondary-400 text-secondary-600 cursor-not-allowed': variant === 'primary' && disabled,

          // Secondary variant - usando cores derivadas
          'bg-secondary-300 hover:bg-secondary-400 text-secondary-800 hover:scale-105':
            variant === 'secondary' && !disabled,
          'bg-secondary-200 text-secondary-500 cursor-not-allowed': variant === 'secondary' && disabled,

          // Danger variant - mantendo vermelho mas com tons mais suaves
          'bg-red-600 hover:bg-red-700 text-white hover:scale-105':
            variant === 'danger' && !disabled && theme !== 'dark',
          'bg-red-500 hover:bg-red-600 text-white hover:scale-105':
            variant === 'danger' && !disabled && theme === 'dark',
          'bg-red-300 text-red-100 cursor-not-allowed': variant === 'danger' && disabled,
        },
        className,
      )}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
}
