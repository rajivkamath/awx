import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from '@lingui/react';
import { t } from '@lingui/macro';
import { ActionGroup, Button } from '@patternfly/react-core';

const FormActionGroup = ({ onSubmit, submitDisabled, onCancel, i18n }) => (
  <ActionGroup>
    <Button
      aria-label={i18n._(t`Save`)}
      variant="primary"
      type="submit"
      onClick={onSubmit}
      isDisabled={submitDisabled}
    >
      {i18n._(t`Save`)}
    </Button>
    <Button
      aria-label={i18n._(t`Cancel`)}
      variant="secondary"
      type="button"
      onClick={onCancel}
    >
      {i18n._(t`Cancel`)}
    </Button>
  </ActionGroup>
);

FormActionGroup.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool,
};

FormActionGroup.defaultProps = {
  submitDisabled: false,
};

export default withI18n()(FormActionGroup);
