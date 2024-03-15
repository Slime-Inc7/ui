import { Markdown, MarkdownProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';

import { content } from './data';

export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      allowHtml: true,
      children: {
        rows: true,
        value: content,
      },
      fullFeaturedCodeBlock: true,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Markdown {...options} />
    </StoryBook>
  );
};
