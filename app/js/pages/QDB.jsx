import React from 'react';
import 'scss/buttons.scss';
import { Route, Switch } from 'react-router-dom';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import QuoteList from 'containers/qdb/QuoteList';
import CreateQuoteButton from 'containers/qdb/CreateQuoteButton';
import QDBModal from 'containers/qdb/QDBModal';

const QDB = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">QDB</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <CreateQuoteButton className="btn btn-secondary">
            Create Quote
          </CreateQuoteButton>
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[]} message />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Switch>
          <Route path="/qdb" component={QuoteList} />
          {/* <Route path="/qdb/approval" component={} /> */}
        </Switch>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[]} spinner />
      </div>
    </div>
    <QDBModal />
  </div>
);

export default QDB;
