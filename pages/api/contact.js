import { GraphQLClient } from "graphql-request";
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
const mailer = require('../../utils/mailer')

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export default async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(422).json({ message: "Contact form missing one or more fields" });
    } else if (!isLength(name, { min: 3, max: 20 })) {
        return res.status(422).json({ message: "Name must be between 3 and 20 characters" });
    } else if (!isEmail(email)) {
        return res.status(422).json({ message: "The email is not valid" });
    } else if (!isLength(subject, { min: 5 })) {
        return res.status(422).json({ message: "Subject must at least 5 characters" });
    } else if (!isLength(message, { min: 5 })) {
        return res.status(422).json({ message: "Message must be at least 5 characters" });
    }

    // send some mail
    mailer.sendMail({
        from: 'admin@ohm.solutions',
        to: 'admin@ohm.solutions',
        subject: 'Message',
        text: 'I hope this message gets sent!'
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });

    await graphcms.request(
        `
        mutation { createContactForm(data: {name: "${name}", email: "${email}", subject: "${subject}", message: "${message}" }) {
          name
          email
          subject
          message
          }
        }
        `
      )
    
    res.status(200).json({ message: "Thank you for contacting us." })
}