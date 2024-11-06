export default {
  extends: ['@commitlint/config-conventional'],
  theme: {
    extend: {
      colors: {
        warning: 'hsl(var(--warning))',
        'warning-foreground': 'hsl(var(--warning-foreground))',
      },
    },
  },
};
