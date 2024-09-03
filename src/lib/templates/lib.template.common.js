/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import getTemplate from '.';

const heading = {
  change_hospital: 'Update On Your Chosen Primary Hospital',
  hospital_customers: 'Exported customer csv',
};

export const commonTemplate = (messageType, data, template) => {
  let headerText;
  switch (messageType) {
  case `${messageType}`:
    headerText = heading[messageType];
    break;
  default:
    headerText = '';
    break;
  }

  return messageType === 'general' ? getTemplate(messageType, data, template) : `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <style>
          table, td, div, h1, p {font-family: Inter, sans-serif;}
      </style>
  </head>
  <body style="margin:0;padding:0;">
        
  </body>
  </html>`;
};
