import { usePostHog } from 'next-use-posthog'

function MyApp({ Component, pageProps }) {
  usePostHog('phc_PVcVsVnVVflIfAU003Hhuic0aNHTIuai2MKq8emQaFf', {
    api_host: 'https://app.posthog.com'
  })

  return <Component {...pageProps} />
}

export default MyApp
