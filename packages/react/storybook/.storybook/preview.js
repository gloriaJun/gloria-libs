import { rootCategory, componentsCategory } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        rootCategory.intro,
        rootCategory.components,
        [
          componentsCategory.atomic,
          componentsCategory.molecules,
          componentsCategory.organisms,
        ],
        rootCategory.hooks,
      ],
    },
  },
};
