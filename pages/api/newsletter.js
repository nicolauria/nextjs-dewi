import { GraphQLClient } from "graphql-request";
import isEmail from 'validator/lib/isEmail';
const mailer = require('../../utils/mailer')

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export default async (req, res) => {
    const { email } = req.body;
    console.log(email)
    if (!email) {
        return res.status(422).json({ message: "Contact form missing one or more fields" });
    } else if (!isEmail(email)) {
        return res.status(422).json({ message: "The email is not valid" });
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
        mutation { createNewsletter(data: {email: "${email}"}) {
          email
          }
        }
        `
      )
    
    res.status(200).json({ message: "Thank you for contacting us." })
}