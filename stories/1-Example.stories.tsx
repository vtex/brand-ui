import React from 'react';
import { ExampleComponent } from '../src/index'

export default {
  title: 'Example Component',
  component: ExampleComponent,
};

export const Text = () => <ExampleComponent text="Storybooks Text Example"/>

export const Emoji = () => <ExampleComponent text="😀 😎 👍 💯"/>
