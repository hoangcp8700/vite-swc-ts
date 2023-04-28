---
to: src/pages/<%= h.inflection.capitalize(name) %>.tsx
---
import React from 'react';
import SEO from '@components/common/SEO';

const <%= h.changeCase.pascal(name) %>Page: React.FC = () => (
  <div>
    <SEO />
    Page <%= h.changeCase.pascal(name) %>
  </div>
);

export default <%= h.changeCase.pascal(name) %>Page;
