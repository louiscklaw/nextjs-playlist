import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Checkout from '../components/Checkout'

const initialOptions = {
  'client-id': 'AQT5-eAKNK7IhAhBGlbHBu_9jBx74ZLCfEioKUWQMXMuMmLcnffmpoUz_z-ewOuKZmpSlDk74UtlH58O',
  currency: 'USD',
  intent: 'capture',
}

export default function Home() {
  return (
    <div className="container">
      nextjs helloworld
      <PayPalScriptProvider options={initialOptions}>
        <Checkout />
      </PayPalScriptProvider>
    </div>
  )
}
