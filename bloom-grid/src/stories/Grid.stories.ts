import type { StoryObj, Meta } from '@storybook/html-vite';
import { attach } from '../index';

const meta: Meta = {
  title: 'Library/BloomGrid',
  argTypes: {},
};
export default meta;

type Story = StoryObj;

const createGridElement = () => {
  const wrapper = document.createElement('div');
  wrapper.style.width = '600px';
  wrapper.style.height = '400px';
  wrapper.style.border = '1px solid #ccc';
  wrapper.style.resize = 'both';
  wrapper.style.overflow = 'hidden';

  attach(wrapper);

  return wrapper;
};

export const Default: Story = {
  name: 'Default 2x2 Grid',
  render: () => createGridElement(),
};
