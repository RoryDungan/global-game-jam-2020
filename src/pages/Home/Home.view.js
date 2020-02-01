import React from 'react';
import { Chatlog, Header, OptionsLayout } from '../../components';
import { PageLayout, Layout } from './Home.styles';

export default ({ otherUser, chatlog, options, onOptionSelected, isTyping }) => (
  <PageLayout>
    <Layout>
      <Header user={otherUser} />
      <Chatlog chatlog={chatlog} isTyping={isTyping} />
      <OptionsLayout options={options} onOptionSelected={onOptionSelected} />
    </Layout>
  </PageLayout>
);
