import type { Meta, StoryObj } from '@storybook/html-vite';

import { fn } from 'storybook/test';

import { createHeader } from './Header';
import type { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Example/Header',
  render: (args) => createHeader(args),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
