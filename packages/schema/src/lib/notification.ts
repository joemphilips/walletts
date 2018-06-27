import gql from "graphql-tag";

export const typeDef = gql`

  # message sent from a server to the client
  interface Notification {
    from: Person!
    to: Person!
    date: Date!
  }

  # for begging someone for payment
  type PaymentRequestNotification implements Notification {
    from: Person!
    to: Person!
    date: Date!
    amount: Float!
    message: String
  }

  # for begging community co-owner to pay to some address
  type ProposePaymentNotification implements Notification {
    from: Person!
    to: Person!
    date: Date!
    destination: PaymentDestination!
    message: String
  }

  type CoFounderAppointmentNotification implements Notification {
    from: Person!
    to: Person!
    date: Date!
    account: Account!
    message: String
  }
`