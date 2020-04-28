const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${phone || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
    const msg = {
      to: "myemail@myemail.com",
      from: "no-reply@myemail.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    sgMail.setApiKey(
      "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"
    );
    sgMail.send(msg);
    res.status(200).send("success");
  }).catch(() => {
    res.status(500).send("error");
  });
});

//Sendgrid is a cloud based emailing service, it is recommended to use together with firebase cloud functions