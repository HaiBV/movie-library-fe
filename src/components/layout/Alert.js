import React from 'react';
import { useSelector } from 'react-redux';
import { alertSelector } from 'reducers/selectors';

const Alert = () => {
  const { alerts } = useSelector(alertSelector);
  return (
    alerts !== null &&
    alerts.length > 0 && (
      <>
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
          </div>
        ))}
      </>
    )
  );
};

export default Alert;
