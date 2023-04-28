---
to: src/components/<%= level %>/<%= h.inflection.capitalize(name) %>/index.stories.tsx
---

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.changeCase.pascal(name) %> from '.';

export default {
  title: 'Components/<%= level %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  argTypes: {},
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};