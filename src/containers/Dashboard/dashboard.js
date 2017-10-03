import React, { Component } from 'react';


class Dashboard extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
  }

// Render JSX //

  render() {

    return (
      <section className="tax-service-dashboard">
        <section className="dashboard-nav">

        </section>
        <section className="dashboard-main">
          <div className="mission-control">Mission Control</div>
          <div className="email-us">Have questions? <span className="email-link">Email Us</span></div>
          <div className="dashboard-subtitle">Accounting, Tax, Finance &amp; HR</div>
        </section>
      </section>
    );
  }
}


export default Dashboard;
