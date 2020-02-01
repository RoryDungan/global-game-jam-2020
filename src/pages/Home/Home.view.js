import React from 'react';
import { Chatlog, Header, OptionsLayout } from '../../components';
import { PageLayout, Layout } from './Home.styles';

export default ({ otherUser, chatlog }) => (
  <PageLayout>
    <Layout>
      <Header user={otherUser} />
      <Chatlog chatlog={chatlog} />
      <OptionsLayout />
    </Layout>
  </PageLayout>
);
