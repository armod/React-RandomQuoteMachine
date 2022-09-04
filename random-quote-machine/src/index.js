import React from 'react';
import QuoteCard from './components/quotecard';
import Layout from './components/layout';
import ReactDOM from 'react-dom/client';
import {Wrapper} from './components/wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Wrapper>
        <QuoteCard
          /* quote="Either write something worth reading or do something worth writing."
          author='Benjamin Franklin'
          newQbtn='new quote' */ 
          />
      </Wrapper>
    </Layout>
  </React.StrictMode>
);