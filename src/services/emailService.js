const AWS = require('aws-sdk'); // Importando o SDK da AWS.

const ses = new AWS.SES({ region: 'us-east-1' }); // Criando um novo objeto SES.

// Aqui, estamos exportando um método de envio de e-mail.
exports.sendEmail = async (to, subject, body) => {
  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: body } },
      Subject: { Data: subject },
    },
    Source: process.env.EMAIL_SOURCE,
  };
  try {
    await ses.sendEmail(params).promise();
  } catch (error) {
    throw new Error('Error sending email');
  }
};
