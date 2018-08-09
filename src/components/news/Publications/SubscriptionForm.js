import React from 'react';
import _get from 'lodash/get';
import _reduce from 'lodash/reduce';
import mandrillClient from '../../../helpers/mandrillClient';
import _find from 'lodash/find';
import { Text, Checkbox, Radio, TextArea, Number } from '../../shared/Form';
import validator from '../../shared/Form/validator';
import { getLanguage } from '../../../helpers/navigationUrl';

class SubscriptionForm extends React.Component {
  fieldValidators = {};
  a = [];
  state = {
    sendingEmail: false,
    fields: {},
    validated: false,
    validatedFields: {},
    succes: false,
    error: false,
    showErrorMessage: false,
  };

  handleChange = field => e => {
    let value = _get(e, 'currentTarget.value', e);
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [field]: value,
      },
    }));
  };

  handleBlur = (field, validation) => {
    const fieldValidator = validator(validation);
    this.fieldValidators[field] = fieldValidator;

    return e => {
      const value = _get(e, 'currentTarget.value', e);
      const isValid = fieldValidator.isValid(value);

      this.setState(prevState => ({
        validatedFields: {
          ...prevState.validatedFields,
          [field]: isValid,
        },
      }));
    };
  };

  handleClose = () => {
    console.log('handleclose');
    this.refs.form.reset();
    this.child.unCheck();
    this.setState({
      sendingEmail: false,
      fields: {},
      validated: false,
      validatedFields: {},
      succes: false,
      error: false,
      showErrorMessage: false,
    });
    this.props.handleSubscription();
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.sendingEmail) {
      return;
    }

    this.setState({ showErrorMessage: true });

    const { publications, subscriptionName } = this.props;

    const currentPublication = _find(
      publications.edges,
      edge => edge.node.title === subscriptionName
    );

    this.setState({ sendingEmail: true });
    const { sendEmailInfo } = currentPublication.node;

    let allFieldsValid = true;
    const validatedFields = _reduce(
      this.fieldValidators,
      (_validatedFields, validator, field) => {
        const isValid = validator.isValid(this.state.fields[field]);
        if (!isValid) {
          allFieldsValid = false;
        }
        return {
          ..._validatedFields,
          [field]: isValid,
        };
      },
      {}
    );
    console.log(validatedFields);
    if (!allFieldsValid) {
      this.setState(
        {
          validatedFields,
        },
        () => {
          if (this.overlay) {
            this.overlay.scrollTop = 0;
          }
        }
      );
      this.setState({ sendingEmail: false });
      return;
    }

    this.setState({ showErrorMessage: false });
    this.setState({ sendingEmail: true });

    const values = {
      ...this.state.fields,
    };

    const html =
      _reduce(
        values,
        (str, value, key) => {
          return str + `\n<li><strong>${key}</strong>: ${value}</li>`;
        },
        '<ul>'
      ) + `\n</ul>`;

    const message = {
      html: html,
      text: sendEmailInfo.subject,
      subject: sendEmailInfo.subject,
      from_email: sendEmailInfo.fromEMail,
      from_name: sendEmailInfo.fromName,
      to: [
        {
          email: sendEmailInfo.toEMail,
          name: sendEmailInfo.toName,
          type: 'to',
        },
      ],
    };

    //sendEmailInfo.toEMail

    mandrillClient.messages.send(
      { message: message },
      () => {
        this.setState({ sendingEmail: false });
        this.setState({ showErrorMessage: false });
        this.setState({ succes: true });
        this.setState({ error: false });
        this.overlay.scrollTop = 0;
      },
      e => {
        this.setState({ sendingEmail: false });
        this.setState({ showErrorMessage: false });
        this.setState({ error: true });
        this.setState({ succes: false });
        this.overlay.scrollTop = 0;
        console.warn('A mandrill error occurred: ' + e.name + ' - ' + e.message);
      }
    );

    //this.props.handleSubscription()
  };

  render() {
    const {
      subscriptionFormData,
      handleSubscription,
      subscriptionDescription,
      subscriptionName,
      subscriptionType,
    } = this.props;
    const { fields, sendingEmail, validatedFields } = this.state;
    console.log(this);
    if (!subscriptionFormData) {
      return null;
    }
    return (
      <div ref={overlay => (this.overlay = overlay)} className="c-form-overlay">
        <button
          onClick={this.handleClose}
          className="c-form-overlay__close c-button c-button--close js-c-form-overlay-close"
        >
          <div className="close-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M21.3162353,20 L27,14.3162353 L25.6837647,13 L20,18.6837647 L14.3162353,13 L13,14.3162353 L18.6837647,20 L13,25.6837647 L14.3162353,27 L20,21.3162353 L25.6837647,27 L27,25.6837647 L21.3162353,20 Z"
                transform="translate(-13 -13)"
              />
            </svg>
          </div>
          <div className="close-label close-label--trans">
            {_get(subscriptionFormData, 'closeButtonLabel')}
          </div>
        </button>
        <div className="c-form-overlay__content">
          <div className="c-form-overlay__header">
            <h3 className="c-form-overlay__title u-margin--10">{subscriptionName}</h3>
            <p>{subscriptionDescription}</p>
          </div>
          <div className="l-row">
            <div
              className={
                this.state.succes ? 'l-col l-col--12 u-text--center completeMessage' : 'hide'
              }
            >
              {subscriptionFormData.succesMessage}
            </div>
            <div
              className={this.state.error ? 'l-col l-col--12 u-text--center errorMessage' : 'hide'}
            >
              {subscriptionFormData.errorMessage}
            </div>
            <div
              className={
                !this.state.validated && this.state.showErrorMessage
                  ? 'l-col l-col--12 u-text--center incompleteMessage'
                  : 'hide'
              }
            >
              {subscriptionFormData.incompleteMessage}
            </div>
          </div>
          <div className="c-form-overlay__form">
            <form ref="form" onSubmit={this.handleFormSubmit}>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="firstname" className="u-form-label">
                      {subscriptionFormData.firstNameLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('firstname')}
                      onBlur={this.handleBlur('firstname', { required: true })}
                      valid={validatedFields['firstname']}
                      value={fields.firstname}
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder={subscriptionFormData.firstNamePlaceholder}
                      className="u-form-field"
                    />
                  </div>
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="lastname" className="u-form-label">
                      {subscriptionFormData.lastNameLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('lastname')}
                      onBlur={this.handleBlur('lastname', { required: true })}
                      valid={validatedFields['lastname']}
                      value={fields.lastname}
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder={subscriptionFormData.lastNamePlaceholder}
                      className="u-form-field"
                    />
                  </div>
                </div>
              </div>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="email" className="u-form-label">
                      {subscriptionFormData.emailLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('email')}
                      onBlur={this.handleBlur('email', { required: true, email: true })}
                      valid={validatedFields['email']}
                      type="text"
                      id="email"
                      name="email"
                      placeholder={subscriptionFormData.emailPlaceholder}
                      className="u-form-field"
                    />
                  </div>
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="phone" className="u-form-label">
                      {subscriptionFormData.phoneLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('telephone')}
                      onBlur={this.handleBlur('telephone', { required: true, phoneNumber: true })}
                      valid={validatedFields['telephone']}
                      type="text"
                      id="telephone"
                      name="telephone"
                      placeholder={subscriptionFormData.phonePlaceholder}
                      className="u-form-field"
                    />
                  </div>
                </div>
              </div>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12">
                    <label htmlFor="gender" className="u-form-label">
                      {subscriptionFormData.genderLabel}
                    </label>
                  </div>
                  {subscriptionFormData.genderValues &&
                    subscriptionFormData.genderValues.map((item, index) => (
                      <div className="l-col l-col--6 l-md-col--3" key={index}>
                        <div className="u-form-field--radio">
                          <Radio
                            onChange={this.handleChange('gender')}
                            value={item}
                            id={`gender-${item}`}
                            name="gender"
                          />
                          <label htmlFor={`gender-${item}`} className="u-form-label">
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="street" className="u-form-label">
                      {subscriptionFormData.streetLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('street')}
                      onBlur={this.handleBlur('street', { required: true })}
                      valid={validatedFields['street']}
                      value={fields.street}
                      type="text"
                      id="street"
                      name="street"
                      placeholder={subscriptionFormData.streetPlaceholder}
                      className="u-form-field"
                    />
                  </div>
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="housenumber" className="u-form-label">
                      {subscriptionFormData.houseNumberLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('housenumber')}
                      onBlur={this.handleBlur('housenumber', { required: true })}
                      valid={validatedFields['housenumber']}
                      value={fields.housenumber}
                      type="text"
                      id="housenumber"
                      name="housenumber"
                      placeholder={subscriptionFormData.houseNumberPlaceholder}
                      className="u-form-field"
                    />
                  </div>
                </div>
              </div>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="city" className="u-form-label">
                      {subscriptionFormData.residenceLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('city')}
                      onBlur={this.handleBlur('city', { required: true })}
                      valid={validatedFields['city']}
                      value={fields.city}
                      id="city"
                      name="city"
                      placeholder={subscriptionFormData.residencePlaceholder}
                      className="u-form-field"
                    />
                  </div>
                  <div className="l-col l-col--12 l-md-col--6">
                    <label htmlFor="zipcode" className="u-form-label">
                      {subscriptionFormData.postCodeLabel}
                    </label>
                    <Text
                      onChange={this.handleChange('zipcode')}
                      onBlur={this.handleBlur('zipcode', { required: true, postCode: true })}
                      valid={validatedFields['zipcode']}
                      value={fields.zipcode}
                      id="zipcode"
                      name="zipcode"
                      placeholder={subscriptionFormData.postCodePlaceholder}
                      className="u-form-field"
                    />
                  </div>
                </div>
              </div>
              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12">
                    <label htmlFor="gender" className="u-form-label">
                      {subscriptionFormData.magazineLanguageLabel + ' ' + subscriptionType + ' * '}
                    </label>
                  </div>
                  {subscriptionFormData.magazineLaguageValues &&
                    subscriptionType === 'magazine' &&
                    subscriptionFormData.magazineLaguageValues.map((item, index) => (
                      <div className="l-col l-col--12 l-md-col--12" key={index}>
                        <div className="u-form-field--radio">
                          <Radio
                            onChange={this.handleChange('language')}
                            onBlur={this.handleBlur('language', { required: true })}
                            valid={validatedFields['language']}
                            value={item}
                            id={`language-${item}`}
                            name="language"
                            checked={undefined}
                          />
                          <label
                            htmlFor={`language-${item}`}
                            className="u-form-label"
                            style={
                              this.state.showErrorMessage
                                ? validatedFields['language']
                                  ? { color: '#4aa564' }
                                  : { color: '#e31c3d' }
                                : {}
                            }
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                  {subscriptionFormData.brochureLanguageValues &&
                    subscriptionType !== 'magazine' &&
                    subscriptionFormData.brochureLanguageValues.map((item, index) => (
                      <div className="l-col l-col--12 l-md-col--12" key={index}>
                        <div className="u-form-field--radio">
                          <Radio
                            onChange={this.handleChange('language')}
                            onBlur={this.handleBlur('language', { required: true })}
                            valid={validatedFields['language']}
                            value={item}
                            id={`language-${item}`}
                            name="language"
                            checked={undefined}
                          />
                          <label
                            htmlFor={`language-${item}`}
                            className="u-form-label"
                            style={
                              this.state.showErrorMessage
                                ? validatedFields['language']
                                  ? { color: '#4aa564' }
                                  : { color: '#e31c3d' }
                                : {}
                            }
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {subscriptionType === 'magazine' && (
                <div className="u-form-row l-container">
                  <div className="l-row">
                    <div className="l-col l-col--12">
                      <label htmlFor="gender" className="u-form-label">
                        {subscriptionFormData.toReceiveLabel}
                      </label>
                    </div>
                    {subscriptionFormData.toReceiveValues &&
                      subscriptionFormData.toReceiveValues.map((item, index) => (
                        <div className="l-col l-col--12 l-md-col--12" key={index}>
                          <div className="u-form-field--radio">
                            <Radio
                              onChange={this.handleChange('options')}
                              onBlur={this.handleBlur('options', { required: true })}
                              valid={validatedFields['options']}
                              value={item}
                              type="radio"
                              id={`option-full-${item}`}
                              name="options"
                              checked={undefined}
                            />
                            <label
                              htmlFor={`option-full-${item}`}
                              className={
                                validatedFields['options']
                                  ? 'u-form-label'
                                  : 'u-form-label u-form-field--error'
                              }
                              style={
                                this.state.showErrorMessage
                                  ? validatedFields['options']
                                    ? { color: '#4aa564' }
                                    : { color: '#e31c3d' }
                                  : {}
                              }
                            >
                              {item}
                            </label>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              <div className="u-form-row l-container">
                <div className="u-form-field--checkbox checkbox-box">
                  <Checkbox
                    value="true"
                    onChange={this.handleChange('privacy')}
                    onBlur={this.handleBlur('privacy', { required: true })}
                    valid={validatedFields['privacy']}
                    id="privacy"
                    name="privacy"
                    ref={instance => {
                      this.child = instance;
                    }}
                  />
                  <label
                    htmlFor="privacy"
                    style={
                      this.state.showErrorMessage
                        ? validatedFields['privacy'] ? { color: '#4aa564' } : { color: '#e31c3d' }
                        : {}
                    }
                  >
                    {subscriptionFormData.privatePolicyLabel}
                    <a
                      style={
                        this.state.showErrorMessage
                          ? validatedFields['privacy'] ? { color: '#4aa564' } : { color: '#e31c3d' }
                          : {}
                      }
                      target="_blank"
                      href={`../../${subscriptionFormData.privatePolicyLink.linkSlug}`}
                    >
                      {subscriptionFormData.privatePolicyLink.title}
                    </a>
                  </label>
                </div>
              </div>

              <div className="u-form-row l-container">
                <div className="l-row">
                  <div className="l-col l-col--12 u-text--center">
                    <button
                      type="submit"
                      className={
                        !this.state.succes
                          ? `c-button c-button--primary c-button--green u-radius--pill load-more-button ${sendingEmail &&
                              'is-active'}`
                          : 'hide'
                      }
                    >
                      {subscriptionFormData.requestButtonText}
                      <span className="c-spinner" />
                    </button>
                  </div>
                </div>
                <div className="l-row">
                  <div className="l-col l-col--12 u-text--center">
                    <button
                      onClick={this.handleClose}
                      className={
                        this.state.succes
                          ? `c-button c-button--primary c-button--green u-radius--pill load-more-button`
                          : 'hide'
                      }
                    >
                      {_get(subscriptionFormData, 'closeButtonLabel')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionForm;
