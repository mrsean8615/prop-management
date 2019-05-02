import React, { Component } from "react";

import NewNewsletterForm from "./newsletterNewForm";

class EditNewsletter extends Component {
  onSubmit = fields => {
    // if(button == 'submit') {
    //   // save new newsletter on the backend. perform a post request here.
    //   console.log('trying to submit to backend.');
    // }
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
      //this.props.fetchNewsletterWithId()
      console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="new-newsletter">
        <NewNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          formTitle='Edit Newsletter'
          fieldOnePlaceholder='Newsletter Title'
          fieldOneTitle='Newsletter Title'
          fieldTwoPlaceholder='Body Here'
          fieldTwoTitle='Body'
        />
      </div>
    );
  }
}

export default EditNewsletter;