---
to: src/containers/<%= h.inflection.capitalize(name) %>/index.stories.tsx
---

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.changeCase.pascal(name) %>Container from '.';

export default {
  title: 'Containers/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>Container,
  argTypes: {},
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>Container>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>Container> = (args) => <<%= h.changeCase.pascal(name) %>Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {};