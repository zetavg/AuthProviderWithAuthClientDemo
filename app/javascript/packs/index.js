import AuthClient from 'auth-client'

const authClient = new AuthClient({
  oauthEndpointURL: '/oauth',
  asyncGetAccessToken: async () => {
    const jsonText = document.getElementById('access-token').innerText
    return JSON.parse(jsonText)
  },
  asyncStoreAccessToken: async (accessTokenObj) => {
    const json = JSON.stringify(accessTokenObj, null, 2)
    document.getElementById('access-token').innerText = json
  },
})

document.getElementById('auth-btn').onclick = () => {
  authClient.asyncAuth({ username: 'user', password: 'pass' })
}

document.getElementById('disauth-btn').onclick = () => {
  authClient.asyncDisAuth()
}

document.getElementById('force-disauth-btn').onclick = () => {
  authClient.asyncDisAuth({ force: true })
}

document.getElementById('get-access-token-btn').onclick = async () => {
  const accessToken = await authClient.asyncGetAccessToken()
  alert(JSON.stringify(accessToken, null, 2))
}

document.getElementById('get-access-token-x3-btn').onclick = async () => {
  authClient.asyncGetAccessToken().then(accessToken => alert(JSON.stringify(accessToken, null, 2)))
  authClient.asyncGetAccessToken().then(accessToken => alert(JSON.stringify(accessToken, null, 2)))
  authClient.asyncGetAccessToken().then(accessToken => alert(JSON.stringify(accessToken, null, 2)))
}

document.getElementById('fetch-btn').onclick = async () => {
  const response = await authClient.fetch('/me.json')
  const json = await response.json()
  alert(JSON.stringify(json, null, 2))
}
